import React from "react";
const ControlAdjust = (props) => {
  const { children, openControlAdjust, onClick = () => {} } = props;
  return (
    <div
      onClick={onClick}
      className={`h-[70px] w-[70px] relative  cursor-pointer  `}
    >
      {children}
    </div>
  );
};

export default ControlAdjust;
