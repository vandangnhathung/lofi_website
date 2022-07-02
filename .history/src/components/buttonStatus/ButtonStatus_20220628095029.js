import React from "react";
import styled from "styled-components";

const ButtonStatusStyles = styled.input`
  position: absolute;
  left: 100px;
  top: 48%;
`;
const ButtonStatus = () => {
  return <ButtonStatusStyles type="checkbox hidden-input"></ButtonStatusStyles>;
};

export default ButtonStatus;
