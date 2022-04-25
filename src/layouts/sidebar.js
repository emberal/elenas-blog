import * as React from "react";
import {sidebar} from "../stylesheets/Media.module.css"
import classNames from 'classnames'

const Sidebar = ({color}) => {
    const classes = classNames(sidebar, color)
    return( //TODO add go back up button at the bottom
        <div className={classes}></div>
    )
}

export default Sidebar
