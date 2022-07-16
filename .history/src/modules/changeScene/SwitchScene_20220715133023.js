import React from "react";

const cafeScene = useSelector((state) => state.scene.cafeScene);
const SwitchScene = ({ switchScene, onClick }) => {
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
