import React from "react";
import Cam from "../Components/Cam";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Cam />
        <title>Video Streaming With Node</title>
        <body>
          <video id="videoPlayer" width="25%" controls muted="muted" autoplay>
            <source src="/video" type="video/mp4" />
          </video>
        </body>
      </div>
    );
  }
}
export default Home;
