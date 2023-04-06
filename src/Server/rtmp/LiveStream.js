import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const LiveStream = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      console.log("hls: ", hls);
      hls.loadSource("rtmp://localhost:1935/live");
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log("hls on");
        video.play();
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      console.log("else if");
      video.src = "rtmp://localhost:1935/live";
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
    }
  }, []);
  return <video ref={videoRef} controls></video>;
};

export default LiveStream;

// rtmp://localhost:1935/live/test
