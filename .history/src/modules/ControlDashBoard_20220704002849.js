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
      icon: "/assets/icons/jazz.svg",
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
              className="p-2 px-6 bg-[#141414] text-white text-center rounded-lg cursor-pointer"
            >
              <div class="relative">
                <img
                  className={`${
                    item.title === "Chill" ? "hover:animate-shake" : ""
                  }
                    ${
                      item.title === "Jazz" ? "hover:animate-shake" : ""
                    }mb-2 w-10 h-10`}
                  src={item.icon}
                  alt=""
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="#f3a952" d="M0 0h24v24H0V0z" />
                  <path d="M12 5v8.55c-.94-.54-2.1-.75-3.33-.32-1.34.48-2.37 1.67-2.61 3.07-.46 2.74 1.86 5.08 4.59 4.65 1.96-.31 3.35-2.11 3.35-4.1V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2z" />
                </svg>
              </div>
              <p className="text-base">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </ControlDashBoardStyles>
  );
};

export default ControlDashBoard;
