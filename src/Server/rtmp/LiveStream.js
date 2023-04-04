import React, { Component } from "react";
import Hls from "hls.js";

class LiveStream extends Component {
  videoRef = React.createRef();

  componentDidMount() {
    const { current: video } = this.videoRef;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("/hls/test.m3u8");
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = "/hls/test.m3u8";
    }
  }

  render() {
    return (
      <div>
        <h2>Live Stream</h2>
        <video id="video" width="800" controls ref={this.videoRef}></video>
      </div>
    );
  }
}

export default LiveStream;
