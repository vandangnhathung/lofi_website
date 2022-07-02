import React from "react";
import video from "../public/assets/videos/Exterior+-+Day.mp4";
function App() {
  return (
    <div>
      <video autoplay>
        <source
          src="../public/assets/videos/Exterior+-+Day.mp4"
          type="video/mp4"
        />
      </video>{" "}
    </div>
  );
}

export default App;
