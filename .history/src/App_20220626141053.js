import React from "react";
import ReactPlayer from "react-player";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import LayoutHome from "./layout/LayoutHome";
function App() {
  return (
    <div>
      {" "}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LayoutHome>
                <Header></Header>
                <Home></Home>
              </LayoutHome>
            </>
          }
        ></Route>
        {/* <ReactPlayer loop={true} url="/assets/videos/Exterior+-+Day.mp4" /> */}
      </Routes>
    </div>
  );
}

export default App;
