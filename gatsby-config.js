module.exports = {
  siteMetadata: {
    title: `Elenas foodblog`,
    siteUrl: `https://www.yourdomain.tld`
  },
    plugins: [
      "gatsby-plugin-mdx",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: "pages",
            path: "./src/pages/"
        },
      __key: "pages"
      },
      "gatsby-transformer-sharp",
    ]
};