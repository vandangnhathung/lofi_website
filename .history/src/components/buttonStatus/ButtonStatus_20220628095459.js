import React from "react";
import styled from "styled-components";

const ButtonStatusStyles = styled.div``;
const ButtonStatus = ({ children, ...props }) => {
  return <ButtonStatusStyles>{children}</ButtonStatusStyles>;
};

export default ButtonStatus;
