import * as React from "react";
import {Link} from "gatsby";

const footer = {
    fontFamily: "sans-serif",
    position: "absolute",
    bottom: 0, left: 0,
    width: "100%",
    backgroundColor: "#3D3D3D",
    color: "white",
}
const center = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "fit-content",
}
const left = {
    float: "left",
}
const right = {
    float: "right",
}
const linkStyle = {
    color: "#a456f0"
}

const Footer = () => {
    return(
        <div style={footer}>
            <p style={left}>Source code on <a style={linkStyle} href={"https://github.com/h600878/elenas-blog"}>Github</a></p>
            <p style={right}>Created using <Link style={linkStyle} to={"https://www.gatsbyjs.com/"}>Gatsby.js </Link>
                and <a style={linkStyle} href={"https://www.contentful.com/"}>Contentful</a></p>
            <p style={center}>Made with &#9829; by Martin</p>
            <p>Icons by <a style={linkStyle} href="https://icons8.com">Icons8</a></p>
        </div>
    )
}

export default Footer
