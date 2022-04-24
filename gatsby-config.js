// Loads .env files
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Elenas foodblog`,
    siteUrl: `https://www.yourdomain.tld` //TODO Add domain
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
          spaceId: `pt1mb8g11lc6`,
          accessToken: process.env.API_KEY,
        }
      }
    ]
};