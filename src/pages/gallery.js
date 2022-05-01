import * as React from "react";
import Layout from "../layouts/layout";
import {galleryPageColor} from "../stylesheets/colors.module.css"
import {graphql, Link} from "gatsby";
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
    return(//TODO positioning, titles, dates https://medium.com/@kripod/building-highly-performant-masonry-layouts-with-gatsby-js-54115acc3e72
        <Layout title={"Gallery"} homePageColor={galleryPageColor} children={
            <div style={galleryStyle}>
                {
                    data.allContentfulBlogPost.nodes.map( node => ( //Iterates through blogposts
                        <div key={node.id}>
                            <Link to={"../blog/" + node.slug}>
                                {
                                    node.pictures.map( picture => ( //Iterates through pictures for each blogpost
                                        <div key={picture.id}>
                                            <GatsbyImage
                                                style={image}
                                                image={getImage(picture.gatsbyImageData)}
                                                alt={picture.description}
                                            />
                                        </div>
                                    ))
                                }
                            </Link>

                        </div>
                    ))
                }
            </div>
        }
        description={"A gallery of delicious food."}/> //TODO better description
    )
}

export const query = graphql `
query {
  allContentfulBlogPost(sort: {fields: createdAt, order: DESC}) {
    nodes {
      title
      createdAt(formatString: "Do MMMM YYYY, H:mm")
      slug
      body {
        childMarkdownRemark {
          timeToRead
        }
      }
      pictures {
        gatsbyImageData
        description
        id
      }
      id
    }
  }
}
`

export default Gallery
