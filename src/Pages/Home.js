import React from "react";
import Cam from "../Components/Cam";
import video from "../Assets/1.mp4";

class Home extends React.Component {
  //TODO PROBABLY GOING TO HAVE TO DO CONSTRUCTOR PROPS HERE

  render() {
    return (
      <div className="Home">
        <Cam />
        <title>Video Streaming With Node</title>
        <div className="Home">
          <video controls autostart autoPlay src={video} type="video/mp4" />
        </div>
      </div>
    );
  }
}
export default Home;
