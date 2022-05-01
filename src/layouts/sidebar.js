import * as React from "react";
import classNames from 'classnames';
import {useEffect, useState} from "react";
import {StaticImage} from "gatsby-plugin-image";
import {iconStyle} from "../stylesheets/page.module.css";
import {scrollBackUpButton} from "../stylesheets/sidebar.module.css"
import {sidebar, hidden, scrollBackUpButtonPos} from "../stylesheets/media.module.css";

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chromium, Firefox, IE and Opera
}

const Sidebar = ({color}) => {
    const [isTop, setIsTop] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            if (isTop !== show) {
                setIsTop(show)
            }
            if (document.documentElement.scrollTop === 0 && document.body.scrollTop === 0) {
                setIsTop(true);
            }
        }
        const _ = require('lodash');
        document.addEventListener('scroll', _.throttle(handleScroll, 100))
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <div className={classNames(sidebar, color)}>
            <button
                className={(isTop) ?
                    classNames(scrollBackUpButton, scrollBackUpButtonPos, hidden) :
                    classNames(scrollBackUpButton, scrollBackUpButtonPos)}
                onClick={scrollToTop} title={"Back to the top"}>
                <StaticImage className={iconStyle} src={"../images/icons8-up-squared-48.png"} alt={"Arrow pointing up"}/>
                <p className={hidden}>Scroll back to the top</p>
            </button>
        </div>
    )
}

export default Sidebar
