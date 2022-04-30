import * as React from "react";
import classNames from "classnames";
import {Link} from "gatsby";
import Footer from "./footer";
import {pageStyle, titleStyle} from "../stylesheets/page.module.css"
import {pageStyleWidth, navLinksSmall, navLinksHide, titleStylePadding} from "../stylesheets/media.module.css"

const paddingBottom = {
    paddingBottom: "100px",
}
const navLinkText = {
    margin: "auto",
    position: "relative",
    height: "50px",
    paddingRight: "1rem",
    top: "10px"
}

const Page = ({title, children}) => {
    return (
        <main className={classNames(pageStyle, pageStyleWidth)}>
            <ul className={classNames(navLinksSmall, navLinksHide)}>
                <li><Link to={"/"}><p style={navLinkText}>Home</p></Link></li>
                <li><Link to={"/gallery"}><p style={navLinkText}>Gallery</p></Link></li>
                <li><Link to={"/blog"}><p style={navLinkText}>Blog</p></Link></li>
                <li><Link to={"/contact-me"}><p style={navLinkText}>Contact me</p></Link></li>
            </ul>
            <h1 className={classNames(titleStyle, titleStylePadding)}>{title}</h1>
            <div style={paddingBottom}>
                {children}
            </div>
            <Footer/>
        </main>
    );
}

export default Page
