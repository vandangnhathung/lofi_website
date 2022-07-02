import React, { useState } from "react";

const Toggle = () => {
  const [toggleButton, setToggleButton] = useState(false);
  return (
    <div
      className="h-[31px] w-[62px] p-1 rounded-full bg-primary cursor-pointer"
      onClick={() => setToggleButton(!toggleButton)}
    >
      <div
        className={` h-[23px] rounded-full transition-all duration-400 ${
          toggleButton ? "translate-x-[31px] w-[24px]" : "w-[23px]"
        } bg-white`}
      ></div>
    </div>
  );
};

export default Toggle;
