// netlify/edge-functions/protect.ts
// Blocks abusive bots, protects heavy files from hotlinking/scraping,
// and (optionally) blocks known noisy IP ranges.
//
// Deploy: see netlify.toml below

const BAD_BOT_PATTERNS = [
    /Spider\/2\.0/i,          // culprit in your spike
    /MJ12bot/i,
    /AhrefsBot/i,
    /SemrushBot/i,
    /DotBot/i,
    /Bytespider/i,            // 👈 now included
    /CCBot/i,
    /DataForSeoBot/i,
    /ZoominfoBot/i,
    /SEOkicks/i,
    /Yandex(Bot|Images)/i,
    /PetalBot/i,
    // Add more if needed:
    // /GPTBot/i,
];

const GOOD_BOTS_ALLOWLIST = [
    /Googlebot/i,
    /Bingbot/i,
    /DuckDuckBot/i,
    /Applebot/i,
    /LinkedInBot/i,
    /Slackbot/i,
    /Twitterbot/i,
    /facebookexternalhit/i,
    /Pinterestbot/i,
];

const HEAVY_ASSET_EXT = /\.(pdf|zip|mp4|mov|m4v|avi|mp3|wav|flac)$/i;

// Configure allowed referrers for heavy assets (your site/app domains)
const ALLOWED_REFERRER_HOSTS = new Set([
    "yourdomain.com",
    "www.yourdomain.com",
    "yourapp.netlify.app",
]);

// OPTIONAL: block particularly noisy IP ranges (use sparingly).
// Example: 34.174.0.0/16 (Google Cloud range observed in your logs)
const BLOCKED_CIDRS = [
    { base: "34.174.0.0", mask: 16 }, // comment out if too strict
];

// ------------- helpers -------------
function ipToInt(ip: string): number | null {
    const parts = ip.split(".").map(n => parseInt(n, 10));
    if (parts.length !== 4 || parts.some(n => Number.isNaN(n) || n < 0 || n > 255)) return null;
    return ((parts[0] << 24) >>> 0) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
}
function cidrContains(ip: string, base: string, mask: number): boolean {
    const ipInt = ipToInt(ip);
    const baseInt = ipToInt(base);
    if (ipInt === null || baseInt === null) return false;
    const maskBits = mask === 0 ? 0 : (~0 << (32 - mask)) >>> 0;
    return (ipInt & maskBits) === (baseInt & maskBits);
}
function isBlockedByCIDR(ip: string | null): boolean {
    if (!ip) return false;
    return BLOCKED_CIDRS.some(c => cidrContains(ip, c.base, c.mask));
}
function isGoodBot(ua: string): boolean {
    return GOOD_BOTS_ALLOWLIST.some(re => re.test(ua));
}
function isBadBot(ua: string): boolean {
    return BAD_BOT_PATTERNS.some(re => re.test(ua));
}
function getClientIp(req: Request): string | null {
    // Netlify sets x-nf-client-connection-ip; fall back to x-forwarded-for
    const ip = req.headers.get("x-nf-client-connection-ip")
        || req.headers.get("x-forwarded-for")
        || "";
    return ip.split(",")[0].trim() || null;
}

export default async (req: Request, _ctx: unknown) => {
    const url = new URL(req.url);
    const ua = req.headers.get("user-agent") || "";
    const ref = req.headers.get("referer") || "";
    const method = req.method || "GET";
    const ip = getClientIp(req);

    // 1) Block clearly bad bots (but let major good bots through)
    if (ua && isBadBot(ua) && !isGoodBot(ua)) {
        return new Response("Blocked by policy", { status: 403 });
    }

    // 2) OPTIONAL: Block known noisy IP ranges
    if (isBlockedByCIDR(ip || "")) {
        return new Response("Forbidden", { status: 403 });
    }

    // 3) Protect heavy files from hotlinking/scraping
    if (HEAVY_ASSET_EXT.test(url.pathname)) {
        if (ref) {
            try {
                const rh = new URL(ref).hostname.replace(/^www\./, "");
                const allowed = ALLOWED_REFERRER_HOSTS.has(rh) || ALLOWED_REFERRER_HOSTS.has(`www.${rh}`);
                if (!allowed && !isGoodBot(ua)) {
                    return new Response("Hotlinking not allowed", { status: 403 });
                }
            } catch {
                // malformed referrer → treat as absent
            }
        } else {
            // no referrer: allow direct human hits; block obvious headless bots
            if (!ua || /curl|wget|python-requests|go-http-client/i.test(ua)) {
                return new Response("Forbidden", { status: 403 });
            }
        }
    }

    // 4) Lightweight rate-limit for abusive clients on heavy assets (method-safe)
    //    Simple token bucket-ish: deny HEAD/GET spam with no referrer + bad UA hints.
    if (method === "GET" && HEAVY_ASSET_EXT.test(url.pathname)) {
        if (/bot|spider|crawler|scrape/i.test(ua) && !isGoodBot(ua)) {
            return new Response("Rate limited", { status: 429, headers: { "Retry-After": "1800" } });
        }
    }

    // Otherwise, pass through
    return;
};

export const config = {
    path: "/*", // protect everything (checks only apply when conditions match)
};
