import React from "react";
import styled from "styled-components";

const RadioStyles = styled.input``;
const Radio = () => {
  return (
    <RadioStyles type="radio" className="hidden-input">
      <div className="w-8 h-8 border-white rounded-full border-3"></div>
    </RadioStyles>
  );
};

export default Radio;
