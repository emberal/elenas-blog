import * as React from "react";
import {graphql} from "gatsby";
import Layout from "../../layouts/layout";
import Card from "../../layouts/blogCard/card";
import {blogPageColor} from "../../stylesheets/colors.module.css"

const BlogPage = ({data}) => {
    return(
        <Layout title={data.contentfulBlogPost.title} homePageColor={blogPageColor} children={
            <Card
                date={data.contentfulBlogPost.createdAt}
                body={
                    <div className="body"
                           dangerouslySetInnerHTML={{
                               __html: data.contentfulBlogPost.introduction.childMarkdownRemark.html +
                                   data.contentfulBlogPost.body.childMarkdownRemark.html,
                           }}
                    />
                }
                timeToRead={data.contentfulBlogPost.body.childMarkdownRemark.timeToRead}
            />
        }
        description={
            <div className="body"
                 dangerouslySetInnerHTML={{
                __html: data.contentfulBlogPost.introduction.childMarkdownRemark.html}}/> //FIXME description shows [object Object]
        }/>
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
    introduction {
        childMarkdownRemark {
            html
        }
    }
    title
    createdAt(formatString: "Do MMMM YYYY, H:mm")
  }
}
`

export default BlogPage
