import React from "react";
import ReactPlayer from "react-player";
function App() {
  return (
    <div>
      <ReactPlayer
        controls={true}
        loop={true}
        url="/assets/videos/Exterior+-+Day.mp4"
      />
    </div>
  );
}

export default App;
