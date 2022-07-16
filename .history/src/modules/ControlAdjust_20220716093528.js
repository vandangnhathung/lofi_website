import React, { useEffect, useRef, useState } from "react";
const ControlAdjust = (props) => {
  const { children, title, onClick = () => {} } = props;
  const elementRef = useRef();
  const [x, setX] = useState();
  console.log("🚀 ~ file: ControlAdjust.js ~ line 5 ~ ControlAdjust ~ x", x);
  const [y, setY] = useState();
  console.log("🚀 ~ file: ControlAdjust.js ~ line 8 ~ ControlAdjust ~ y", y);
  useEffect(() => {
    elementRef.current.addEventListener("mousemove", handleOnMouseMove);
    elementRef.current.addEventListener("mouseleave", handleOnMouseLeave);
  }, []);
  const [hidden, setHidden] = useState(true);
  const handleOnMouseMove = (e) => {
    setHidden(false);
    const rect = elementRef.current.getBoundingClientRect();
    setX(e.pageX - rect.x - rect.width - 25);
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
