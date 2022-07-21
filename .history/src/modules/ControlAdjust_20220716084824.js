import React, { useRef, useState } from "react";
const ControlAdjust = (props) => {
  const { children, title, onClick = () => {} } = props;
  const [x, setX] = useState();
  const [y, setY] = useState();
  const elementRef = useRef();
  const handleOnMouseMove = (e) => {
    setX(e.pageX);
    setY(e.pageY);
  };
  return (
    <div
      onClick={onClick}
      className={`h-[70px] w-[70px] z-[999] relative  flex items-center justify-center  cursor-pointer  `}
      onMouseMove={handleOnMouseMove}
      ref={elementRef}
    >
      <span className={`absolute text-white left-[${x}px] top-[${y}px]`}>
        {title}
      </span>
      {children}
    </div>
  );
};

export default ControlAdjust;
