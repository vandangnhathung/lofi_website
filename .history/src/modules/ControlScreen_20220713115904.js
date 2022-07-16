import React from "react";
import { useSelector } from "react-redux";

const ControlScreen = () => {
  const openScreenControl = useSelector(
    (state) => state.controlBoard.openScreenControl
  );
  return <div className="text-white">{<aside>this is screen</aside>}</div>;
};

export default ControlScreen;
