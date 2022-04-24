import * as React from "react";
import Footer from "./footer";

const pageStyle = {
    fontFamily: "sans-serif",
    background: "white",
    position: "relative",
    margin: "auto",
    width: "1200px", //TODO relative size based on the size of the screen
    minHeight: "100vh",
}
const titleStyle = {
    paddingTop: "100px",
    position: "relative",
    left: "7.5%",
}
const paddingBottom = {
    paddingBottom: "50px",
}

const Page = ({title, children}) => {
    return(
        <main style={pageStyle}>
            <title>{title + "|" + "Elena's blog"}</title>
            <h1 style={titleStyle}>{title}</h1>
            <div style={paddingBottom}>
                {children}
            </div>
            <Footer>{/*TODO add info*/}</Footer>
        </main>
    )
}

export default Page
