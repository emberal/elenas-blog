import * as React from "react";
import CardLayout from "./index"
import {Link} from "gatsby";

const linkStyle = {
    color: "#693B7E"
}

const MiniCard = ({title, date, intro, link, timeToRead}) => {
    return(
        <CardLayout
            date={date}
            timeToRead={timeToRead}
            children={
                <div>
                    <h2> {/*TODO headline breaks too soon*/}
                        <Link style={linkStyle} to={link}>{title}</Link>
                    </h2>
                    <p>{intro}</p>
                    {/*TODO Add pic*/}
                </div>
            }>
        </CardLayout>
    )
}

export default MiniCard