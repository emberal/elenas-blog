import * as React from "react"
import Layout from "../layouts/layout";
import MiniCard from "../layouts/blogCard/miniCard";
import {StaticImage} from "gatsby-plugin-image";
import {homePageColor} from "../stylesheets/Colors.module.css"
import {graphql} from "gatsby";

const aboutMe = {
    position: "relative",
    left: "5%",
    width: "90%", height: "450px",
    paddingTop: "30px",
    overflow: "auto"
}
const aboutMeText = {
    border: "solid grey",
    position: "absolute",
    left: "2.5%",
    width: "95%", height: "fit-content",
}
const aboutMePic = {
    position: "relative",
    float: "right",
    width: "250px",
    paddingTop: "20px",
    paddingLeft: "25px",
    right: "10px",
}
const textPosition = {
    position: "relative",
    left: "5px",
}

const titleStyle = {
    position: "relative",
    left: "7.5%",
    float: "below"
}

const IndexPage = ({data}) => {
    return (
        <Layout title={"About me"} homePageColor={homePageColor} children={
            <div>
                <article style={aboutMe}>
                    <div style={aboutMeText}>
                        <div style={aboutMePic}>
                            <StaticImage src={"../images/ElenaGoddess.jpg"} alt={"A beautiful woman"}/>
                        </div>
                        <div style={textPosition}>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                            <p>
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                                velit esse quam nihil molestiae consequatur,
                                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                            </p>
                        </div>
                    </div>
                </article>
                <h2 style={titleStyle}>Latest blogposts</h2>
                {
                    data.allContentfulBlogPost.nodes.map( node => (
                        <article key={node.id}>
                            <MiniCard
                                title={node.title}
                                date={node.updatedAt}
                                link={"/blog/" + node.slug}
                                timeToRead={node.body.childMarkdownRemark.timeToRead}>
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
  allContentfulBlogPost(sort: {fields: updatedAt, order: DESC}, limit: 2) {
    nodes {
      title
      updatedAt(formatString: "Do MMMM YYYY, H:mm")
      id
      slug
      body {
        childMarkdownRemark {
          timeToRead
        }
      }
    }
  }
}
`

export default IndexPage
