import React from "react";
import styled from "styled-components";

const ControlDashBoardStyles = styled.section`
  position: absolute;
  left: calc(100% - ${(props) => props.controlBoardWidth}px - 345px);
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
