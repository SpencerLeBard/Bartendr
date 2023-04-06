import React from "react";
import LiveStream from "../Server/rtmp/LiveStream";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <LiveStream url="http://localhost:8080" />
      </div>
    );
  }
}
export default Home;
