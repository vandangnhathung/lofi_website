import React from "react";
import styled, { keyframes } from "styled-components";
const scale = keyframes`
  0% {width:0%}
        40% {width:0%}
        60% {width:100%}
`;

const ControlDashBoardStyles = styled.section`
  animation: ${scale} 0.2s linear forwards;
  left: calc(99% - ${(props) => props.controlBoardWidth}px - 345px);
  position: absolute;
  top: 50%;
  transform: translateY(50%);
  width: 345px;
  background-color: ${(props) =>
    props.openControlAdjust ? "#000" : "rgba(0, 0, 0, 0.6)"};
  border-radius: 24px;
  height: 466.5px;
`;

const ControlDashBoard = ({ openControlAdjust, controlBoardWidth }) => {
  return (
    <ControlDashBoardStyles
      openControlAdjust={openControlAdjust}
      controlBoardWidth={controlBoardWidth}
    >
      sasdaddsdfsdsssss
    </ControlDashBoardStyles>
  );
};

export default ControlDashBoard;
