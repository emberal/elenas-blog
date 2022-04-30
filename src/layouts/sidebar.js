import * as React from "react";
import classNames from 'classnames';
import {StaticImage} from "gatsby-plugin-image";
import {sidebar, hidden, scrollBackUpButtonPos} from "../stylesheets/media.module.css";
import {scrollBackUpButton} from "../stylesheets/sidebar.module.css"
import {iconStyle} from "../stylesheets/page.module.css";
import {useEffect, useState} from "react";

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chromium, Firefox, IE and Opera
}

const Sidebar = ({color}) => {
    const [isTop, setIsTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 20;
            if (isTop !== show) {
                setIsTop(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <div className={classNames(sidebar, color)}>
            <button
                className={(isTop) ?
                    classNames(scrollBackUpButton, scrollBackUpButtonPos) :
                    classNames(scrollBackUpButton, scrollBackUpButtonPos, hidden)}
                onClick={scrollToTop} title={"Back to the top"}>
                <StaticImage className={iconStyle} src={"../images/icons8-up-squared-48.png"} alt={"Arrow pointing up"}/>
                <p className={hidden}>Scroll back to the top</p>
            </button>
        </div>
    )
}

export default Sidebar
