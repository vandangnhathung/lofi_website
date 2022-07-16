import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TitleControl from "../../components/control/TitleControl";
import changeSceneSlice from "../../redux/reducers/changeSceneSlice";
import SceneBackground from "../SceneBackground";
import SwitchScene from "./SwitchScene";

const ControlScreenStyles = styled.section`
  width: 350px;
  background-color: #070707;
  position: absolute;
  left: calc(99% - 70px - 348px);
  top: -50%;
  transform: translateY(25%);
  border-radius: 16px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  max-height: 600px;
  height: 100%;
  gap: 16px;
`;
const ControlScreen = () => {
  const openScreenControl = useSelector(
    (state) => state.controlBoard.openScreenControl
  );
  const thumbNails = [
    {
      id: 1,
      url: "/assets/images/thumbnails/bookcafe.png",
    },
    {
      id: 2,
      url: "/assets/images/thumbnails/honolulu.png",
    },
  ];
  const changeScene = useSelector((state) => state.scene.changeScene);
  console.log(
    "🚀 ~ file: ControlScreen.js ~ line 37 ~ ControlScreen ~ changeScene",
    changeScene
  );
  const honoluluScene = useSelector((state) => state.scene.honoluluScene);
  const dispatch = useDispatch();
  const handleChangeHonoluluScene = () => {
    dispatch(changeSceneSlice.actions.handleChangeScene(true));
    dispatch(changeSceneSlice.actions.handleChangeHonolulu(true));
    console.log("ok");
  };
  return (
    <ControlScreenStyles className="text-white">
      {changeScene ? (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
</svg>
        <TitleControl text="Switch scene"></TitleControl>
      ) : (
        <TitleControl text="Change Set"></TitleControl>
      )}
      {!changeScene && (
        <>
          {" "}
          <ul className="flex flex-col gap-2 ">
            {thumbNails.map((item) => {
              if (item.id === 1) {
                return (
                  <SceneBackground
                    key={item.id}
                    // handleChangeHonoluluScene={handleChangeHonoluluScene}
                  >
                    <img src={item.url} alt="" />
                  </SceneBackground>
                );
              }
              if (item.id === 2) {
                return (
                  <SceneBackground
                    key={item.id}
                    onClick={handleChangeHonoluluScene}
                  >
                    <img src={item.url} alt="" />
                  </SceneBackground>
                );
              }
            })}
          </ul>
        </>
      )}
      {honoluluScene && <SwitchScene></SwitchScene>}
    </ControlScreenStyles>
  );
};

export default ControlScreen;
