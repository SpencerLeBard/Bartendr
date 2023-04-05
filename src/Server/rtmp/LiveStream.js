import React from "react";
import VLCPlayer from "react-native-vlc-player";

class LiveStream extends React.Component {
  render() {
    return (
      <VLCPlayer
        autoplay
        url="rtmp://localhost:1935/live"
        playerOptions={{
          VLC_ARGS: "--no-video-title-show",
        }}
      />
    );
  }
}

export default LiveStream;
