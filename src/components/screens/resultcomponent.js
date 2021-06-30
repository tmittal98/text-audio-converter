import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import axios from "axios";
export default class ResultComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { text: [], audio: [] };
  }
  componentDidMount() {
    axios
      .get("url")
      .then((response) =>
        this.setState({ audio: response.data.audio, text: response.data.text })
      )
      .catch((error) => {
        console.log(error);
      });
  }
  textArea() {}
  render() {
    return (
      <div>
        <h4 style={{ textAlign: "center" }}>
          Text is Converted to your language with Audio
        </h4>
        <AudioPlayer
          autoPlay
          src={this.state.audio}
          onPlay={(e) => console.log("onPlay")}
        />
        <div>
          <p style={{ margin: "10 px 10px 10px 10px" }}>{this.state.text}</p>
        </div>
      </div>
    );
  }
}
