import React from "react";
import ReactPlayer from "react-player";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
function App() {
  return (
    <div className="px-[100px]">
      {" "}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header></Header>
              <Home></Home>
            </>
          }
        ></Route>
        {/* <ReactPlayer loop={true} url="/assets/videos/Exterior+-+Day.mp4" /> */}
      </Routes>
    </div>
  );
}

export default App;
