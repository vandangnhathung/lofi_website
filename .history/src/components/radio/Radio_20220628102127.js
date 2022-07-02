import React from "react";
import styled from "styled-components";

const Radio = () => {
  return (
    <label className="absolute">
      <input type="radio" className="hidden-input" />
      <div className="border-[3px] border-white rounded-full w-8 h-8"></div>
    </label>
  );
};

export default Radio;
