import * as React from "react";
import {dateStyle, dateStyleFloat} from "../../stylesheets/Media.module.css"
import classNames from "classnames";

const card = {
    position: "relative",
    left: "7.5%",
    width: "85%", height: "fit-content",
    paddingBottom: "10px",
    border: "solid grey",
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
    const classes = classNames(dateStyle, dateStyleFloat);
    return(
        <article style={card}>
            <div className={classes}>
                <p>Published: {date}</p>
                <p>{timeToRead} minute read</p>
            </div>
            <div style={cardText}>
                {children}
            </div>
        </article>
    );
}

export default CardLayout
