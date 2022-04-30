import * as React from "react";
import Layout from "../layouts/layout";
import {contactMePageColor} from "../stylesheets/colors.module.css"

const ContactMe = () => {
    return(
        <Layout title={"Contact me"} homePageColor={contactMePageColor} children={
            <div>

            </div>
        }
        description={"Contact Elena"}/> //TODO Better description
    )
}

export default ContactMe
