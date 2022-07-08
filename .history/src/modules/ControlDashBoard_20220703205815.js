import React from "react";
import styled from "styled-components";

const ControlDashBoardStyles = styled.section`
  position: relative;
  left: calc(100% - 345px));
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
