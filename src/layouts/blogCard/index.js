import * as React from "react";
import classNames from "classnames";
import {GatsbyImage} from "gatsby-plugin-image";
import {dateStyleFloat, cardPicPos, detailsFlow} from "../../stylesheets/media.module.css";
import {dateStyle, cardImageStyle, detailsStyle} from "../../stylesheets/page.module.css";

const card = {
    position: "relative",
    left: "2.5%",
    width: "95%", height: "fit-content",
    paddingBottom: "10px",
    border: "solid grey",
    borderRadius: "10px",
    marginBottom: "80px",
    overflow: "auto",
}
const cardText = {
    paddingLeft: "20px",
    paddingRight: "20px",
}
const noMargin = {
    marginTop: 0,
    marginBottom: 0,
}

const CardLayout = ({date, timeToRead, title, children, pic, picAlt}) => {
    return(
        <article style={card}>
            {title}
            <div className={dateStyleFloat}>
                <div className={classNames(dateStyle, dateStyleFloat)}>
                    {(timeToRead === undefined && date === undefined) ? null :
                        (
                            <div className={classNames(detailsStyle, detailsFlow)}>
                                <p style={noMargin}>Published: {date} &#160;</p>
                                <p style={noMargin}>&#128214; {timeToRead} minutes to read</p>
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
