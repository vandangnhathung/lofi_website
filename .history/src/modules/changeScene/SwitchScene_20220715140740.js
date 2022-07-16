import React from "react";
const SwitchScene = ({ switchScene, onClick }) => {
    const handleClick = () => {
         dispatch(changeSceneSlice.actions.handleChangeCafeScene(false));
        a dispatch(changeSceneSlice.actions.handleChangeHonoluluDay(true));
    }
  return (
    <ul className="flex flex-col gap-2 ">
      {switchScene.map((item) => (
        <li className="cursor-pointer" key={item.id} onClick={handleClick}>
          <img src={item.url} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default SwitchScene;
