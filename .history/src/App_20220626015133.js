import React from "react";
import ReactPlayer from "react-player";
function App() {
  return (
    <div>
      {/* <ReactPlayer loop={true} url="/assets/videos/Exterior+-+Day.mp4" /> */}
      <video autoPlay loop muted>
        <source src="/assets/videos/Exterior+-+Day.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
