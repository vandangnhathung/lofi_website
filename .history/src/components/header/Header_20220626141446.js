import React from "react";
import styled from "styled-components";
const HeaderStyles = styled.header`
  z-index: 10;
`;
const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <nav className="">
          <img src="/assets/icons/logo.0cbf9e63b4a021661126.gif" alt="" />
        </nav>
      </div>
    </HeaderStyles>
  );
};

export default Header;
