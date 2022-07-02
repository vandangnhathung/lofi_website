import React from "react";
import styled from "styled-components";

const Radio = ({ text }) => {
  return (
    <label className="absolute cursor-pointer w-[200px] h-[72px] group flex justify-center">
      <input type="radio" className="hidden-input" checked />
      <div className="absolute border-[3px] border-white flex-col justify-center items-center rounded-full w-8 h-8 group-hover:border-primary">
        <span className="absolute block w-5 h-5 transition-all duration-200 -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:bg-primary left-1/2 top-1/2"></span>
        <p className="absolute top-[130%]  capitalize group-hover:animate-scale hidden group-hover:block p-3 text-white bg-blackBackground whitespace-nowrap rounded-lg px-6">
          {text}{" "}
        </p>
      </div>
    </label>
  );
};

export default Radio;
