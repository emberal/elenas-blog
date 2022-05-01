import * as React from "react";
import {graphql, Link} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Layout from "../layouts/layout";
import {imageContainer} from "../stylesheets/page.module.css"
import {galleryPageColor} from "../stylesheets/colors.module.css"

const image = { //TODO fix when rezising
    position: "relative",
    float: "left",
}
const galleryStyle = {
    overflow: "auto"
}
const dataStyle = {
    paddingLeft: "10px",
    width: "90%",
    marginTop: 0,
    marginBottom: 0,
}

const Gallery = ({data}) => {
    return(//TODO positioning https://medium.com/@kripod/building-highly-performant-masonry-layouts-with-gatsby-js-54115acc3e72
        <Layout title={"Gallery"} homePageColor={galleryPageColor} children={
            <div style={galleryStyle}>
                {
                    data.allContentfulBlogPost.nodes.map( node => ( //Iterates through blogposts
                        <div key={node.id}>
                            {
                                node.pictures.map( picture => ( //Iterates through pictures for each blogpost
                                    <div className={imageContainer} key={picture.id}>
                                        <Link to={"../blog/" + node.slug}>
                                            <GatsbyImage
                                                style={image}
                                                image={getImage(picture.gatsbyImageData)}
                                                alt={picture.description}
                                            />
                                            <h3 style={dataStyle}>{node.title}</h3>
                                        </Link>
                                        <p></p>
                                        <p style={dataStyle}>Published: {node.createdAt}</p>
                                        <p style={dataStyle}>{node.body.childMarkdownRemark.timeToRead} minutes to read</p>
                                    </div>
                                ))
                            }
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
