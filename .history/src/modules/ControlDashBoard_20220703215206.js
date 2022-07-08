import React from "react";
import styled from "styled-components";

const ControlDashBoardStyles = styled.section`
  position: relative;
  left: calc(99% - ${(props) => props.controlBoardWidth}px - 345px);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 345px;
  background-color: rgba(0, 0, 0, 0.6);
  height: 466.5px;
`;
const ControlDashBoard = ({ controlBoardWidth }) => {
  return (
    <ControlDashBoardStyles controlBoardWidth={controlBoardWidth}>
      sasdaddsdfsdsssss
    </ControlDashBoardStyles>
  );
};

export default ControlDashBoard;
