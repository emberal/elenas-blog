import * as React from "react";
import {sidebar} from "/src/stylesheets/Sidebar.module.css"

const Sidebar = ({color}) => {
    return(
        <div className={sidebar} style={color}></div>
    )
}

export default Sidebar
