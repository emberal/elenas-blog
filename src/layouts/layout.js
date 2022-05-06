import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";
import {Helmet} from "react-helmet";
import Header from "./header";
import Sidebar from "./sidebar";
import Page from "./page";
import {backgroundColor} from "../stylesheets/colors.module.css";
import "../stylesheets/root.css";

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
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <html lang={query.site.siteMetadata.lang}/>
                <title>{title + " | " + query.site.siteMetadata.title}</title>
            </Helmet>

            <div className={backgroundColor}>
                <Page title={title} children={children}></Page>
                <Sidebar color={homePageColor}></Sidebar>
                <Header/>
            </div>
        </div>
    )
}

export default Layout
