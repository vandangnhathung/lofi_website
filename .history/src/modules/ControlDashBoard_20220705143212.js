import { useSelect } from "@mui/base";
import { Slider, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import AudioPlayer from "../components/audioControl/AudioPlayer";
import TitleControl from "../components/control/TitleControl";
import toggleSlice from "../components/toggle/toggleSlice";
import volumeSlice from "../redux/reducers/volumeSlice";
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
  left: calc(99% - ${(props) => props.controlBoardWidth}px - 428px);
  position: absolute;
  top: -50%;
  transform: translateY(50%);
  transform: rotate(-180deg);
  width: 428px;
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
      title: "Kpop",
      icon: "/assets/icons/krop.svg",
    },
    {
      title: "Jazzy",
      icon: "/assets/icons/jazz.svg",
    },
    {
      title: "Chill",
      icon: "/assets/icons/chill.svg",
    },
  ];
  const volumePlayListNum = useSelector((state) => state.volume.volumePlayList);
  const chill = useSelector((state) => state.toggle.chillToggle);
  const sleepy = useSelector((state) => state.toggle.sleepyToggle);
  const kpop = useSelector((state) => state.toggle.kpopToggle);
  const jazz = useSelector((state) => state.toggle.jazzToggle);
  console.log(
    "🚀 ~ file: ControlDashBoard.js ~ line 53 ~ ControlDashBoard ~ volumePlayListNum",
    volumePlayListNum
  );
  const dispatch = useDispatch();
  const handleChangeVolumePlayList = (e) => {
    dispatch(volumeSlice.actions.volumePlayListAdjust(e.target.value));
  };
  const handleChill = () => {
    dispatch(toggleSlice.actions.sleepyToggleHome(false));
    dispatch(toggleSlice.actions.kpopToggleHome(false));
    dispatch(toggleSlice.actions.chillToggleHome(true));
    dispatch(toggleSlice.actions.jazzToggleHome(false));
  };
  const handleSleepy = () => {
    dispatch(toggleSlice.actions.chillToggleHome(false));
    dispatch(toggleSlice.actions.kpopToggleHome(false));
    dispatch(toggleSlice.actions.sleepyToggleHome(true));
    dispatch(toggleSlice.actions.jazzToggleHome(false));
  };
  const handleKpop = () => {
    dispatch(toggleSlice.actions.chillToggleHome(false));
    dispatch(toggleSlice.actions.kpopToggleHome(true));
    dispatch(toggleSlice.actions.sleepyToggleHome(false));
    dispatch(toggleSlice.actions.jazzToggleHome(false));
  };
  const handleJazz = () => {
    dispatch(toggleSlice.actions.chillToggleHome(false));
    dispatch(toggleSlice.actions.kpopToggleHome(false));
    dispatch(toggleSlice.actions.sleepyToggleHome(false));
    dispatch(toggleSlice.actions.jazzToggleHome(true));
  };
  return (
    <ControlDashBoardStyles
      openControlAdjust={openControlAdjust}
      controlBoardWidth={controlBoardWidth}
    >
      <div class="flex flex-col gap-y-8">
        <TitleControl text="Mood"></TitleControl>
        <ul className="flex justify-between gap-2">
          {typeSong.map((item) => (
            <li
              key={item.title}
              className="p-2 px-6 bg-[#141414] text-white text-center rounded-lg cursor-pointer group"
            >
              {item.title === "Chill" && (
                <img
                  className={`
               group-hover:animate-shake 
                   mb-2 w-10 h-10 ${chill ? "opacity-1" : "opacity-25"}`}
                  src={item.icon}
                  alt=""
                  onClick={handleChill}
                />
              )}
              {item.title === "Jazzy" && (
                <img
                  className={`
               group-hover:animate-shake 
                   mb-2 w-10 h-10 ${jazz ? "opacity-1" : "opacity-25"}`}
                  src={item.icon}
                  alt=""
                  onClick={handleJazz}
                />
              )}
              {item.title === "Sleepy" && (
                <img
                  className={`
                                 group-hover:animate-circulate rounded-full z-20
                     mb-2 w-10 h-10 ${sleepy ? "opacity-1" : "opacity-25"}`}
                  src={item.icon}
                  alt=""
                  onClick={handleSleepy}
                />
              )}
              {item.title === "Kpop" && (
                <img
                  className={`
                                 group-hover:animate-circulate rounded-full z-20 bg-white
                     mb-2 w-10 h-10 ${kpop ? "opacity-1" : "opacity-25"}`}
                  src={item.icon}
                  alt=""
                  onClick={handleKpop}
                />
              )}
              <p className="text-base z-20">{item.title}</p>
            </li>
          ))}
        </ul>
        <Box sx={{ width: 300 }} className="box">
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Slider
              aria-label="Volume"
              value={volumePlayListNum}
              onChange={handleChangeVolumePlayList}
              min={0}
              max={100}
              valueLabelDisplay="auto"
              className="slider"
            />
          </Stack>
        </Box>
        <section className="">
          <h4 className="text-base text-white">Background Noise</h4>
        </section>
      </div>
    </ControlDashBoardStyles>
  );
};

export default ControlDashBoard;