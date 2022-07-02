import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Toggle, { IOSSwitch } from "../toggle/Toggle";
const HeaderStyles = styled.header`
  z-index: 10;
  position: absolute;
  left: 0;
  right: 0;
  padding: 0 50px;
`;
const Header = () => {
  return (
    <HeaderStyles>
      <nav className="flex items-center justify-between">
        <img
          src="/assets/icons/logo.0cbf9e63b4a021661126.gif"
          alt=""
          className="w-[177px] h-[100px]"
        />

        <div className="flex items-center text-white gap-x-3">
          <Toggle></Toggle>
          <div className="premium">
            <h3 className="py-1 px-3 flex items-center gap-x-2 bg-gradient-to-r rounded-lg from-[#f4ca5de6] to-[#e18654e6] ">
              <h3 className="text-3xl">🚀</h3> Access +20 scenes <br /> & more
              with premium
            </h3>
          </div>
          <button className="px-3 py-1 bg-white bg-opacity-50 rounded-lg cursor-pointer sign-up">
            <span className="text-white">Sign up</span>
          </button>
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
