import React from "react";
import LiveStream from "../Server/rtmp/LiveStream";

class Home extends React.Component {
  //TODO PROBABLY GOING TO HAVE TO DO CONSTRUCTOR PROPS HERE BASED ON ID OF VIDEO

  render() {
    return (
      <div className="Home">
        <LiveStream />
        <title>Video Streaming With Node</title>
        <video controls muted>
          <source src="http://localhost:8080/video" type="video/mp4"></source>
        </video>
      </div>
    );
  }
}
export default Home;
