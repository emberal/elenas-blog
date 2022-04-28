// Loads .env files
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Elena's foodblog`,
    siteUrl: `https://elenasblogmaster.gatsbyjs.io/`
  },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          // Footnotes mode (default: true)
          footnotes: true,
          // GitHub Flavored Markdown mode (default: true)
          gfm: true,
          // Plugins configs
          plugins: [],
        }
      },
      {
        resolve: "gatsby-source-contentful",
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        }
      }
    ]
};