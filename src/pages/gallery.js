import * as React from "react";
import Layout from "../layouts/layout";
import {galleryPageColor} from "../stylesheets/Colors.module.css"
import {graphql} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const image = { //TODO fix when rezising
    maxWidth: "40%",
    marginRight: "60px",
    marginBottom: "50px",
    position: "relative",
    left: "7.5%",
    float: "left",
}

const galleryStyle = {
    overflow: "auto"
}

const Gallery = ({data}) => {
    return(//TODO positioning, titles, dates and links https://medium.com/@kripod/building-highly-performant-masonry-layouts-with-gatsby-js-54115acc3e72
        <Layout title={"Gallery"} homePageColor={galleryPageColor} children={
            <div style={galleryStyle}>
                {
                    data.allMdx.nodes.map( node => (
                        <div key={node.frontmatter.hero_image.childImageSharp.id}>
                            <GatsbyImage style={image}
                                image={getImage(node.frontmatter.hero_image.childImageSharp.gatsbyImageData)}
                                alt={node.frontmatter.hero_image_alt}>
                            </GatsbyImage>
                        </div>
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
        hero_image {
          childImageSharp {
            gatsbyImageData
            id
          }
        }
        hero_image_alt
        title
        date(formatString: "D MMMM, YYYY")
      }
      id
    }
  }
}
`

export default Gallery
