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
  left: calc(99% - ${(props) => props.controlBoardWidth}px);
  border-radius: 35px;
  overflow: hidden;
`;
const ControlBoard = ({ controlBoardWidth, className }) => {
  return (
    <ControlBoardStyles
      controlBoardWidth={controlBoardWidth}
      className={`${className}`}
    >
      asdasdasdsadadaa
      <ControlAdjust></ControlAdjust>
    </ControlBoardStyles>
  );
};

export default ControlBoard;
