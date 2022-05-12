import * as React from "react";
import { Link } from "gatsby";
import Layout from "../layouts/layout";
import {errorColor} from "../stylesheets/colors.module.css";

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage = () => {
    return (
        <Layout title={"Page not found"} homePageColor={errorColor} children={
            <div style={{position: "relative", left: "2.5%"}}>
                <p style={paragraphStyles}>
                    Sorry{" "}
                    <span role="img" aria-label="Pensive emoji">😔</span>{" "}
                    we couldn’t find what you were looking for.
                    <br/><br/>
                    <Link to="/">Go home</Link>.
                </p>
            </div>
        }/>
    );
}

export default NotFoundPage
