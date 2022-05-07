import * as React from "react";
import classNames from 'classnames';
import {StaticImage} from "gatsby-plugin-image";
import {iconStyle} from "../stylesheets/page.module.css";
import {scrollBackUpButton} from "../stylesheets/sidebar.module.css"
import {sidebar, hidden, scrollBackUpButtonPos} from "../stylesheets/screen.module.css";

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chromium, Firefox, IE and Opera
}

const Sidebar = ({color}) => {
    const [isTop, setIsTop] = React.useState(true);
    React.useEffect(() => {
        let isMounted = true;
        const handleScroll = () => {
            if (isMounted) {
                const show = window.scrollY > 50;
                if (isTop !== show) {
                    //setIsTop(show);
                }
                setIsTop(document.documentElement.scrollTop === 0 && document.body.scrollTop === 0);
            }
        }
        const _ = require('lodash');
        document.addEventListener('scroll', _.throttle(handleScroll, 100));
        return () => {
            document.removeEventListener('scroll', handleScroll);
            isMounted = false;
        }
    }, [isTop])

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
