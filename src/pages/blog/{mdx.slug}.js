import * as React from "react";
import Layout from "../../layouts/layout";
import {graphql} from "gatsby";
import {blogPageColor} from "../../stylesheets/Colors.module.css"
import Card from "../../layouts/blogCard";

const BlogPage = ({data}) => {
    return(
        <Layout title={data.mdx.frontmatter.title} homePageColor={blogPageColor} children={
            <Card
                title={data.mdx.frontmatter.title}
                date={data.mdx.frontmatter.date}
                body={data.mdx.body}
                pic={data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData}
                picAlt={data.mdx.frontmatter.hero_image_alt}
            />
        }>
        </Layout>
    )
}

export const query = graphql `
query($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      hero_image {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
      date(formatString: "D MMMM, YYYY")
      hero_image_alt
      title
    }
    body
  }
}
`

export default BlogPage
