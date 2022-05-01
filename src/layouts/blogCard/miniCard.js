import * as React from "react";
import {Link} from "gatsby";
import CardLayout from "./index";
import {cardTitleStyle} from "../../stylesheets/page.module.css";

const linkStyle = {
    color: "#693B7E"
}

const MiniCard = ({title, date, intro, link, timeToRead, pic, picAlt}) => {
    return(
        <CardLayout
            date={date}
            timeToRead={timeToRead}
            pic={pic}
            picAlt={picAlt}
            title={<h2 className={cardTitleStyle}><Link style={linkStyle} to={link}>{title}</Link></h2>}
            children={<div>{intro}</div>}
        />
    )
}

export default MiniCard
