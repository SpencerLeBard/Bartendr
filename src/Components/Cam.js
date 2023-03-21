import React from "react";
import Video from "./Video";

class Cam extends React.Component {
  render() {
    return (
      <div className="Cam flex flex-col w-full">
        <div className="relative m-5 bg-black text-white h-64 w-64 rounded-2xl">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <h1>Bittercreek Cam 1</h1>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <Video />
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="relative m-5 bg-black text-white h-64 w-64 rounded-2xl">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <h1>Eureka Cam 2</h1>
          </div>
        </div>
        <div className="divider"></div>
        <div className="relative m-5 bg-black text-white h-64 w-64 rounded-2xl">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <h1>Prost Cam 3</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Cam;
