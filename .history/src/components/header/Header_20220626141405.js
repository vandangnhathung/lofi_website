import React from "react";
import styled from "styled-components";
import logo from "/assets/icons/logo.0cbf9e63b4a021661126.gif";
const HeaderStyles = styled.header``;
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
