import React from "react";
import styled from "styled-components";
const ControlFieldStyles = styled.div`
  top: 50%;
  transform: translateY(-50%);
  left: calc(99% - ${(props) => props.controlBoardWidth}px);
`;
const ControlField = () => {
  return <ControlFieldStyles></ControlFieldStyles>;
};

export default ControlField;
