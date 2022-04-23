import * as React from "react";
import Layout from "../../layouts/layout";
import {graphql} from "gatsby";
import {blogPageColor} from "../../stylesheets/Colors.module.css"
import Card from "../../layouts/blogCard/card";

const BlogPage = ({data}) => {
    return(
        <Layout title={data.contentfulBlogPost.title} homePageColor={blogPageColor} children={
            <Card
                date={data.contentfulBlogPost.updatedAt}
                body={<div className="body"
                           dangerouslySetInnerHTML={{
                               __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
                           }}/>}
                timeToRead={data.contentfulBlogPost.body.childMarkdownRemark.timeToRead}
            />
        }>
        </Layout>
    )
}

export const query = graphql `
query($id: String) {
  contentfulBlogPost(id: {eq: $id}) {
    body {
      childMarkdownRemark {
        html
        timeToRead
      }
    }
    title
    updatedAt(formatString: "Do MMMM YYYY, H:mm")
  }
}
`

export default BlogPage
