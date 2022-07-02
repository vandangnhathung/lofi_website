import React from "react";
import styled from "styled-components";
const HeaderStyles = styled.header`
  z-index: 10;
  position: absolute;
`;
const Header = () => {
  return (
    <HeaderStyles>
      <nav className="">
        <img
          src="/assets/icons/logo.0cbf9e63b4a021661126.gif"
          alt=""
          className="w-[177px] h-[100px]"
        />
      </nav>
    </HeaderStyles>
  );
};

export default Header;
