import React, { useState } from "react";

const Toggle = () => {
  const [toggleButton, setToggleButton] = useState(false);
  return (
    <div className="h-[31px] w-[62px] p-1 rounded-full bg-primary">
      <div
        className="w-[23px] h-[23px] rounded-full bg-white cursor-pointer"
        onClick={() => setToggleButton(!toggleButton)}
      ></div>
    </div>
  );
};

export default Toggle;
