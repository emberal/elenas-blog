import * as React from "react";
import {Link, navigate} from "gatsby";
import {hidden, headerButtonHide} from "../stylesheets/media.module.css"

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

const HeaderButton = ({buttonStyle, link, icon}) => {
    return(
        <div style={buttonBox}>
            <div className={headerButtonHide}>
                <button type={"button"} className={buttonStyle} onClick={(e) => {
                    {/*TODO add clicking animation onClick*/}
                    e.preventDefault();
                    navigate(link.link);
                }}>
                    <span className={hidden}>{link.title}</span>
                    {icon}
                </button>
                <div style={buttonText}>
                    <Link style={link.style} to={link.link}>{link.title}</Link>
                </div>
            </div>

        </div>
    )
}

export default HeaderButton
