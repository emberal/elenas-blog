import * as React from "react";
import HeaderButton from "./headerButton";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import classNames from "classnames";
import {homePageColor, galleryPageColor, blogPageColor, contactMePageColor} from "../stylesheets/colors.module.css"
import {buttonStyle, headline} from "../stylesheets/header.module.css"
import {headlinePos} from "../stylesheets/media.module.css"
import {iconStyle} from "../stylesheets/page.module.css"

const header = {
    fontFamily: "sans-serif",
    background: "#693B7E",
    position: "absolute",
    left: 0, top: 0,
    height: "80px", width: "100%",
    boxShadow: "0 3px 3px",
}
const buttons = {
    position: "relative",
    float: "right",
    right: "12.5%",
    height: "fit-content", width: "fit-content",
}
const linkStyle = {
    color: "white",
    textDecoration: "none",
}

const Header = () => {
    const buttonClasses = classNames(buttonStyle);
    return(
        <header style={header}>
            <div className={classNames(headline, headlinePos)}>
                <Link style={linkStyle} to={"/"}>
                    Elena's blog
                </Link>
            </div>
            <nav style={buttons}>
                <HeaderButton
                    buttonStyle={classNames(buttonClasses, contactMePageColor)}
                    link={{
                        link: "/contact-me",
                        title: "Contact me",
                        style: linkStyle
                    }}
                    icon={<StaticImage className={iconStyle} src={"../images/icons8-chat-48.png"} alt={"Chat icon"}/>}
                />
                <HeaderButton
                    buttonStyle={classNames(buttonClasses, blogPageColor)}
                    link={{
                        link: "/blog",
                        title: "Blog",
                        style: linkStyle
                    }}
                    icon={<StaticImage className={iconStyle} src={"../images/icons8-comments-48.png"} alt={"Comments icon"}/>}
                />
                <HeaderButton
                    buttonStyle={classNames(buttonClasses, galleryPageColor)}
                    link={{
                        link: "/gallery",
                        title: "Gallery",
                        style: linkStyle
                    }}
                    icon={<StaticImage className={iconStyle} src={"../images/icons8-photo-gallery-48.png"} alt={"Photo-gallery icon"}/>}
                />
                <HeaderButton
                    buttonStyle={classNames(buttonClasses, homePageColor)}
                    link={{
                        link: "/",
                        title: "Home",
                        style: linkStyle
                    }}
                    icon={<StaticImage className={iconStyle} src={"../images/icons8-home-page-48.png"} alt={"Home-page icon"}/>}
                />
            </nav>
        </header>
    )
}

export default Header