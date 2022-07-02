import React from "react";
import styled from "styled-components";
const HeaderStyles = styled.header`
  z-index: 10;
  position: absolute;
`;
const Header = () => {
  return (
    <HeaderStyles>
      <nav className="flex">
        <img
          src="/assets/icons/logo.0cbf9e63b4a021661126.gif"
          alt=""
          className="w-[177px] h-[100px]"
        />

        <div className="flex">
          <div className="toggle"></div>
          <div className="premium"></div>
          <button className="sign-up"></button>
          <ul className="feature-header">
            <li className="share-icon"></li>
            <li className="zoom-icon"></li>
            <li className="menu-icon"></li>
          </ul>
        </div>
      </nav>
    </HeaderStyles>
  );
};

export default Header;