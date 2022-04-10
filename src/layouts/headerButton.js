import * as React from "react";

const buttonBox = {
    position: "relative",
    float: "right",
    height: "fit-content", width: "100px",
    marginTop: "15px",
}

const buttonText = {
    color: "white",
    fontSize: "large",
    textAlign: "center",
}

const HeaderButton = ({buttonStyle, text}) => {
    return(
        <div style={buttonBox}>
            <div style={buttonStyle}></div>
            <div style={buttonText}>{text}</div>
        </div>
    )
}

export default HeaderButton
