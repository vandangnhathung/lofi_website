import React from "react";
import styled from "styled-components";
import logo from "/assets/icons/logo.png";
const HeaderStyles = styled.header``;
const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <nav className="">
          <img src={logo} alt="" />
        </nav>
      </div>
    </HeaderStyles>
  );
};

export default Header;
