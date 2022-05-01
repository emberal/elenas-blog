import * as React from "react";
import classNames from "classnames";
import {dateStyleFloat, cardPicPos} from "../../stylesheets/media.module.css"
import {dateStyle, cardImageStyle} from "../../stylesheets/page.module.css"
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
    paddingLeft: "20px",
    paddingRight: "20px",
}
const spanStyle = {
    position: "relative",
    paddingRight: "10px",
}

const CardLayout = ({date, timeToRead, title, children, pic, picAlt}) => {
    return(
        <article style={card}>
            {title}
            <div className={dateStyleFloat}>
                <div className={classNames(dateStyle, dateStyleFloat)}>
                    {(timeToRead === undefined && date === undefined) ? null :
                        (
                            <div>
                                <span style={spanStyle}>Published: {date} &#128214; {timeToRead} minutes to read</span>
                            </div>
                        )
                    }
                </div>
                <div style={{clear: "both"}}></div>
                <div className={classNames(dateStyle, dateStyleFloat, cardPicPos)}>
                    {(pic === undefined && picAlt === undefined) ? null :
                        (<GatsbyImage className={classNames(cardImageStyle, cardPicPos)} image={pic} alt={picAlt}/>)
                    }
                </div>
            </div>
            <div style={cardText}>
                {children}
            </div>
        </article>
    );
}

export default CardLayout
