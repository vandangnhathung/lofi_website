import React from "react";
import ReactPlayer from "react-player";
import Header from "./components/header/Header";
function App() {
  return (
    <div>
      {/* <ReactPlayer loop={true} url="/assets/videos/Exterior+-+Day.mp4" /> */}
      <Header></Header>
      <video autoPlay loop muted>
        <source src="/assets/videos/Exterior+-+Day.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
