import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ButtonStatusStyles = styled.div`
  position: absolute;
  top: ${(props) => (props.enterStore ? props.top2 : props.top)};
  right: ${(props) => props.right};
  left: ${(props) => (props.enterStore ? props.left2 : props.left)};
  bottom: ${(props) => props.bottom};
  z-index: 20;
`;
const ButtonStatus = ({ ...props }) => {
  const enterStore = useSelector((state) => state.toggle.enterStoreToggle);
  const { children, left, left2, top, top2, right, isInside = false } = props;
  return (
    <ButtonStatusStyles
      enterStore={enterStore}
      isInside={enterStore}
      top2={top2}
      left2={left2}
      top={top}
      left={left}
      right={right}
    >
      {children}
    </ButtonStatusStyles>
  );
};

export default ButtonStatus;
