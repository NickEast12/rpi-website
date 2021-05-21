require('dotenv').config({ path: '.env' });

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Enter`,
    siteUrl: `https://wwww.nick-east.com`,
    description: `Enter`,
    twitter: `@comebacktothis`,
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
    // `gatsby-plugin-gatsby-cloud`,
    //! Font loader for local font files
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     custom: {
    //       families: [
    //         'Gellix-Regular',
    //         'Gellix-Medium',
    //         'Gellix-Bold',
    //         'Gellix-SemiBold',
    //       ],
    //       urls: ['/fonts/fonts.css'],
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nick East `,
        short_name: `Nick East`,
        description: `I'm a front-end web developer based in London, UK. With a love for designing and writing code.`,
        start_url: `/`,
        lang: `en`,
        background_color: `#162129`,
        theme_color: `#1bbc9b`,
        display: `minimal-ui`,
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
        host: 'https://www.nick-east.com',
        sitemap: 'https://www.nick-east.com/sitemap.xml',
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
