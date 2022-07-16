import React from "react";

const SwitchScene = ({ switchScene }) => {
  return (
    <ul className="flex flex-col gap-2 ">
      {switchScene.map((item) => (
        <li>
          <img src={item.url} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default SwitchScene;
