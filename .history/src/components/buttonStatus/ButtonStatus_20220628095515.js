import React from "react";
import styled from "styled-components";

const ButtonStatusStyles = styled.div``;
const ButtonStatus = ({ ...props }) => {
  const { children } = props;
  return <ButtonStatusStyles>{children}</ButtonStatusStyles>;
};

export default ButtonStatus;
