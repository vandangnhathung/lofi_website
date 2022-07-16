import React, { useRef } from "react";
const ControlAdjust = (props) => {
  const { children, title, onClick = () => {} } = props;
  const elementRef = useRef();
  const handleOnMouseMove = (e) => {
    console.log(elementRef.current);
  };
  return (
    <div
      onClick={onClick}
      className={`h-[70px] w-[70px] z-[999] relative  flex items-center justify-center  cursor-pointer  `}
      onMouseMove={handleOnMouseMove}
      ref={elementRef}
    >
      <span className="absolute text-white">{title}</span>
      {children}
    </div>
  );
};

export default ControlAdjust;
