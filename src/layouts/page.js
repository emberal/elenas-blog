import * as React from "react";
import classNames from "classnames";
import {Link} from "gatsby";
import Footer from "./footer";
import {pageStyle, titleStyle} from "../stylesheets/page.module.css"
import {pageStyleWidth, navLinksSmall, navLinksHide, titleStylePadding} from "../stylesheets/Media.module.css"

const paddingBottom = {
    paddingBottom: "100px",
}
const navLink = {
    paddingRight: "2rem",
}

const Page = ({title, children}) => {
    const pageClasses = classNames(pageStyle, pageStyleWidth);
    const navLinksClasses = classNames(navLinksSmall, navLinksHide);
    const titleClasses = classNames(titleStyle, titleStylePadding);

    return (
        <main className={pageClasses}>
            <title>{title + " | Elena's blog"}</title>
            <div className={navLinksClasses}>
                <Link style={navLink} to={"/"}>Home</Link>
                <Link style={navLink} to={"/gallery"}>Gallery</Link>
                <Link style={navLink} to={"/blog"}>Blog</Link>
                <Link style={navLink} to={"/contact-me"}>Contact me</Link>
            </div>
            <h1 className={titleClasses}>{title}</h1>
            <div style={paddingBottom}>
                {children}
            </div>
            <Footer/>
        </main>
    );
}

export default Page
