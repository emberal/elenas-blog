import * as React from "react";
import classNames from "classnames";
import {dateStyleFloat} from "../../stylesheets/media.module.css"
import {dateStyle} from "../../stylesheets/page.module.css"
import {GatsbyImage} from "gatsby-plugin-image";

const card = {
    position: "relative",
    left: "2.5%",
    width: "95%", height: "fit-content",
    paddingBottom: "10px",
    border: "solid grey",
    borderRadius: "10px",
    marginBottom: "80px",
    overflow: "auto", //Makes sure the pic is within the <div>
}
const cardText = {
    paddingTop: "0px",
    paddingLeft: "20px",
    paddingRight: "20px",
}
const imageStyle = {
    position: "relative",
    float: "right",
    maxWidth: "400px", maxHeight: "500px",
    paddingTop: "20px",
    paddingLeft: "25px",
    right: "10px",
}

const CardLayout = ({date, timeToRead, children, pic, picAlt}) => {
    return(
        <article style={card}>
            <div className={classNames(dateStyle, dateStyleFloat)}>
                {(timeToRead === undefined && date === undefined) ? null :
                    (
                        <div>
                            <p>Published: {date}</p>
                            <p>{timeToRead} minutes to read</p>
                        </div>
                    )
                }
                {(pic === undefined && picAlt === undefined) ? null :
                    (<GatsbyImage style={imageStyle} image={pic} alt={picAlt}/>)
                }
            </div>
            <div style={cardText}>
                {children}
            </div>
        </article>
    );
}

export default CardLayout
