import * as React from "react";
import classNames from "classnames";
import {detailsStyle} from "../stylesheets/page.module.css";
import {detailsFlow} from "../stylesheets/media.module.css";

const noMargin = {
    marginTop: 0,
    marginBottom: 0,
}

const BlogData = ({createdAt, timeToRead}) => {
    return(
        <div className={classNames(detailsStyle, detailsFlow)}>
            <p style={noMargin}>Published: {createdAt} &#160;</p>
            <p style={noMargin}>&#128214; {timeToRead} minutes to read</p>
        </div>
    )
}

export default BlogData
