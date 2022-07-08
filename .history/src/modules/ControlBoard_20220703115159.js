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
const ControlBoard = ({ className }) => {
  console.log(
    "🚀 ~ file: ControlBoard.js ~ line 16 ~ ControlBoard ~ className",
    className
  );
  return (
    <ControlBoardStyles>
      <div className={className}>
        <ControlAdjust></ControlAdjust>
      </div>
    </ControlBoardStyles>
  );
};

export default ControlBoard;
