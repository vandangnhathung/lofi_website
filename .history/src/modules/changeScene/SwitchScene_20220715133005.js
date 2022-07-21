import React from "react";

const SwitchScene = ({ switchScene, onClick }) => {
    return (
        console.log(
            "🚀 ~ file: ControlScreen.js ~ line 54 ~ ControlScreen ~ cafeScene",
            cafeScene
          );
    <ul className="flex flex-col gap-2 ">
      {switchScene.map((item) => (
        <li className="cursor-pointer" key={item.id} onClick={item.onClick}>
          <img src={item.url} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default SwitchScene;
