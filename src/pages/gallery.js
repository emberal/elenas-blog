import * as React from "react";
import {graphql, Link} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Layout from "../layouts/layout";
import {imageContainer} from "../stylesheets/page.module.css"
import {galleryPageColor} from "../stylesheets/colors.module.css"

const imageStyle = {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginLeft: "auto", marginRight: "auto",
}
const galleryContainer = {
    overflow: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridAutoRows: "auto",
    gridGap: "1em",
    justifyContent: "center",
    paddingLeft: "2.5%", paddingRight: "2.5%",
}
const dataStyle = {
    paddingLeft: "10px",
    width: "90%",
    marginTop: 0,
    marginBottom: 0,
}

const Gallery = ({data}) => {

    let pics = [];
    const blogPost = data.allContentfulBlogPost;
    for (let i = 0; i < blogPost.totalCount; i++) {
        let j = 0;
        while (blogPost.nodes[i].pictures[j] !== undefined) {
            const pic = {
                title: blogPost.nodes[i].title,
                slug: blogPost.nodes[i].slug,
                createdAt: blogPost.nodes[i].createdAt,
                timeToRead: blogPost.nodes[i].body.childMarkdownRemark.timeToRead,
                pic: blogPost.nodes[i].pictures[j].gatsbyImageData,
                picAlt: blogPost.nodes[i].pictures[j].description,
                picId: blogPost.nodes[i].pictures[j].id,
            }
            pics.push(pic);
            j++;
        }

    }

    return( //TODO make all images from the same post in a swipeable container, with left and right buttons on the side
        <Layout title={"Gallery"} homePageColor={galleryPageColor} children={
            <div style={galleryContainer}>
                {
                    pics.map( pic => ( //Iterates through pictures for each blogpost
                        <div className={imageContainer} key={pic.picId}>
                            <Link to={"../blog/" + pic.slug}>
                                <GatsbyImage
                                    style={imageStyle}
                                    image={getImage(pic.pic)}
                                    alt={pic.picAlt}
                                />
                                <h3 style={dataStyle}>{pic.title}</h3>
                            </Link>
                            <p></p>
                            <p style={dataStyle}>Published: {pic.createdAt}</p>
                            <p style={dataStyle}>{pic.timeToRead} minutes to read</p>
                            <p></p>
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
    totalCount
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
