//* Log rocket 🚀
exports.onClientEntry = () => {
  const Tawk_API = Tawk_API || {};
  const Tawk_LoadStart = new Date();
  (function () {
    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60f95883649e0a0a5ccd6dc3/1fb703h14';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();
  console.log('Tawk 🐦');
};
