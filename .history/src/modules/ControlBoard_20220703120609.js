import React from "react";
import styled from "styled-components";
import ControlAdjust from "./ControlAdjust";

const ControlBoardStyles = styled.section`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background-color: red;
  display: inline-block;
  height: 280px;
  left: calc(100% - ${(props) => props.controlBoardWidth}px / 2);
  border-radius: 35px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
`;
const ControlBoard = ({ controlBoardWidth, className }) => {
  return (
    <ControlBoardStyles
      controlBoardWidth={controlBoardWidth}
      className={`${className}`}
    >
      <ControlAdjust></ControlAdjust>
    </ControlBoardStyles>
  );
};

export default ControlBoard;
