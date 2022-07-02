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
      {night === false && (
        <video autoPlay loop muted className={`opacity-0 transition-all duration-500`}>
          <source src="/assets/videos/Exterior+-+Day.mp4" type="video/mp4" />
        </video>
      )}
      {night === true && (
        <video autoPlay loop muted className={`opacity-100` transition-all duration-500}>
          <source src="/assets/videos/Exterior+-+Night.mp4" type="video/mp4" />
        </video>
      )}
    </HomeStyles>
  );
};

export default Home;
