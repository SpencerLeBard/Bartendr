import React from "react";
import Cam from "../Components/Cam";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Cam />
        <title>Video Streaming With Node</title>
        <body>
          <video id="videoPlayer" controls>
            <source src="http://localhost:8000/video" type="video/mp4" />
          </video>
        </body>
      </div>
    );
  }
}
export default Home;
