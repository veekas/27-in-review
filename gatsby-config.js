module.exports = {
  siteMetadata: {
    title: `Veekas Shrivastava - 27 In Review`,
    description: `A recap of Veekas Shrivastava's 27th year alive.`,
    author: `@veekas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // relative to site root
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-emotion`,
  ],
}
