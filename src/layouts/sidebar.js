import * as React from "react";

const sidebar = {
    position: "absolute",
    left: 0, top: 0,
    height: "100%", width: "50px",
    boxShadow: "0 3px 3px",
}

const Sidebar = ({color}) => {
    return(
        <div style={sidebar} className={color}></div>
    )
}

export default Sidebar
