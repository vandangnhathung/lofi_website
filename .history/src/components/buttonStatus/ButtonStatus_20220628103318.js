import React from "react";
import styled from "styled-components";

const ButtonStatusStyles = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  z-index: 20;
`;
const ButtonStatus = ({ ...props }) => {
  const { children, left, top, right, bottom } = props;
  return (
    <ButtonStatusStyles top={top} left={left} right={right} bottom={bottom}>
      {children}
    </ButtonStatusStyles>
  );
};

export default ButtonStatus;
