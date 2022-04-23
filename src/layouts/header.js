import * as React from "react";
import HeaderButton from "./headerButton";
import {Link} from "gatsby";

const header = {
    fontFamily: "sans-serif",
    background: "#693B7E",
    position: "absolute",
    left: 0, top: 0,
    height: "80px", width: "100%",
    boxShadow: "0 3px 3px",
}
const headline = {
    color: "white",
    fontSize: "40px",
    position: "absolute",
    top: "10px",
    left: "25%",
}
const buttons = {
    position: "relative",
    float: "right",
    right: "25%",
    height: "fit-content", width: "fit-content",
}
const home = {
    background: "#215A7A",
    position: "relative",
    left: "29px",
    height: "42px", width: "42px",
    margin: "auto auto 5px",
    boxShadow: "1px 4px 4px inset",
    border: "none"
}
const gallery = {
    background: "#217A3F",
    position: "relative",
    left: "29px",
    height: "42px", width: "42px",
    margin: "auto auto 5px",
    boxShadow: "1px 4px 4px",
    border: "none"
}
const blog = {
    background: "#aa6523",
    position: "relative",
    left: "29px",
    height: "42px", width: "42px",
    margin: "auto auto 5px",
    boxShadow: "1px 4px 4px",
    border: "none"
}
const contactMe = {
    background: "#48217A",
    position: "relative",
    left: "29px",
    height: "42px", width: "42px",
    margin: "auto auto 5px",
    boxShadow: "1px 4px 4px",
    border: "none"
}
const linkStyle = {
    color: "white",
    textDecoration: "none"
}

const Header = () => {
    return(
        <header style={header}>
            <div style={headline}>
                <Link style={linkStyle} to={"/"}>
                    Elena's blog
                </Link>
            </div>

            <div style={buttons}>
                <HeaderButton buttonStyle={contactMe} link={ <Link style={linkStyle} to={"/contact-me"}>Contact me</Link> }/>
                <HeaderButton buttonStyle={blog} link={ <Link style={linkStyle} to={"/blog"}>Blog</Link> }/>
                <HeaderButton buttonStyle={gallery} link={ <Link style={linkStyle} to={"/gallery"}>Gallery</Link> }/>
                <HeaderButton buttonStyle={home} link={ <Link style={linkStyle} to={"/"}>Home</Link> }/>
            </div>
        </header>
    )
}

export default Header