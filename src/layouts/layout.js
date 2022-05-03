import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";
import Header from "./header";
import Sidebar from "./sidebar";
import Page from "./page";
import {Helmet} from "react-helmet";
import "../stylesheets/root.css";

const backgroundColor = {
    background: "#3D3D3D",
    //marginBottom: "-10px", //Makes sure the footer touches the bottom of the page
}

const Layout = ({title, homePageColor, children, description}) => {

    const query = useStaticQuery(graphql `
        query {
            site {
                siteMetadata {
                    title
                    lang
                }
            }
        }
    `
    )

    return(
        <div>
            <Helmet>
                <meta name="description" content={description}/>
                <html lang={query.site.siteMetadata.lang}/>
                <title>{title + " | " + query.site.siteMetadata.title}</title>
            </Helmet>

            <div style={backgroundColor}>
                <Page title={title} children={children}></Page>
                <Sidebar color={homePageColor}></Sidebar>
                <Header/>
            </div>
        </div>
    )
}

export default Layout
