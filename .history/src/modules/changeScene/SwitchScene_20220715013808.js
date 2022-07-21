import React from "react";

const SwitchScene = ({ switchScene }) => {
  return (
      <div className="flex flex-col gap-2 ">
          <ul>
              
      {switchScene.map((item) => (
        <li>
          <img src={item.url} alt="" />
        </li>
      ))}
    </div>
          </ul>
  );
};

export default SwitchScene;
