import * as React from "react";
import Layout from "../../layouts/layout";
import {graphql} from "gatsby";
import {blogPageColor} from "../../stylesheets/Colors.module.css"
import MiniCard from "../../layouts/blogCard/miniCard";

const Blog = ({data}) => {
    return (
        <Layout homePageColor={blogPageColor} title={"Blog"} children={
            <div>
                {
                    data.allContentfulBlogPost.nodes.map( node => (
                        <article key={node.id}>
                            <MiniCard
                                title={node.title}
                                date={node.publishedDate}
                                link={node.slug}
                                timeToRead={node.body.childMarkdownRemark.timeToRead}
                            />
                        </article>
                    ))
                }
            </div>
        }>
        </Layout>
    );
}

export const query = graphql `
query {
  allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
    nodes {
      title
      publishedDate(formatString: "Do MMMM YYYY, H:mm")
      id
      slug
      body {
        childMarkdownRemark {
          timeToRead
        }
      }
    }
  }
}
`

export default Blog
