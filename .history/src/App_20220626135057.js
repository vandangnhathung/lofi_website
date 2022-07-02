import React from "react";
import ReactPlayer from "react-player";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
function App() {
  return (
    <div>
      {/* <ReactPlayer loop={true} url="/assets/videos/Exterior+-+Day.mp4" /> */}
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
