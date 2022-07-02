import React from "react";
import styled from "styled-components";

const RadioStyles = styled.input``;
const Radio = () => {
  return (
    <label>
      <input type="radio" className="hidden-input" />
      <div className="w-8 h-8 border-white rounded-full border-3"></div>
    </label>
  );
};

export default Radio;
