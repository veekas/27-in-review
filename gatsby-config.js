module.exports = {
  siteMetadata: {
    title: `Veekas Shrivastava's 27: Year-In-Review`,
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
        name: `Veekas Shrivastava's 27: Year-In-Review`,
        short_name: `Veekas Year-In-Review`,
        start_url: `/`,
        background_color: `lightgray`,
        theme_color: `#0098aa`,
        display: `minimal-ui`,
        icon: `src/images/vmp-logo-gold.png`,
      },
    },
    `gatsby-plugin-emotion`,
    'gatsby-plugin-offline', // must be after 'gatsby-plugin-manifest'
  ],
}
