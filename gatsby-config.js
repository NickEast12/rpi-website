require('dotenv').config({ path: '.env' });

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Global Technology & Digital Transformation Recruitment Agency | RPI`,
    siteUrl: `https://www.rpint.com/`,
    description: `RPI recruits leadership and highly skilled technology talent for companies around the globe. Founded in 1998, our heritage in telecoms has evolved into providing talent solutions across multiple specialisms, services and sectors. We source the talent that ignites transformation in your business.`,
    twitter: `@RPInsight`,
    image: `/icon.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        // path: path.join(__dirname, `src`, `assets`, 'images'),
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Global Technology & Digital Transformation Recruitment Agency | RPI`,
        short_name: `RPI`,
        description: `RPI recruits leadership and highly skilled technology talent for companies around the globe. Founded in 1998, our heritage in telecoms has evolved into providing talent solutions across multiple specialisms, services and sectors. We source the talent that ignites transformation in your business.`,
        start_url: `/`,
        lang: `en`,
        background_color: `#0c2533`,
        theme_color: `#66c2ab`,
        display: `standalone`,
        icon: `./src/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-transform-portable-text`,
      options: {
        extendTypes: [{ typeName: `SanityPost`, contentFieldName: 'body' }],
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 'x2j6emyv',
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_GRAPHQL_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#BE2626`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: '01010101010',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: '',
          cookieName: 'gatsby-gdpr-google-analytics',
          anonymize: true,
        },
        googleTagManager: {
          trackingId: '',
          cookieName: 'gatsby-gdpr-google-tagmanager',
          dataLayerName: 'dataLayer',
        },
        facebookPixel: {
          pixelId: '',
          cookieName: 'gatsby-gdpr-facebook-pixel',
        },
        environments: ['production', 'development'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.rpint.com/',
        sitemap: 'https://www.rpint.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        exclude: [
          `/dev-404-page/`,
          `/404/`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback/`,
        ],
        trailingSlashes: false,
      },
    },
  ],
};
