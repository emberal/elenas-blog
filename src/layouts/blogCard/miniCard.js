import * as React from "react";
import CardLayout from "./index"
import {Link} from "gatsby";

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
            children={
                <div>
                    <h2>
                        <Link style={linkStyle} to={link}>{title}</Link>
                    </h2>
                    <div>{intro}</div>
                </div>
            }
        />
    )
}

export default MiniCard
