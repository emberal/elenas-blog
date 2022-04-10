import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Page from "./page";

const Layout = ({title, backgroundColor, homePageColor, children}) => {
    return(
        <body style={backgroundColor}>
            <Page title={title} children={children}></Page>
            <Sidebar color={homePageColor}></Sidebar>
            <Header></Header>
            <Footer></Footer>
        </body>
    )
}

export default Layout
