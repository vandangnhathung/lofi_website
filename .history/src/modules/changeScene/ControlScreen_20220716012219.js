import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TitleControl from "../../components/control/TitleControl";
import toggleSlice from "../../components/toggle/toggleSlice";
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
  gap: 16px;
`;
const ControlScreen = () => {
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
  const honolulu = [
    {
      id: 1,
      url: "/assets/images/thumbnails/honolulu/honoluluSwitch.png",
      async onClick() {
        await dispatch(changeSceneSlice.actions.handleChangeCafeScene(false));
        await dispatch(changeSceneSlice.actions.handleChangeHonoluluDay(true));
      },
    },
    {
      id: 2,
      url: "/assets/images/thumbnails/honolulu/honoluluSwitchOut.png",
      async onClick() {
        dispatch(changeSceneSlice.actions.handleChangeHonoluluDay(true));
        dispatch(changeSceneSlice.actions.handleChangeCafeScene(false));
        dispatch(toggleSlice.actions.enterStoreToggleHome(true));
      },
    },
  ];
  const cafeStore = [
    {
      id: 1,
      url: "/assets/images/thumbnails/bookcafe.png",
      async onClick() {
        await dispatch(changeSceneSlice.actions.handleChangeCafeScene(true));

        await dispatch(changeSceneSlice.actions.handleChangeHonoluluDay(false));
      },
    },
    {
      id: 2,
      url: "/assets/images/thumbnails/book_cafe_in.png",
      async onClick() {
        dispatch(changeSceneSlice.actions.handleChangeHonoluluDay(false));
        dispatch(changeSceneSlice.actions.handleChangeCafeScene(true));
        dispatch(toggleSlice.actions.enterStoreToggleHome());
      },
    },
  ];
  const changeScene = useSelector((state) => state.scene.changeScene);
  const dispatch = useDispatch();
  const cafeScene = useSelector((state) => state.scene.cafeScene);
  const cafe = useSelector((state) => state.scene.cafe);
  console.log(
    "🚀 ~ file: ControlScreen.js ~ line 54 ~ ControlScreen ~ cafeScene",
    cafeScene
  );
  const honoluluScene = useSelector((state) => state.scene.honoluluScene);
  const handleChangeCafeScene = () => {
    dispatch(changeSceneSlice.actions.handleChangeScene(true));
    dispatch(changeSceneSlice.actions.handleChangeCafe(true));
  };
  const handleChangeHonoluluScene = () => {
    dispatch(changeSceneSlice.actions.handleChangeScene(true));
    dispatch(changeSceneSlice.actions.handleChangeHonolulu(true));
  };
  const handleGoBackSelectScene = () => {
    dispatch(changeSceneSlice.actions.handleChangeScene(false));
    dispatch(changeSceneSlice.actions.handleChangeHonolulu(false));
    dispatch(changeSceneSlice.actions.handleChangeCafe(false));
  };
  return (
    <ControlScreenStyles className="text-white">
      {changeScene ? (
        <div className="flex items-center gap-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 transition-all duration-200 cursor-pointer hover:opacity-60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleGoBackSelectScene}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <TitleControl text="Switch scene"></TitleControl>
        </div>
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
                    onClick={handleChangeCafeScene}
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
      {cafe && <SwitchScene switchScene={cafeStore}></SwitchScene>}

      {honoluluScene && <SwitchScene switchScene={honolulu}></SwitchScene>}
    </ControlScreenStyles>
  );
};

export default ControlScreen;
