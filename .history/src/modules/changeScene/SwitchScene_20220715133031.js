import React from "react";
import { useSelector } from "react-redux";

const SwitchScene = ({ switchScene, onClick }) => {
  const cafeScene = useSelector((state) => state.scene.cafeScene);

  console.log(
    "🚀 ~ file: ControlScreen.js ~ line 54 ~ ControlScreen ~ cafeScene",
    cafeScene
  );
  return (
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
