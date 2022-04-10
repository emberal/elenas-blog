import * as React from "react";
import HeaderButton from "./headerButton";

const header = {
    fontFamily: "sans-serif",
    background: "#693B7E",
    position: "absolute",
    left: 0, top: 0,
    height: "100px", width: "100%",
    boxShadow: "0 3px 3px",
}
const headline = {
    color: "white",
    fontSize: "40px",
    position: "absolute",
    top: "20px",
    left: "25%",
}
const buttons = {
    position: "relative",
    top: 0,
    float: "right",
    right: "25%",
    height: "fit-content", width: "fit-content",
}
const home = {
    background: "#215A7A",
    position: "relative",
    height: "42px", width: "42px",
    margin: "auto auto 5px",
    boxShadow: "1px 4px 4px inset",
}
const gallery = {
    background: "#217A3F",
    position: "relative",
    height: "42px", width: "42px",
    margin: "auto auto 5px",
    boxShadow: "1px 4px 4px",
}
const blog = {
    background: "#aa6523",
    position: "relative",
    height: "42px", width: "42px",
    margin: "auto auto 5px",
    boxShadow: "1px 4px 4px",
}
const contactMe = {
    background: "#48217A",
    position: "relative",
    height: "42px", width: "42px",
    margin: "auto auto 5px",
    boxShadow: "1px 4px 4px",
}

const Header = () => {
    return(
        <header style={header}>
            <div style={headline}>Elena</div>

            <div style={buttons}>
                <HeaderButton buttonStyle={contactMe} text={"Contact me"}></HeaderButton>
                <HeaderButton buttonStyle={blog} text={"Blog"}></HeaderButton>
                <HeaderButton buttonStyle={gallery} text={"Gallery"}></HeaderButton>
                <HeaderButton buttonStyle={home} text={"Home"}></HeaderButton>
            </div>
        </header>
    )
}

export default Header