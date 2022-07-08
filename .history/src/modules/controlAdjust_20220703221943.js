import React from "react";
const ControlAdjust = (props) => {
  const { children,openControlAdjust, onClick = () => {} } = props;
  return (
    <div
      onClick={onClick}
      className={`h-[70px] w-[70px] border-b-2  cursor-pointer px-[5px] py-[10px] border-[#feffdf] ${openControlAdjust ? : "" : "opacity-10`}
    >
      {children}
    </div>
  );
};

export default ControlAdjust;
