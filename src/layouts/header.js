import * as React from "react";
import HeaderButton from "./headerButton";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

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
    boxShadow: "1px 4px 4px" /*inset"*/,
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
const iconStyle = {
    maxWidth: "28px",
    margin: "auto",
}

const Header = () => {
    return(
        <header style={header}>
            <div style={headline}>
                <Link style={linkStyle} to={"/"}>
                    Elena's blog
                </Link>
            </div>

            <nav style={buttons}>
                <HeaderButton
                    buttonStyle={contactMe}
                    link={{
                        link: "/contact-me",
                        title: "Contact me",
                        style: linkStyle
                    }}
                    icon={<StaticImage style={iconStyle} src={"../images/icons8-chat-48.png"} alt={"Chat icon"}/>}
                />
                <HeaderButton
                    buttonStyle={blog}
                    link={{
                        link: "/blog",
                        title: "Blog",
                        style: linkStyle
                    }}
                    icon={<StaticImage style={iconStyle} src={"../images/icons8-comments-48.png"} alt={"Comments icon"}/>}
                />
                <HeaderButton
                    buttonStyle={gallery}
                    link={{
                        link: "/gallery",
                        title: "Gallery",
                        style: linkStyle
                    }}
                    icon={<StaticImage style={iconStyle} src={"../images/icons8-photo-gallery-48.png"} alt={"Photo-gallery icon"}/>}
                />
                <HeaderButton
                    buttonStyle={home}
                    link={{
                        link: "/",
                        title: "Home",
                        style: linkStyle
                    }}
                    icon={<StaticImage style={iconStyle} src={"../images/icons8-home-page-48.png"} alt={"Home-page icon"}/>}
                />
            </nav>
        </header>
    )
}

export default Header