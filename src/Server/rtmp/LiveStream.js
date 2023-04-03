import React, { Component } from "react";
import Hls from "hls";

class LiveStream extends Component {
  componentDidMount() {
    const video = document.getElementById("video");
    const videoSrc = "/hls/test.m3u8";
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    }
  }

  render() {
    return (
      <div>
        <h2>Live Stream</h2>
        <video id="video" width="800" controls></video>
      </div>
    );
  }
}

export default LiveStream;
