import * as React from "react";
import {Link} from "gatsby";

const footer = {
    fontFamily: "sans-serif",
    position: "absolute",
    bottom: 0, left: 0,
    width: "100%",
    backgroundColor: "#3D3D3D",
    color: "white",
    textAlign: "center",
}
const linkStyle = {
    color: "#c17aff"
}

const Footer = () => {
    return(
        <div style={footer}>
            <div>
                <p>
                    Created using <a style={linkStyle} href={"https://www.gatsbyjs.com/"}>
                        Gatsby.js</a> and <a style={linkStyle} href={"https://www.contentful.com/"}>Contentful</a>,
                        Icons by <Link style={linkStyle} to={"/icons8"}>Icons8</Link>
                </p>
                <p>Source code on <a style={linkStyle} href={"https://github.com/h600878/elenas-blog"}>Github</a></p>
                <p>Made with &#9829; by Martin</p>
            </div>
        </div>
    )
}

export default Footer
