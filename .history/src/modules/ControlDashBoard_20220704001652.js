import React from "react";
import styled, { keyframes } from "styled-components";
import TitleControl from "../components/control/TitleControl";
const scale = keyframes`
  0% {
      opacity: 0.7;
      transform: translateX(30px);
   }
   100% {
      opacity: 1;
      transform: translateX(0);
   }
`;

const ControlDashBoardStyles = styled.section`
  left: calc(99% - ${(props) => props.controlBoardWidth}px - 345px);
  position: absolute;
  top: -50%;
  transform: translateY(50%);
  transform: rotate(-180deg);
  width: 345px;
  animation: ${scale} 0.2s linear forwards;
  background-color: ${(props) =>
    props.openControlAdjust ? "#000" : "rgba(0, 0, 0, 0.6)"};
  border-radius: 24px;
  height: 466.5px;
  padding: 32px;
`;

const ControlDashBoard = ({ openControlAdjust, controlBoardWidth }) => {
  const typeSong = [
    {
      title: "Sleepy",
      icon: "/assets/icons/chill.svg",
    },
    {
      title: "Jazz",
      icon: "/assets/icons/chill.svg",
    },
    {
      title: "Chill",
      icon: "/assets/icons/chill.svg",
    },
  ];
  return (
    <ControlDashBoardStyles
      openControlAdjust={openControlAdjust}
      controlBoardWidth={controlBoardWidth}
    >
      <div class="flex flex-col gap-y-4">
        <TitleControl text="Mood"></TitleControl>
        <ul className="flex justify-between  gap-2">
          {typeSong.map((item) => (
            <li
              key={item.title}
              className="p-4 bg-[#141414] text-white text-center rounded-lg cursor-pointer"
            >
              <img
                className="hover:animate-shake mb-2 w-10 h-10"
                src={item.icon}
                alt=""
              />
              <p className="text-base">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </ControlDashBoardStyles>
  );
};

export default ControlDashBoard;
