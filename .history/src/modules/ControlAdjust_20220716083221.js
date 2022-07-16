import React from "react";
const ControlAdjust = (props) => {
  const { children, title, onClick = () => {} } = props;
  return (
    <div
      onClick={onClick}
      className={`h-[70px] w-[70px] z-[999] relative  flex items-center justify-center  cursor-pointer  `}
    >
      <span className="text-white">{title}</span>
      {children}
    </div>
  );
};

export default ControlAdjust;
