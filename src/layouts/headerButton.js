import * as React from "react";

const buttonBox = {
    position: "relative",
    float: "right",
    height: "fit-content", width: "100px",
    marginTop: "5px",
}

const buttonText = {
    color: "white",
    fontSize: "large",
    textAlign: "center",
}

const HeaderButton = ({buttonStyle, link}) => {
    return(
        <div style={buttonBox}>
            <button style={buttonStyle}>{/*TODO add text here!*/}</button>
            <div style={buttonText}>{link}</div>
        </div>
    )
}

export default HeaderButton
