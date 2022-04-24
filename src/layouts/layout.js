import * as React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Page from "./page";

const backgroundColor = {
    background: "#3D3D3D",
    //width: "100%", //TODO check borders for gaps
    marginBottom: "-10px", //Makes sure the footer touches the bottom of the page
}

const Layout = ({title, homePageColor, children}) => {
    return(
        <body style={backgroundColor}>
            <Page title={title} children={children}></Page>
            <Sidebar color={homePageColor}></Sidebar>
            <Header></Header>
        </body>
    )
}

export default Layout
