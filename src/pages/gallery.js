import * as React from "react";
import * as Modal from "react-modal";
import {graphql, Link} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import classNames from "classnames";
import Layout from "../layouts/layout";
import BlogData from "../layouts/blogData";
import {imageContainer, galleryContainer, emptyPageStyle, galleryDataStyle} from "../stylesheets/page.module.css";
import {galleryPageColor} from "../stylesheets/colors.module.css";
import {galleryGrid} from "../stylesheets/media.module.css";

const imageStyle = {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginLeft: "auto", marginRight: "auto",
}

const Gallery = ({data}) => {

    const isTouch = 'onTouchStart' in window || navigator.maxTouchPoints > 0;
    const blogPost = data.allContentfulBlogPost;

    let pics = [];
    let i = 0;
    while (blogPost.nodes[i] !== undefined) {
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
        i++;
    }

    Modal.setAppElement(document.getElementById('#___gatsby'));
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }

    return( //TODO make all images from the same post in a swipeable container, with left and right buttons on the side
        <Layout title={"Gallery"} homePageColor={galleryPageColor} children={
            (pics.length === 0) ? <span className={emptyPageStyle}>There are currently no posts with pictures :(</span> : (
                <div className={classNames(galleryContainer, galleryGrid)}>
                    {
                        pics.map( pic => (
                            <div className={imageContainer} key={pic.picId}>
                                {/*TODO on touchscreens, modal image*/}
                                {
                                    (isTouch) ? ( //Touch
                                        <div>
                                            <GatsbyImage
                                                onClick={openModal}
                                                style={imageStyle}
                                                image={getImage(pic.pic)}
                                                alt={pic.picAlt}
                                            />
                                            <Modal
                                                isOpen={modalIsOpen}
                                                onRequestClose={closeModal}
                                                contentLabel={"Image"}
                                            >
                                                <div onClick={closeModal}>
                                                    <GatsbyImage alt={pic.picAlt} image={getImage(pic.pic)}/>
                                                </div>
                                            </Modal>
                                        </div>
                                    ) : ( //Not touch
                                        <Link to={"../blog/" + pic.slug}>
                                            <GatsbyImage
                                                style={imageStyle}
                                                image={getImage(pic.pic)}
                                                alt={pic.picAlt}
                                            />
                                        </Link>
                                    )
                                }
                                <div className={galleryDataStyle}>
                                    <Link style={{color: "white"}} to={"../blog/" + pic.slug}>
                                        <h3>{pic.title}</h3>
                                    </Link>
                                    <BlogData createdAt={pic.createdAt} timeToRead={pic.timeToRead}/>
                                    <p></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )
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
