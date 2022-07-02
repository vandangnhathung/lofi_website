import { useSelect } from "@mui/base";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Radio = ({
  text,
  dayRain = false,
  enterStore = false,
  onClick = () => {},
}) => {
  return (
    <label className="absolute cursor-pointer w-[200px] h-[72px] group flex justify-center">
      <input
        type="radio"
        className="hidden-input"
        checked={dayRain || enterStore}
        onClick={onClick}
      />
      <div className="absolute border-[3px] border-white rounded-full w-8 h-8 group-hover:border-primary">
        <span className="absolute block w-5 h-5 transition-all duration-200 -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:bg-primary left-1/2 top-1/2"></span>
      </div>
      <p className="absolute top-[50%] hidden p-3 px-6 text-white capitalize rounded-lg group-hover:animate-scale group-hover:block bg-blackBackground whitespace-nowrap hover:text-opacity-30 transition-all duration-200">
        {text}{" "}
      </p>
    </label>
  );
};

export default Radio;
