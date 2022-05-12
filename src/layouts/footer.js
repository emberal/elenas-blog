import * as React from "react";

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
    return (
        <div style={footer}>
            <div>
                <p>
                    Created using <a style={linkStyle} href={"https://www.gatsbyjs.com/"} target={"_blank"}
                                     rel={"noreferrer"}>
                    Gatsby.js</a> and <a style={linkStyle} href={"https://www.contentful.com/"} target={"_blank"}
                                         rel={"noreferrer"}>Contentful</a>,
                    Icons by <a style={linkStyle} href={"https://feathericons.com/"} target={"_blank"}
                                rel={"noreferrer"}>FeatherIcons</a>
                </p>
                <p>Source code on <a style={linkStyle} href={"https://github.com/h600878/elenas-blog"} target={"_blank"}
                                     rel={"noreferrer"}>Github</a></p>
                <p>Made with &#9829; by Martin</p>
            </div>
        </div>
    );
}

export default Footer
