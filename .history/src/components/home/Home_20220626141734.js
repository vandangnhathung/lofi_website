import React from "react";
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
  return (
    <HomeStyles>
      <video autoPlay loop muted>
        <source src="/assets/videos/Exterior+-+Day.mp4" type="video/mp4" />
      </video>
    </HomeStyles>
  );
};

export default Home;
