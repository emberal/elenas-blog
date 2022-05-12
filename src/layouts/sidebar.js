import * as React from "react";
import classNames from 'classnames';
import {ArrowUp} from "react-feather";
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
                const show = window.scrollY < 100;
                if (isTop !== show) {
                    setIsTop(show);
                }
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
                <ArrowUp className={iconStyle}/>
                <p className={hidden}>Scroll back to the top</p>
            </button>
        </div>
    )
}

export default Sidebar
