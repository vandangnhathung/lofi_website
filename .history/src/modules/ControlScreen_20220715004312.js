import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ControlScreenStyles = styled.section`
  width: 350px;
  background-color: #070707;
  left: calc(99% - ${(props) => props.controlBoardWidth}px - 350px);
`;
const ControlScreen = () => {
  const openScreenControl = useSelector(
    (state) => state.controlBoard.openScreenControl
  );
  return (
    <ControlScreenStyles className="text-white">
      <aside>this is screen</aside>
    </ControlScreenStyles>
  );
};

export default ControlScreen;
