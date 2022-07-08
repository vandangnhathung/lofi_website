import React from "react";
import styled from "styled-components";

const ControlDashBoardStyles = styled.section`
  position: relative;
  left: calc(100% - ${(props) => props.controlBoardWidth}px - 345px);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 345px;
`;
const ControlDashBoard = ({ controlBoardWidth }) => {
  return (
    <ControlDashBoardStyles controlBoardWidth={controlBoardWidth}>
      sasdaddsdfsdsssss
    </ControlDashBoardStyles>
  );
};

export default ControlDashBoard;
