import * as React from "react";
import Layout from "../../layouts/layout";
import {graphql} from "gatsby";
import MiniCard from "../../layouts/blogCard/miniCard";
import {blogPageColor} from "../../stylesheets/Colors.module.css"

const Blog = ({data}) => {
    return(
        <Layout homePageColor={blogPageColor} title={"Blog"} children={
            <div>
                {
                    data.allMdx.nodes.map(node => (
                        <article key={node.id}>
                            <MiniCard
                                title={node.frontmatter.title}
                                date={node.frontmatter.date}
                                intro={node.frontmatter.introduction}
                                link={node.slug}
                            >
                            </MiniCard>
                        </article>
                    ))
                }
            </div>
        }>
        </Layout>
    )
}

export const query = graphql `
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "D MMMM, YYYY")
        title
        introduction
      }
      body
      slug
      id
    }
  }
}
`

export default Blog
