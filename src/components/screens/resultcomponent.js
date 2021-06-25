import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
function ResultComponent() {
    const readfile = () => {
        var txtFile = new XMLHttpRequest();
        txtFile.open("GET", "{url goes here}", true);
        txtFile.onreadystatechange = function () {
            if (txtFile.readyState === 4) {
                if (txtFile.status === 200) {
                    document.getElementById("div").innerHTML = txtFile.responseText;
                }
            }
        };
        txtFile.send(null);
    };
    return (
        <div>
            <h4 style={{ textAlign: "center" }}>
                Text is Converted to your language with Audio
            </h4>
            <AudioPlayer autoPlay src="" onPlay={(e) => console.log("onPlay")} />
            <div onLoad="readfile();">
                <form id="form1" runat="server">
                    <div id="div"></div>
                </form>
            </div>
        </div>
    );
}

export default ResultComponent;