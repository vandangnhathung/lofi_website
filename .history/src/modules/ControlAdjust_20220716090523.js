import React, { useEffect, useRef, useState } from "react";
const ControlAdjust = (props) => {
  const { children, title, onClick = () => {} } = props;
  const elementRef = useRef();
  const [x, setX] = useState();
  // console.log("🚀 ~ file: ControlAdjust.js ~ line 5 ~ ControlAdjust ~ x", x);
  const [y, setY] = useState();
  useEffect(() => {
    elementRef.current.addEventListener("mousemove", handleOnMouseMove);
  }, []);
  const handleOnMouseMove = (e) => {
    const rect = elementRef.current.getBoundingClientRect();
    setX(e.pageX - rect.x);
    setY(e.pageY - rect.y);
  };
  return (
    <div
      onClick={onClick}
      className={`h-[70px] w-[70px] z-[999] relative  flex items-center justify-center  cursor-pointer  `}
      ref={elementRef}
    >
      <span className={`absolute text-white left-[10px] top-[${y}px]`}>
        {title}
      </span>
      {children}
    </div>
  );
};

export default ControlAdjust;
