import * as React from "react";
import Layout from "../../layouts/layout";
import {graphql} from "gatsby";
import Card from "../../layouts/blogCard";

const blogPageColor = {
    background: "#aa6523"
}

const Blog = ({data}) => {
    return(
        <Layout homePageColor={blogPageColor} title={"Blog"} children={
            <div>
                <div>
                    {
                        data.allMdx.nodes.map(node => (
                            <article key={node.id}>
                                <Card
                                    title={node.frontmatter.title}
                                    date={node.frontmatter.date}
                                    body={node.body}>
                                </Card>
                            </article>
                        ))
                    }
                </div>
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
      }
      body
      id
    }
  }
}
`

export default Blog
