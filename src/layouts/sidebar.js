import * as React from "react";

const sidebar = {
    position: "fixed",
    left: 0, top: 0,
    height: "100vh", width: "50px",
    boxShadow: "0 0 3px",
}

const Sidebar = ({color}) => {
    return(
        <div style={sidebar} className={color}></div>
    )
}

export default Sidebar
