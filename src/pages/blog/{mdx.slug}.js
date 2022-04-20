import * as React from "react";
import Layout from "../../layouts/layout";
import {graphql} from "gatsby";
import {blogPageColor} from "../../stylesheets/Colors.module.css"
import Card from "../../layouts/blogCard/card";

const BlogPage = ({data}) => {
    return(
        <Layout title={data.mdx.frontmatter.title} homePageColor={blogPageColor} children={
            <Card
                date={data.mdx.frontmatter.date}
                body={data.mdx.body}
                pic={data.mdx.frontmatter.image.childImageSharp.gatsbyImageData}
                picAlt={data.mdx.frontmatter.image_alt}
            />
        }>
        </Layout>
    )
}

export const query = graphql `
query($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
      date(formatString: "D MMMM, YYYY")
      image_alt
      title
      introduction
    }
    body
  }
}
`

export default BlogPage
