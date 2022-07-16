import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TitleControl from "../components/control/TitleControl";

const ControlScreenStyles = styled.section`
  width: 350px;
  background-color: #070707;
  position: absolute;
  top: -50%;
  transform: translateY(50%);
  left: calc(99% - 280px -350px);
`;
const ControlScreen = () => {
  const openScreenControl = useSelector(
    (state) => state.controlBoard.openScreenControl
  );
  return (
    <ControlScreenStyles className="text-white">
      <TitleControl text="Change Set"></TitleControl>
    </ControlScreenStyles>
  );
};

export default ControlScreen;
