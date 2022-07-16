import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TitleControl from "../components/control/TitleControl";

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
  return (
    <ControlScreenStyles className="text-white">
      <TitleControl text="Change Set"></TitleControl>
      <ul className="flex flex-col gap-2">
        {thumbNails.map((item) => (
          <li key={item.id}>
            <img src={item.url} alt="" />
          </li>
        ))}
      </ul>
    </ControlScreenStyles>
  );
};

export default ControlScreen;
