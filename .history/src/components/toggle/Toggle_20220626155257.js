import React, { useState } from "react";

const Toggle = () => {
  const [toggleButton, setToggleButton] = useState(false);
  return (
    <div
      className="h-[31px] w-[62px] p-1 rounded-full bg-primary "
      onClick={() => setToggleButton(!toggleButton)}
    >
      <div
        className={`w-[23px] h-[23px] rounded-full transition-all duration-400 ${
          toggleButton ? "translate-x-[23px]" : ""
        } bg-white cursor-pointer"`}
      ></div>
    </div>
  );
};

export default Toggle;
