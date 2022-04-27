import * as React from "react";
import {Link, navigate} from "gatsby";

const buttonBox = {
    position: "relative",
    float: "right",
    height: "fit-content", minWidth: "100px",
    marginTop: "5px",
}
const buttonText = {
    color: "white",
    fontSize: "large",
    textAlign: "center",
}
const hidden = {
    fontSize: 0,
}

const HeaderButton = ({buttonStyle, link, icon}) => {
    return(
        <div style={buttonBox}>
            <button type={"button"} style={buttonStyle} onClick={(e) => {
                {/*TODO add clicking animation onClick*/}
                e.preventDefault();
                navigate(link.link);
            }}>
                <span style={hidden}>{link.title}</span>
                {icon}
            </button>
            <div style={buttonText}>
                <Link style={link.style} to={link.link}>{link.title}</Link>
            </div>
        </div>
    )
}

export default HeaderButton
