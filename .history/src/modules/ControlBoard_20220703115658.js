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
  left: 100% - ${(props) => props.controlBoardWidth};
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
