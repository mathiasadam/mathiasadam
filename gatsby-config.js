const { customProperties } = require('./src/variables.js')

module.exports = {
  siteMetadata: {
    author: 'mathias adam',
    description: 'Mathias Awarded Designer (Ultrahuman, BeReal and much more... )',
    siteUrl: 'http://madgraphism.com',
    title: 'Mathias Adam',
    keywords: [
      'madgraphism',
      'da paris',
      'directeur artistique paris',
      'BeReal',
      'dribbble designer',
      'senior product designer',
      'ui designer',
      'ux designer',
      'ui ux',
      'ux/ui designer',
      'ui ux designer',
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout'),
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/favicon.png',
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'Mathias Adam',
    //     short_name: 'Mathias Adam',
    //     start_url: '/',
    //     background_color: customProperties['--color-background'],
    //     theme_color: customProperties['--color-brand'],
    //     display: 'standalone',
    //     icon: './src/favicon.ico', // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-118876004-1',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => ({
            url: site.siteMetadata.siteUrl + edge.node.path,
            changefreq: 'monthly',
            priority: 0.7,
          })),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
