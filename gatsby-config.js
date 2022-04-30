// Loads .env files
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Elena's foodblog`,
    description: "Elena's foodblog", //TODO
    lang: `en`,
    siteUrl: `https://elenasblogmaster.gatsbyjs.io/`
  },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-plugin-react-helmet",
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          // Footnotes mode (default: true)
          footnotes: true,
          // GitHub Flavored Markdown mode (default: true)
          gfm: true,
          // Plugins configs
          plugins: [
            {
              resolve: `gatsby-remark-images-contentful`,
              options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: 750,
              },
            },
          ],
        },
      },
      {
        resolve: "gatsby-source-contentful",
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      },
    ]
};