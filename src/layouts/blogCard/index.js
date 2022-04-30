import * as React from "react";
import classNames from "classnames";
import {dateStyleFloat} from "../../stylesheets/media.module.css"
import {dateStyle} from "../../stylesheets/page.module.css"

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
const cardPic = {
    position: "relative",
    float: "right",
    width: "400px",
    paddingTop: "20px",
    paddingLeft: "25px",
    right: "10px",
}

const CardLayout = ({date, timeToRead, children}) => {
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
            </div>
            <div style={cardText}>
                {children}
            </div>
        </article>
    );
}

export default CardLayout
