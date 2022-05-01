import * as React from "react";
import {graphql} from "gatsby";
import {getImage} from "gatsby-plugin-image";
import Layout from "../../layouts/layout";
import MiniCard from "../../layouts/blogCard/miniCard";
import {blogPageColor} from "../../stylesheets/colors.module.css"

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
                                }
                                pic={getImage(node.pictures[0].gatsbyImageData)}
                                picAlt={node.pictures[0].description}
                            />
                        </article>
                    ))
                }
            </div>
        }
        description={"A foodblog by Elena with plenty of delicious meals"}/>
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
      pictures {
        gatsbyImageData
        description
      }
    }
  }
}
`

export default Blog
