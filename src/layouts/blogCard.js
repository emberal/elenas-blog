import * as React from "react";
import {MDXRenderer} from "gatsby-plugin-mdx";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const card = {
    position: "relative",
    left: "7.5%",
    width: "85%", height: "450px",
    paddingBottom: "10px",
    border: "solid grey",
    marginBottom: "50px",
}
const cardText = {
    border: "solid grey",
    position: "absolute",
    left: "2.5%",
    width: "95%", height: "fit-content",
}
const cardPic = {
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
const headline = {
    listStyle: "none",
    display: "flex",
    paddingLeft: 0,
}
const dateStyle = {
    paddingTop: "12px",
    position: "relative",
    float: "right",
}

const Card = ({title, date, body, pictures}) => {
    return(//TODO pictures
        <article style={card}>
            <ul style={headline}>
                <li><h2>{title}</h2></li>
                <li style={dateStyle}><p>{date}</p></li>
            </ul>
            <MDXRenderer children={body}/>
        </article>
    )
}

export default Card
