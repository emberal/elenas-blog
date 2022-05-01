import * as React from "react"
import classNames from "classnames";
import {graphql} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Layout from "../layouts/layout";
import MiniCard from "../layouts/blogCard/miniCard";
import Card from "../layouts/blogCard/card";
import {homePageColor} from "../stylesheets/colors.module.css"
import {cardPicPos} from "../stylesheets/media.module.css";
import {aboutMePic} from "../stylesheets/page.module.css"

const aboutMe = {
    position: "relative",
    width: "fit-content", height: "fit-content",
    paddingTop: "30px",
}
const textPosition = {
    position: "relative",
    left: "2.5px",
}
const titleStyle = {
    position: "relative",
    left: "2.5%",
}

const IndexPage = ({data}) => {
    return (
        <Layout title={"About me"} homePageColor={homePageColor} children={
            <div>
                <Card style={aboutMe} body={
                    <div>
                        <div className={classNames(aboutMePic, cardPicPos)}>
                            <GatsbyImage
                                image={getImage(data.contentfulProfile.profilePicture.gatsbyImageData)}
                                alt={data.contentfulProfile.profilePicture.description}/>
                        </div>
                        <div style={textPosition} className="body"
                         dangerouslySetInnerHTML={{
                             __html: data.contentfulProfile.body.childMarkdownRemark.html
                         }}/>
                    </div>
                }>
                </Card>
                <div>
                    <h2 style={titleStyle}>Latest blogposts</h2>
                    {
                        data.allContentfulBlogPost.nodes.map( node => (
                            <article key={node.id}>
                                <MiniCard
                                    title={node.title}
                                    date={node.createdAt}
                                    link={"/blog/" + node.slug}
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
            </div>
        }
        description={"Elena's foodblog."}/> //TODO better description
    )
}

export const query = graphql `
query {
  contentfulProfile {
    body {
      childMarkdownRemark {
        html
      }
    }
    profilePicture {
      gatsbyImageData
      description
    }
  }
  allContentfulBlogPost(sort: {fields: createdAt, order: DESC}, limit: 2) {
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

export default IndexPage
