import React from "react";
import ReactPlayer from "react-player";
import video from "../public/assets/videos/Exterior+-+Day.mp4";
function App() {
  return (
    <div>
      <ReactPlayer loop={true} url="/assets/videos/Exterior+-+Day.mp4" />
    </div>
  );
}

export default App;
