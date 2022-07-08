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
  right: auto;
`;
const ControlBoard = () => {
  return (
    <ControlBoardStyles>
      <div className={className}></div>
      <ControlAdjust></ControlAdjust>
    </ControlBoardStyles>
  );
};

export default ControlBoard;
