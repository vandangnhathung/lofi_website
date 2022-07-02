import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ButtonStatus from "../buttonStatus/ButtonStatus";
import Radio from "../radio/Radio";

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
  console.log(night);
  return (
    <HomeStyles>
      <video
        autoPlay
        loop
        muted
        className={`${
          night ? "opacity-0 " : "opacity-100 "
        }absolute transition-opacity duration-1000`}
      >
        <source src="/assets/videos/Exterior+-+Day.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`${
          night ? "opacity-100" : "opacity-0"
        }absolute transition-opacity duration-1000`}
      >
        <source src="/assets/videos/Exterior+-+Night.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0">
        <ButtonStatus top="42%" left="8%">
          <Radio></Radio>
        </ButtonStatus>
        <ButtonStatus top="70%" left="64%">
          <Radio></Radio>
        </ButtonStatus>
        <ButtonStatus top="56%" right="34%">
          <Radio></Radio>
        </ButtonStatus>
      </div>
    </HomeStyles>
  );
};

export default Home;
