import React from "react";
import styled from "styled-components";
const HeaderStyles = styled.header``;
const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <nav className="">
          <img src="/assets/images/logo.png" alt="" />
        </nav>
      </div>
    </HeaderStyles>
  );
};

export default Header;