import React from "react";
import styled from "styled-components";

const Radio = () => {
  return (
    <label className="absolute cursor-pointer w-[200px] h-[72px] group flex items-center">
      <input type="radio" className="hidden-input" checked />
      <div className="absolute border-[3px] border-white rounded-full w-8 h-8 group-hover:border-primary">
        <span className="absolute block w-5 h-5 transition-all duration-200 -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:bg-primary left-1/2 top-1/2"></span>
      </div>
    </label>
  );
};

export default Radio;
