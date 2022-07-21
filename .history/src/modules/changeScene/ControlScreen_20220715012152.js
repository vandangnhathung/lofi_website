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
  const changeScene = useSelector((state) => state.changeScene);
  const honoluluScene = useSelector((state) => state.honoluluScene);
  const dispatch = useDispatch();
  const handleChangeHonoluluScene = () => {
    dispatch(changeSceneSlice.actions.handleChangeScene(false));
    dispatch(changeSceneSlice.actions.handleChangeHonolulu(!honoluluScene));
    console.log("ok");
  };
  return (
    <ControlScreenStyles className="text-white">
      {!changeScene && (
        <>
          {" "}
          <TitleControl text="Change Set"></TitleControl>
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
