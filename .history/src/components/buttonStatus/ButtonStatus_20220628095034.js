import React from "react";
import styled from "styled-components";

const ButtonStatusStyles = styled.input`
  position: absolute;
  left: 100px;
  top: 48%;
`;
const ButtonStatus = () => {
  return (
    <ButtonStatusStyles type="checkbox hidden-input">Hellow</ButtonStatusStyles>
  );
};

export default ButtonStatus;