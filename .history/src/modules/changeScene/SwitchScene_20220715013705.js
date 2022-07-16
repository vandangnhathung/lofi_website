import React from "react";

const SwitchScene = ({ switchScene }) => {
  return (
    <div>
      {switchScene.map((item) => (
        <li>{item.url}</li>
      ))}
    </div>
  );
};

export default SwitchScene;
