import React from "react";
import styled from "styled-components";

const HomeStyles = styled.div`
  z-index: 1;
  position: absolute;
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
