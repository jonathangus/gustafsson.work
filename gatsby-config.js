module.exports = {
  siteMetadata: {
    title: `Jonathan Gustafsson`,
    description:
      'Jonathan Gustafsson is a senior frontend developer consultant.',
    author: `@jonathangus`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        esModuleInterop: true
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/content/about`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/content/work`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '*.js': ['Cache-Control: public, max-age=31449600'],
          '*.css': ['Cache-Control: public, max-age=31449600'],
          '*.woff2': ['Cache-Control: public, max-age=31449600'],
          '*.woff': ['Cache-Control: public, max-age=31449600']
        }
      }
    },

    'gatsby-plugin-netlify-cache',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/victory-hand.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV === 'development'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: ['400', '500', '700']
          }
        ]
      }
    }
  ]
}
