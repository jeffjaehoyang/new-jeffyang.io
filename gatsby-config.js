require('dotenv').config({
  path: `.env`
});
module.exports = {
  siteMetadata: {
    title: `Jeff Yang`,
    description: `A personal blog by Jeff Yang`,
    author: `Jeff Yang`,
    siteUrl: `https://jeffyang.io`,
    twitterHandle: '@jjeffyang'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`
                  // custom_elements: [{
                  //   'content:encoded': edge.node.html
                  // }, ],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { frontmatter: { category: { eq: "blog" } } }
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        description
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'jeffyang.io - RSS Feed',
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/'
          }
        ]
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-code-titles',
            options: {
              className: 'code-titles'
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLanguage: true,
              noInlineHighlight: false
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-reading-time'
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-170622682-1',
        head: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal Blog by Jeff Yang`,
        short_name: `jeffyang.io`,
        start_url: `/`,
        background_color: `#3b366a`,
        theme_color: `#3b366a`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-tailwindcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/assets/styles/global.css`]
      }
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          databaseURL: process.env.DATABASE_URL,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID,
          measurementID: process.env.MEASUREMENT_ID
        }
      }
    }
  ]
};
