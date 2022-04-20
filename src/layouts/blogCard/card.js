import * as React from "react";
import CardLayout from "./index";
import {MDXRenderer} from "gatsby-plugin-mdx";

const Card = ({title, body, pic, picAlt}) => {
    return(
        <CardLayout
            pic={pic}
            picAlt={picAlt}
            children={
                <div>
                    <h2>{title}</h2>
                    <MDXRenderer children={body}/>
                </div>
            }>
        </CardLayout>
    )
}

export default Card
