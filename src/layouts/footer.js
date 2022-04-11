import * as React from "react";

const footer = {
    fontFamily: "sans-serif",
    position: "absolute",
    bottom: 0, left: 0,
    width: "100%",
    textAlign: "center",
    backgroundColor: "#3D3D3D",
    color: "white",
}

const Footer = () => {
    return(
        <div style={footer}>
            <p>Made with &#9829; by Martin</p>
        </div>
    )
}

export default Footer
