import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const HomeStyles = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
const Home = () => {
  const night = useSelector((state) => state.toggle.toggles);
  return (
    <HomeStyles>
      <video
        autoPlay
        loop
        muted
        className={`${
          night ? "opacity-30 invisible" : "opacity-100 "
        } transition-all duration-200`}
      >
        <source src="/assets/videos/Exterior+-+Day.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`${
          night ? "opacity-100" : "opacity-30 invisible"
        } transition-all duration-200`}
      >
        <source src="/assets/videos/Exterior+-+Night.mp4" type="video/mp4" />
      </video>
    </HomeStyles>
  );
};

export default Home;
