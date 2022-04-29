import * as React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Page from "./page";

const backgroundColor = {
    background: "#3D3D3D",
    marginBottom: "-10px", //Makes sure the footer touches the bottom of the page
}

const Layout = ({title, homePageColor, children, description}) => {
    return(
        <html lang={"en"}>
            <meta name={"description"} content={description}/>
            <body style={backgroundColor}>
                <Page title={title} children={children}></Page>
                <Sidebar color={homePageColor}></Sidebar>
                <Header/>
            </body>
        </html>

    )
}

export default Layout
