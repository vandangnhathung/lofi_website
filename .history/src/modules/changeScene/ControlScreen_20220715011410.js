import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TitleControl from "../../components/control/TitleControl";
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
  const handleChangeSetScene = () => {
    console.log("work");
  };
  return (
    <ControlScreenStyles className="text-white">
      <TitleControl text="Change Set"></TitleControl>
      <ul className="flex flex-col gap-2 ">
        {thumbNails.map((item) => {
          if (item.id === 1) {
            return (
              <SceneBackground
                key={item.id}
                handleChangeSetScene={handleChangeSetScene}
              >
                <img src={item.url} alt="" />
              </SceneBackground>
            );
          }
          if (item.id === 2) {
            return (
              <SceneBackground
                key={item.id}
                handleChangeSetScene={handleChangeSetScene}
              >
                <img src={item.url} alt="" />
              </SceneBackground>
            );
          }
        })}
      </ul>
      <SwitchScene></SwitchScene>
    </ControlScreenStyles>
  );
};

export default ControlScreen;
