import * as React from "react";
import Layout from "../layouts/layout";
import {contactMePageColor} from "../stylesheets/colors.module.css"

const textStyle = {
    position: "relative",
    left: "2.5%",
}

const ContactMe = () => {
    return(
        <Layout title={"Contact me"} homePageColor={contactMePageColor} children={
            <div style={textStyle}>
                {/*TODO?*/}
                <span>Nothing here</span>
            </div>
            }
            description={"Contact Elena"} //TODO Better description
        />
    )
}

export default ContactMe
