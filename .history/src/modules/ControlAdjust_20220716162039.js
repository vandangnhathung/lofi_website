import React, { useEffect, useRef, useState } from "react";
const ControlAdjust = (props) => {
  const { children, title, onClick = () => {} } = props;
  const elementRef = useRef();
  const [x, setX] = useState();
  const [y, setY] = useState();
  useEffect(() => {
    elementRef.current.addEventListener("mousemove", handleOnMouseMove);
    elementRef.current.addEventListener("mouseleave", handleOnMouseLeave);
  }, []);
  const [hidden, setHidden] = useState(true);
  const handleOnMouseMove = (e) => {
    setHidden(false);
    const rect = elementRef.current.getBoundingClientRect();
    setX(e.pageX - rect.x - rect.width - 30);
    setY(e.pageY - rect.y);
  };
  const handleOnMouseLeave = (e) => {
    setHidden(true);
  };
  return (
    <div
      onClick={onClick}
      className={`h-[70px] w-[70px] z-[999] relative  flex items-center justify-center  cursor-pointer  `}
      ref={elementRef}
    >
      <span
        className={`absolute ${
          hidden ? "opacity-0" : ""
        } z-10 transition-opacity duration-100 p-2 bg-[#363636] rounded-md text-white`}
        style={{ left: `${x}px`, top: `${y}px` }}
      >
        {title}
      </span>
      {children}
    </div>
  );
};

export default ControlAdjust;
