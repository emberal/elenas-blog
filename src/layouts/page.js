import * as React from "react";
import Footer from "./footer";
import {pageStyle, pageStyleWidth} from "../stylesheets/Media.module.css"
import classNames from "classnames";

const titleStyle = {
    paddingTop: "100px",
    position: "relative",
    left: "7.5%",
}
const paddingBottom = {
    paddingBottom: "100px",
}

const Page = ({title, children}) => {
    const classes = classNames(pageStyle, pageStyleWidth);
    return(
        <main className={classes}>
                <title>{title + "| Elena's blog"}</title>
                <h1 style={titleStyle}>{title}</h1>
                <div style={paddingBottom}>
                    {children}
                </div>

            <Footer/>
        </main>
    )
}

export default Page
