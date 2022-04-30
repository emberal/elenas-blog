import * as React from "react";
import Layout from "../layouts/layout";
import {icons8Color} from "../stylesheets/colors.module.css"

const linksStyle = {
    position: "relative",
    textAlign: "center",
}

const Icons8 = () => {
    return (
        <Layout homePageColor={icons8Color} title={"Icons from icons8.com"}
                children={
                    <div style={linksStyle}>
                        <p><a target="_blank" href="https://icons8.com/icon/83246/home-page">Home Page</a> icon by <a
                            target="_blank" href="https://icons8.com">Icons8</a></p>
                        <p><a target="_blank" href="https://icons8.com/icon/88166/photo-gallery">Photo Gallery</a> icon
                            by <a target="_blank" href="https://icons8.com">Icons8</a></p>
                        <p><a target="_blank" href="https://icons8.com/icon/82768/comments">Comments</a> icon by <a
                            target="_blank" href="https://icons8.com">Icons8</a></p>
                        <p><a target="_blank" href="https://icons8.com/icon/85701/chat">Chat</a> icon by <a
                            target="_blank" href="https://icons8.com">Icons8</a></p>
                        <p><a target="_blank" href="https://icons8.com/icon/100658/up-squared">Up Squared</a> icon by <a
                            target="_blank" href="https://icons8.com">Icons8</a></p>
                    </div>
                }
        />
    );
}

export default Icons8