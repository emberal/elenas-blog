module.exports = {
  siteMetadata: {
    title: `Elenas foodblog`,
    siteUrl: `https://www.yourdomain.tld` //TODO Add domain
  },
    plugins: [
      "gatsby-plugin-mdx",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: "mdx",
            path: `${__dirname}/mdx`,
        },
      __key: "pages"
      },
      "gatsby-transformer-sharp",
    ]
};