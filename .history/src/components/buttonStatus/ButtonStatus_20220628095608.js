import React from "react";
import styled from "styled-components";

const ButtonStatusStyles = styled.div`
  position: absolute;
  top: 40%;
  left: 30%;
`;
const ButtonStatus = ({ ...props }) => {
  const { children } = props;
  return <ButtonStatusStyles>{children}</ButtonStatusStyles>;
};

export default ButtonStatus;
