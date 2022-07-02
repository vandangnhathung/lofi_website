import React from "react";
import styled from "styled-components";

const Radio = () => {
  return (
    <label className="absolute cursor-pointer">
      <input type="radio" className="hidden-input" checked />
      <div className="border-[3px] border-white rounded-full w-8 h-8">
        <span className="absolute block w-6 h-6 rounded-full bg-primary center"></span>
      </div>
    </label>
  );
};

export default Radio;
