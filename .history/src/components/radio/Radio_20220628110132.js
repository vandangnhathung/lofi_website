import React from "react";
import styled from "styled-components";

const Radio = ({ text }) => {
  return (
    <label className="absolute cursor-pointer w-[200px] h-[72px] group flex justify-center">
      <input type="radio" className="hidden-input" checked />
      <div className="absolute border-[3px] border-white rounded-full w-8 h-8 group-hover:border-primary">
        <span className="absolute block w-5 h-5 transition-all duration-200 -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:bg-primary left-1/2 top-1/2"></span>
      </div>
      <p className="absolute hidden p-3 px-6 text-white capitalize rounded-lg group-hover:animate-scale group-hover:block bg-blackBackground whitespace-nowrap">
        {text}{" "}
      </p>
    </label>
  );
};

export default Radio;
