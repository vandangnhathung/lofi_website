import React from "react";
import AdjustIcon from "../icons/AdjustIcon";
const ControlAdjust = ({ props }) => {
  const { children } = props;
  return (
    <div className="h-[70px] w-[70px] border-b-2 px-[5px] py-[10px] border-[#feffdf] opacity-10">
      {props.children}
    </div>
  );
};

export default ControlAdjust;
