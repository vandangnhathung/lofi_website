import React from "react";
import styled from "styled-components";
const ControlFieldStyles = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  left: calc(99% - ${(props) => props.controlBoardWidth}px);
`;
const ControlField = ({ children }) => {
  return <ControlFieldStyles>{children}</ControlFieldStyles>;
};

export default ControlField;
