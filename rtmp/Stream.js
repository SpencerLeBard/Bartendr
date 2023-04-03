import react from "react";
// import Hls from "hls.js";

export default class Stream extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
      hls: null,
    };
  }

  render() {
    return (
      <div>
        <video id="video" width="800" controls></video>
        video
      </div>
    );
  }
}
