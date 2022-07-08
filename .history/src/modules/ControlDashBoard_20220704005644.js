import { useSelect } from "@mui/base";
import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import AudioPlayer from "../components/audioControl/AudioPlayer";
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
      icon: "/assets/icons/sleepy.svg",
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
  const volumePlayListNum = useSelector((state) => state.volume.volumePlayList);
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
              className="p-2 px-6 bg-[#141414] text-white text-center rounded-lg cursor-pointer group"
            >
              {item.title === "Chill" && (
                <img
                  className={`
               group-hover:animate-shake 
                   mb-2 w-10 h-10`}
                  src={item.icon}
                  alt=""
                />
              )}
              {item.title === "Jazz" && (
                <img
                  className={`
               group-hover:animate-bounce 
                   mb-2 w-10 h-10`}
                  src={item.icon}
                  alt=""
                />
              )}
              {item.title === "Sleepy" && (
                <img
                  className={`
                                 group-hover:animate-circulate rounded-full z-20
                     mb-2 w-10 h-10`}
                  src={item.icon}
                  alt=""
                />
              )}
              <p className="text-base z-20">{item.title}</p>
            </li>
          ))}
        </ul>
        <ReactAudioPlayer
          preload="auto"
          autoPlay
          src="/assets/sounds/keyboard.mp3"
          loop
          volume={volumePlayList / 100}
        />
      </div>
    </ControlDashBoardStyles>
  );
};

export default ControlDashBoard;
