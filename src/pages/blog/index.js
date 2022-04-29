import * as React from "react";
import Layout from "../../layouts/layout";
import {graphql} from "gatsby";
import {blogPageColor} from "../../stylesheets/colors.module.css"
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
                                date={node.createdAt}
                                link={node.slug}
                                timeToRead={node.body.childMarkdownRemark.timeToRead}
                                intro={
                                    <div className="introduction"
                                        dangerouslySetInnerHTML={{
                                        __html: node.introduction.childMarkdownRemark.html,
                                        }}
                                    />
                                    //TODO add pic
                                }
                            />
                        </article>
                    ))
                }
            </div>
        }/>
    );
}

export const query = graphql `
query {
  allContentfulBlogPost(sort: {fields: createdAt, order: DESC}) {
    nodes {
      title
      createdAt(formatString: "Do MMMM YYYY, H:mm")
      id
      slug
      body {
        childMarkdownRemark {
          timeToRead
        }
      }
      introduction {
        childMarkdownRemark {
          html
        }
      }
    }
  }
}
`

export default Blog
