import React from "react";
import styled from "styled-components";

const ControlDashBoardStyles = styled.section`
  position: relative;
  left: calc(99% - ${(props) => props.controlBoardWidth}px - 345px);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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
