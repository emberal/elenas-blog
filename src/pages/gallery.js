import * as React from "react";
import Layout from "../layouts/layout";
import {galleryPageColor} from "../stylesheets/colors.module.css"
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
                    data.allContentfulAsset.nodes.map( node => (
                        <div key={node.id}>
                            <GatsbyImage style={image}
                                image={getImage(node.gatsbyImageData)}
                                alt={node.description}>
                            </GatsbyImage>
                        </div>
                    ))
                }
            </div>
        }/>
    )
}

export const query = graphql `
query {
  allContentfulAsset(sort: {fields: createdAt, order: DESC}) {
    nodes {
      gatsbyImageData
      description
      id
    }
  }
  allContentfulBlogPost(sort: {fields: createdAt, order: DESC}) {
    nodes {
      title
      createdAt(formatString: "Do MMMM YYYY, H:mm")
      body {
        childMarkdownRemark {
          timeToRead
        }
      }
    }
  }
}
`

export default Gallery
