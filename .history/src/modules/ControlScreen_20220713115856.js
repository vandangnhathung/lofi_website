import React from "react";

const ControlScreen = () => {
  const openScreenControl = useSelector(
    (state) => state.controlBoard.openScreenControl
  );
  return <div className="text-white">{<aside>this is screen</aside>}</div>;
};

export default ControlScreen;
