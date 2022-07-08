import React from "react";
import styled from "styled-components";
import ControlAdjust from "./controlAdjust";

const ControlBoardStyles = styled.section`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background-color: red;
  display: inline-block;
  height: 280px;
`;
const ControlBoard = () => {
  return (
    <ControlBoardStyles>
      <ControlAdjust></ControlAdjust>
    </ControlBoardStyles>
  );
};

export default ControlBoard;
