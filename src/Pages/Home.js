import React from "react";
import LiveStream from "../Server/rtmp/LiveStream";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <LiveStream />
      </div>
    );
  }
}
export default Home;
