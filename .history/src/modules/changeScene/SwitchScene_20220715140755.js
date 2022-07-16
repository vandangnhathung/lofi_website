import React from "react";
import { useDispatch } from "react-redux";
import changeSceneSlice from "../../redux/reducers/changeSceneSlice";
const SwitchScene = ({ switchScene, onClick }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeSceneSlice.actions.handleChangeCafeScene(false));
    dispatch(changeSceneSlice.actions.handleChangeHonoluluDay(true));
  };
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
