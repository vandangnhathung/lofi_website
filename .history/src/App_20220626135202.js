import React from "react";
import ReactPlayer from "react-player";
import { Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
function App() {
  return (
    <Routes>
      {/* <ReactPlayer loop={true} url="/assets/videos/Exterior+-+Day.mp4" /> */}
      <Header></Header>
      <Home></Home>
    </Routes>
  );
}

export default App;
