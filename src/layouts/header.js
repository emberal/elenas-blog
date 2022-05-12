import * as React from "react";
import {Link, navigate} from "gatsby";
import classNames from "classnames";
import {Home, Image, AlignLeft, AtSign} from "react-feather";
import {homePageColor, galleryPageColor, blogPageColor, contactMePageColor} from "../stylesheets/colors.module.css"
import {buttonStyle, headline} from "../stylesheets/header.module.css"
import {headerButtonHide, headlinePos, hidden} from "../stylesheets/screen.module.css"
import {iconStyle} from "../stylesheets/page.module.css"

const header = {
    fontFamily: "sans-serif",
    background: "#693B7E",
    position: "absolute",
    left: 0, top: 0,
    height: "80px", width: "100%",
    boxShadow: "0 3px 3px",
}
const buttonsStyle = {
    position: "relative",
    float: "right",
    right: "12.5%",
    height: "fit-content", width: "fit-content",
}
const linkStyle = {
    color: "white",
    textDecoration: "none",
}
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
const buttons = [
    {
        id: 0,
        link: "/contact-me",
        title: "Contact me",
        color: contactMePageColor,
        icon: <AtSign className={iconStyle}/>
    },
    {
        id: 1,
        link: "/blog",
        title: "Blog",
        color: blogPageColor,
        icon: <AlignLeft className={iconStyle}/>
    },
    {
        id: 2,
        link: "/gallery",
        title: "Gallery",
        color: galleryPageColor,
        icon: <Image className={iconStyle}/>
    },
    {
        id: 3,
        link: "/",
        title: "Home",
        color: homePageColor,
        icon: <Home className={iconStyle}/>
    }
]

const Header = () => {
    return (
        <header style={header}>
            <div className={classNames(headline, headlinePos)}>
                <Link style={linkStyle} to={"/"}>
                    Elena's blog
                </Link>
            </div>
            {
                buttons.map(button => (
                    <nav key={button.id} style={buttonsStyle}>
                        <HeaderButton
                            buttonStyle={classNames(buttonStyle, button.color)}
                            link={button.link}
                            linkTitle={button.title}
                            icon={button.icon}
                        />
                    </nav>
                ))
            }
        </header>
    );
}

export const HeaderButton = ({buttonStyle, link, linkTitle, icon}) => {
    return(
        <div style={buttonBox}>
            <div className={headerButtonHide}>
                <button type={"button"} className={buttonStyle} onClick={(e) => {
                    e.preventDefault();
                    navigate(link);
                }}>
                    <span className={hidden}>{linkTitle}</span>
                    {icon}
                </button>
                <div style={buttonText}>
                    <Link style={linkStyle} to={link}>{linkTitle}</Link>
                </div>
            </div>
        </div>
    )
}

export default Header