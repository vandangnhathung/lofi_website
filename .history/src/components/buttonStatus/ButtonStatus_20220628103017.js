import React from "react";
import styled from "styled-components";

const ButtonStatusStyles = styled.div`
  position: absolute;
  top: ${(props) => props.left};
  left: 30%;
  z-index: 20;
`;
const ButtonStatus = ({ ...props }) => {
  const { children, left, top, right, bottom } = props;
  return <ButtonStatusStyles left={left}>{children}</ButtonStatusStyles>;
};

export default ButtonStatus;
