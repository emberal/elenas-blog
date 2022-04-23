import * as React from "react";
import CardLayout from "./index";

const Card = ({title, date, body, pic, picAlt, timeToRead}) => {
    return(
        <CardLayout
            date={date}
            pic={pic}
            picAlt={picAlt}
            timeToRead={timeToRead}
            children={
                <div>
                    <h2>{title}</h2>
                    {body}
                </div>
            }>
        </CardLayout>
    )
}

export default Card
