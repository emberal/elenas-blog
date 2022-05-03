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
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: `https://elenasblogmaster.gatsbyjs.io/`,
                policy: [{userAgent: '*', allow: '/'}],
                sitemap: `https://elenasblogmaster.gatsbyjs.io/sitemap.xml`,
                output: "/robots.txt",
            }
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: "/src/pages/sitemap",
            },
        },
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            lang: "en",
            start_url: "/",
            background_color: "#3D3D3D",
            theme_color: "#693B7E",
            // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
            // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
            display: "standalone",
            icon: "src/images/icon.png", // This path is relative to the root of the site.
            // An optional attribute which provides support for CORS check.
            // If you do not provide a crossOrigin option, it will skip CORS for manifest.
            // Any invalid keyword or empty string defaults to `anonymous`
            crossOrigin: `use-credentials`,
          },
        },
        "gatsby-plugin-image", //GatsbyImage
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet", //Working with head
        {
          resolve: `gatsby-transformer-remark`, //Transforming .md files
          options: {
            // Footnotes mode (default: true)
            footnotes: true,
            // GitHub Flavored Markdown mode (default: true)
            gfm: true,
            // Plugins configs
            plugins: [
              {
                resolve: `gatsby-remark-images-contentful`, //Centers the images in md files, and resize to fit screen
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