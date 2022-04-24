import * as React from "react";
import {Link} from "gatsby";

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

const HeaderButton = ({buttonStyle, link, icon}) => {
    return(
        <div style={buttonBox}>
            <button type={"button"} style={buttonStyle} onClick={(e) => {
                e.preventDefault();
                window.location.href="../" + link.link; //TODO use a faster method like <Link/>
            }}>
                {/*TODO add text here!*/}
                {icon}
            </button>
            <div style={buttonText}>
                <Link style={link.style} to={link.link}>{link.title}</Link>
            </div>
        </div>
    )
}

export default HeaderButton
