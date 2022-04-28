import * as React from "react";
import classNames from "classnames";
import {graphql, Link, useStaticQuery} from "gatsby";
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

    const query = useStaticQuery(graphql `
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)

    return (
        <main className={classNames(pageStyle, pageStyleWidth)}>
            <title>{title + " | " + query.site.siteMetadata.title}</title>
            <div className={classNames(navLinksSmall, navLinksHide)}>
                <Link style={navLink} to={"/"}>Home</Link>
                <Link style={navLink} to={"/gallery"}>Gallery</Link>
                <Link style={navLink} to={"/blog"}>Blog</Link>
                <Link style={navLink} to={"/contact-me"}>Contact me</Link>
            </div>
            <h1 className={classNames(titleStyle, titleStylePadding)}>{title}</h1>
            <div style={paddingBottom}>
                {children}
            </div>
            <Footer/>
        </main>
    );
}

export default Page
