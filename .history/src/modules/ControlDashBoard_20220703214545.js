import React from "react";
import styled from "styled-components";

const ControlDashBoardStyles = styled.section`
  position: relative;
  left: calc(99% - ${(props) => props.controlBoardWidth}px - 345px);
  position: absolute;
  top: 30%;
  transform: translateY(-50%);
  width: 345px;
  background-color: rgba(0, 0, 0, 0.6);
  height: 466.5px;
  &:before {
    content: "";
    position: absolute;
    height: 80px;
    width: 80px;
    background-color: #fff;
    top: 0;
    left: 100%;
    border-top-right-radius: 35px;
  }
`;
const ControlDashBoard = ({ controlBoardWidth }) => {
  return (
    <ControlDashBoardStyles controlBoardWidth={controlBoardWidth}>
      sasdaddsdfsdsssss
    </ControlDashBoardStyles>
  );
};

export default ControlDashBoard;
