import React from "react";

const SwitchScene = ({ switchScene }) => {
  return (
    <div className="flex flex-col gap-2 ">
      {switchScene.map((item) => (
        <li>{item.url}</li>
      ))}
    </div>
  );
};

export default SwitchScene;
