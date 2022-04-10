import * as React from "react";

const pageStyle = {
    fontFamily: "sans-serif",
    background: "white",
    position: "relative",
    left: "25%",
    paddingTop: "100px",
    width: "50%", height: "100%", //TODO relative size based on the size of the screen
}
const titleStyle = {
    position: "relative",
    left: "7.5%", top: "5%"
}

const Page = ({title, children}) => {
    return(
        <main style={pageStyle}>
            <title>{title}</title>
            <h1 style={titleStyle}>{title}</h1>
            {children}
        </main>
    )
}

export default Page
