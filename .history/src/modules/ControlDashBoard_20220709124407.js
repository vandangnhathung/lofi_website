import { useSelect } from "@mui/base";
import { Slider, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { debounce } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import BackgroundNoise from "../components/backgroundNoise/BackgroundNoise";
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
  overflow: hidden;
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
  const volumeCityTrafficNum = useSelector(
    (state) => state.volume.volumeCityTraffic
  );
  const volumeCityRainNum = useSelector((state) => state.volume.volumeRain);
  const volumeCityBoardNum = useSelector(
    (state) => state.volume.volumeKeyboard
  );
  const volumeKeyboardNum = useSelector((state) => state.volume.volumeKeyboard);
  const volumeBird = useSelector((state) => state.volume.volumeBird);
  const volumeCampFire = useSelector((state) => state.volume.volumeCampFire);
  const volumeDeepSpace = useSelector((state) => state.volume.volumeDeepSpace);
  const volumeFirePlace = useSelector((state) => state.volume.volumeFirePlace);
  const volumeForestNight = useSelector(
    (state) => state.volume.volumeForestNight
  );
  const volumeOcean = useSelector((state) => state.volume.volumeOcean);
  const volumePeopleTalk = useSelector(
    (state) => state.volume.volumePeopleTalk
  );
  const volumeRainForest = useSelector(
    (state) => state.volume.volumeRainForest
  );
  const volumeRiver = useSelector((state) => state.volume.volumeRiver);
  const volumeSnow = useSelector((state) => state.volume.volumeSnow);
  const volumeUnderWater = useSelector(
    (state) => state.volume.volumeUnderWater
  );
  const volumeWaves = useSelector((state) => state.volume.volumeWaves);
  const volumeWind = useSelector((state) => state.volume.volumeWind);
  //------------------------------
  const chill = useSelector((state) => state.toggle.chillToggle);
  const sleepy = useSelector((state) => state.toggle.sleepyToggle);
  const kpop = useSelector((state) => state.toggle.kpopToggle);
  const jazz = useSelector((state) => state.toggle.jazzToggle);
  // console.log(
  //   "🚀 ~ file: ControlDashBoard.js ~ line 53 ~ ControlDashBoard ~ volumePlayListNum",
  //   volumePlayListNum
  // );
  const dispatch = useDispatch();
  const handleChangeVolumePlayList = async (e) => {
    await dispatch(volumeSlice.actions.volumePlayListAdjust(e.target.value));
  };
  const handleChangeVolumeCityTraffic = async (e) => {
    await dispatch(volumeSlice.actions.volumeCityTrafficAdjust(e.target.value));
  };
  const handleChangeVolumeCityRain = async (e) => {
    await dispatch(volumeSlice.actions.volumeRainAdjust(e.target.value));
  };
  const handleChangeVolumeBird = (e) => {
    dispatch(volumeSlice.actions.volumeBirdAdjust(e.target.value));
  };
  const handleChangeVolumeCampFire = (e) => {
    dispatch(volumeSlice.actions.volumeCampFireAdjust(e.target.value));
  };
  const handleChangeVolumeDeepSpace = (e) => {
    dispatch(volumeSlice.actions.volumeDeepSpaceAdjust(e.target.value));
  };
  const handleChangeVolumeFirePlace = (e) => {
    dispatch(volumeSlice.actions.volumeFirePlaceAdjust(e.target.value));
  };
  const handleChangeVolumeForestNight = (e) => {
    dispatch(volumeSlice.actions.volumeForestNightAdjust(e.target.value));
  };
  const handleChangeVolumeOcean = (e) => {
    dispatch(volumeSlice.actions.volumeOceanAdjust(e.target.value));
  };
  const handleChangeVolumePeopleTalk = (e) => {
    dispatch(volumeSlice.actions.volumePeopleTalkAdjust(e.target.value));
  };
  const handleChangeVolumeRainForest = (e) => {
    dispatch(volumeSlice.actions.volumeRainForestAdjust(e.target.value));
  };
  const handleChangeVolumeRiver = (e) => {
    dispatch(volumeSlice.actions.volumeRiverAdjust(e.target.value));
  };
  const handleChangeVolumeSnow = (e) => {
    dispatch(volumeSlice.actions.volumeSnowAdjust(e.target.value));
  };
  const handleChangeVolumeUnderWater = (e) => {
    dispatch(volumeSlice.actions.volumeUnderWaterAdjust(e.target.value));
  };
  const handleChangeVolumeWaves = (e) => {
    dispatch(volumeSlice.actions.volumeWavesAdjust(e.target.value));
  };
  const handleChangeVolumeWind = (e) => {
    dispatch(volumeSlice.actions.volumeWindAdjust(e.target.value));
  };
  useEffect(() => {
    if (volumeCityRainNum > 0) {
      dispatch(toggleSlice.actions.rainDayDashBoardToggleHome(true));
      console.log("Oh shit");
    } else if (volumeCityRainNum === 0) {
      dispatch(toggleSlice.actions.rainDayDashBoardToggleHome(false));
      dispatch(toggleSlice.actions.rainDayToggleHome(false));
      console.log("false false false");
    }
  }, [volumeCityRainNum]);
  useEffect(() => {
    console.log("11111");
    if (volumeCityTrafficNum > 0) {
      dispatch(toggleSlice.actions.cityTrafficDashBoardToggleHome(true));
    } else if (volumeCityTrafficNum === 0) {
      dispatch(toggleSlice.actions.cityTrafficDashBoardToggleHome(false));
      dispatch(toggleSlice.actions.cityTrafficToggleHome(false));
    }
  }, [volumeCityTrafficNum]);
  useEffect(() => {
    if (volumeKeyboardNum > 0) {
      dispatch(toggleSlice.actions.keyboardDashBoardToggleHome(true));
    } else if (volumeCityTrafficNum === 0) {
      dispatch(toggleSlice.actions.keyboardDashBoardToggleHome(false));
      dispatch(toggleSlice.actions.keyboardToggleHome(false));
    }
  }, [volumeKeyboardNum]);
  const handleChangeVolumeCityBoard = async (e) => {
    await dispatch(volumeSlice.actions.volumeKeyboardAdjust(e.target.value));
  };
  const handleChill = async () => {
    await dispatch(volumeSlice.actions.volumePlayListAdjust(volumePlayListNum));
    await dispatch(toggleSlice.actions.chillToggleHome(true));
    await dispatch(toggleSlice.actions.sleepyToggleHome(false));
    await dispatch(toggleSlice.actions.kpopToggleHome(false));
    await dispatch(toggleSlice.actions.jazzToggleHome(false));
  };
  const handleSleepy = async () => {
    await dispatch(volumeSlice.actions.volumePlayListAdjust(volumePlayListNum));
    await dispatch(toggleSlice.actions.sleepyToggleHome(true));
    await dispatch(toggleSlice.actions.chillToggleHome(false));
    await dispatch(toggleSlice.actions.kpopToggleHome(false));
    await dispatch(toggleSlice.actions.jazzToggleHome(false));
  };
  const handleKpop = async () => {
    await dispatch(volumeSlice.actions.volumePlayListAdjust(volumePlayListNum));
    await dispatch(toggleSlice.actions.kpopToggleHome(true));
    await dispatch(toggleSlice.actions.chillToggleHome(false));
    await dispatch(toggleSlice.actions.sleepyToggleHome(false));
    await dispatch(toggleSlice.actions.jazzToggleHome(false));
  };
  const handleJazz = async () => {
    await dispatch(volumeSlice.actions.volumePlayListAdjust(volumePlayListNum));
    await dispatch(toggleSlice.actions.jazzToggleHome(true));
    await dispatch(toggleSlice.actions.chillToggleHome(false));
    await dispatch(toggleSlice.actions.sleepyToggleHome(false));
    await dispatch(toggleSlice.actions.kpopToggleHome(false));
  };
  //-------------------------
  return (
    <ControlDashBoardStyles
      openControlAdjust={openControlAdjust}
      controlBoardWidth={controlBoardWidth}
    >
      <div class="flex flex-col gap-y-8 overflow-hidden">
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
              <p className="z-20 text-base">{item.title}</p>
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

        <section className="flex flex-col gap-2 overflow-hidden">
          <h4 className="text-base text-white">Background Noise</h4>
          <aside class="flex flex-col gap-2 overflow-y-auto overflow-x-hidden no-scrollbar	h-[137px]">
            <BackgroundNoise
              text="City traffic"
              volume={volumeCityTrafficNum}
              handleChange={handleChangeVolumeCityTraffic}
            ></BackgroundNoise>
            <BackgroundNoise
              text="City rain"
              volume={volumeCityRainNum}
              handleChange={handleChangeVolumeCityRain}
            ></BackgroundNoise>
            <BackgroundNoise
              text="City board"
              volume={volumeCityBoardNum}
              handleChange={handleChangeVolumeCityBoard}
            ></BackgroundNoise>
            <BackgroundNoise
              text="Bird"
              volume={volumeBird}
              handleChange={handleChangeVolumeBird}
            ></BackgroundNoise>
            <BackgroundNoise
              text="Camp Fire"
              volume={volumeCampFire}
              handleChange={handleChangeVolumeCampFire}
            ></BackgroundNoise>
            <BackgroundNoise
              text="Deepspace"
              volume={volumeBird}
              handleChange={handleChangeVolumeBird}
            ></BackgroundNoise>
            <BackgroundNoise
              text="Fireplace"
              volume={volumeBird}
              handleChange={handleChangeVolumeBird}
            ></BackgroundNoise>
            <BackgroundNoise
              text="Forest night"
              volume={volumeBird}
              handleChange={handleChangeVolumeBird}
            ></BackgroundNoise>
            <BackgroundNoise
              text="Ocean"
              volume={volumeBird}
              handleChange={handleChangeVolumeBird}
            ></BackgroundNoise>
            <BackgroundNoise
              text="People talk"
              volume={volumeBird}
              handleChange={handleChangeVolumeBird}
            ></BackgroundNoise>
            <BackgroundNoise
              text="Rain forest"
              volume={volumeBird}
              handleChange={handleChangeVolumeBird}
            ></BackgroundNoise>
            <BackgroundNoise
              text="River"
              volume={volumeBird}
              handleChange={handleChangeVolumeBird}
            ></BackgroundNoise>
            <BackgroundNoise
              text="Snow"
              volume={volumeBird}
              handleChange={handleChangeVolumeBird}
            ></BackgroundNoise>
            <BackgroundNoise
              text="Underwater"
              volume={volumeBird}
              handleChange={handleChangeVolumeBird}
            ></BackgroundNoise>
            <BackgroundNoise
              text="Waves"
              volume={volumeBird}
              handleChange={handleChangeVolumeBird}
            ></BackgroundNoise>
            <BackgroundNoise
              text="Camp Fire"
              volume={volumeCampFire}
              handleChange={handleChangeVolumeCampFire}
            ></BackgroundNoise>
          </aside>
        </section>
      </div>
    </ControlDashBoardStyles>
  );
};

export default ControlDashBoard;
