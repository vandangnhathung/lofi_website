import React from "react";
import styled from "styled-components";
import Toggle from "../toggle/Toggle";
import { BiFullscreen } from "react-icons/bs";

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
          <button className="px-3 py-1 transition-all duration-500 bg-white bg-opacity-50 rounded-lg opacity-100 cursor-pointer hover:opacity-40 sign-up">
            <span className="text-white">Sign up</span>
          </button>
          <ul className="feature-header">
            <li className="share-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </li>
            <li className="zoom-icon"></li>
            <li className="menu-icon"></li>
          </ul>
        </div>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
