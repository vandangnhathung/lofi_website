import React from "react";
const ControlAdjust = (props) => {
  const { children, openControlAdjust, onClick = () => {} } = props;
  return (
    <div
      onClick={onClick}
      className={`h-[70px] w-[70px] border-b-2 relative  cursor-pointer  border-[#feffdf] ${
        openControlAdjust ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default ControlAdjust;
