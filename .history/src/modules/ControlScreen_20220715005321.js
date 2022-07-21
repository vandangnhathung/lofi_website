import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TitleControl from "../components/control/TitleControl";

const ControlScreenStyles = styled.section`
  width: 350px;
  background-color: #070707;
  position: absolute;
  top: -50%;
  transform: translateY(50%);
  left: calc(99% - 70px - 350px);
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
      url: "/assets/images/thumbnails/honolulu.png",
    },
    {
      id: 1,
      url: "/assets/images/thumbnails/bookcafe.png",
    },
  ];
  return (
    <ControlScreenStyles className="text-white">
      <TitleControl text="Change Set"></TitleControl>
      <ul>
        {thumbNails.map((item) => (
          <li>
            <img src={item.url} alt="" />
          </li>
        ))}
      </ul>
    </ControlScreenStyles>
  );
};

export default ControlScreen;
