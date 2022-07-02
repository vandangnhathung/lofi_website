import React from "react";
import styled from "styled-components";

const Radio = () => {
  return (
    <label className="absolute">
      <input type="radio" className="hidden-input" />
      <div className="border-[10px] border-white rounded-full w-9 h-9"></div>
    </label>
  );
};

export default Radio;
