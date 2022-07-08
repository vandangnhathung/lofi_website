import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AdjustIcon from "../icons/AdjustIcon";
import ChangeSetIcon from "../icons/ChangeSetIcon";
import ProductitiveIcon from "../icons/ProductitiveIcon";
import ScreenIcon from "../icons/ScreenIcon";
import controlBoardSlice from "../redux/reducers/controlBoardSlice";
import ControlAdjust from "./ControlAdjust";
import ControlDashBoard from "./ControlDashBoard";

const ControlBoardStyles = styled.section`
  top: 50%;
  transform: translateY(-50%);
  background-color: red;
  display: inline-block;
  height: 280px;
  position: relative;
  left: calc(99% - ${(props) => props.controlBoardWidth}px);
  border-radius: 35px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px;
  z-index: 999;
`;
const ControlBoard = ({
  controlBoardWidth,
  className,
  openControlAdjust,
  handleOpenControlAdjust,
}) => {
  return (
    <ControlBoardStyles
      controlBoardWidth={controlBoardWidth}
      className={`${className}`}
    >
      <ControlAdjust onClick={handleOpenControlAdjust}>
        {
          <svg
            width="75"
            height="121"
            viewBox="0 0 75 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_153_4603)">
              <path
                d="M5 13.5V2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5V118.5C0 119.881 1.11929 121 2.5 121C3.88071 121 5 119.881 5 118.5V117C5 105.954 13.9543 97 25 97H40C59.33 97 75 81.33 75 62V27H18.5C11.0442 27 5 20.9558 5 13.5Z"
                fill="#070707"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_153_4603"
                x="-50"
                y="-50"
                width="175"
                height="221"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="25" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_153_4603"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_153_4603"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        }
        <AdjustIcon></AdjustIcon>
      </ControlAdjust>
      <ControlAdjust>
        <ScreenIcon></ScreenIcon>
      </ControlAdjust>
      <ControlAdjust>
        <ChangeSetIcon></ChangeSetIcon>
      </ControlAdjust>
      <ControlAdjust>
        <ProductitiveIcon></ProductitiveIcon>
      </ControlAdjust>
    </ControlBoardStyles>
  );
};

export default ControlBoard;
