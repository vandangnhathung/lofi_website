import React from "react";
import styled from "styled-components";

const ControlDashBoardStyles = styled.section`
  position: relative;
  left: calc(100% - ${(props) => props.controlBoardWidth}px - 345px);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 345px;
  background-color: rgba(0, 0, 0, 0.6);
  height: 280px;
  &:before {
    content: "";
    position: absolute;
    height: 80px;
    width: 80px;
    background-color: #fff;
    top:0
    left:100%
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
