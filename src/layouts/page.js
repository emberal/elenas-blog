import * as React from "react";
import Footer from "./footer";

const pageStyle = {
    fontFamily: "sans-serif",
    background: "white",
    position: "relative",
    left: "25%",
    width: "50%", //TODO relative size based on the size of the screen
    minHeight: "100vh",
}
const titleStyle = {
    paddingTop: "100px",
    position: "relative",
    left: "7.5%",
}

const foot = {
    paddingBottom: "50px",
}

const Page = ({title, children}) => {
    return(
        <main style={pageStyle}>
            <title>{title}</title>
            <h1 style={titleStyle}>{title}</h1>
            <div style={foot}>
                {children}
            </div>
            <Footer></Footer>
        </main>
    )
}

export default Page
