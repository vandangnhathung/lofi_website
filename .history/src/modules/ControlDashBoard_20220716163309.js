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
  left: calc(99% - ${(props) => props.controlBoardWidth}px - 425px);
  position: absolute;
  top: -50%;
  transform: translateY(50%);
  transform: rotate(-180deg);
  width: 428px;
  animation: ${scale} 0.2s linear forwards;
  background-color: ${(props) =>
    props.openControlAdjust ? "#000" : "rgba(0, 0, 0, 0.6)"};
  border-radius: 24px;
  height: ${(props) => (props.mixMode ? "518.5px" : "498.5px")};
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
  const mixModeToggle = useSelector((state) => state.toggle.mixModeToggle);
  const volumePlayListNum = useSelector((state) => state.volume.volumePlayList);
  const volumeCityTrafficNum = useSelector(
    (state) => state.volume.volumeCityTraffic
  );
  const volumeCityRainNum = useSelector((state) => state.volume.volumeRain);
  const volumeSummerStormNum = useSelector(
    (state) => state.volume.volumeSummerStorm
  );

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
  const cityTrafficSound = useSelector((state) => state.toggle.cityTraffic);
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
  const handleChangeVolumeSummerStorm = async (e) => {
    await dispatch(volumeSlice.actions.volumeSummerStormAdjust(e.target.value));
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
  const dayRainDashboard = useSelector(
    (state) => state.toggle.rainDayDashBoardToggle
  );
  console.log(
    "🚀 ~ file: ControlDashBoard.js ~ line 159 ~ useEffect ~ volumeCityRainNum",
    volumeCityRainNum
  );
  useEffect(() => {
    if (volumeCityRainNum > 0) {
      dispatch(toggleSlice.actions.rainDayDashBoardToggleHome(false));
    } else if (volumeCityRainNum === 0) {
      dispatch(toggleSlice.actions.rainDayDashBoardToggleHome(false));
      dispatch(toggleSlice.actions.rainDayToggleHome(false));
    }
  }, [volumeCityRainNum]);
  useEffect(() => {
    if (volumeSummerStormNum > 0) {
      dispatch(toggleSlice.actions.summerStormDashboardToggleHome(true));
    } else if (volumeSummerStormNum === 0) {
      dispatch(toggleSlice.actions.summerStormDashboardToggleHome(false));
      dispatch(toggleSlice.actions.summerStormToggleHome(false));
    }
  }, [volumeSummerStormNum]);
  useEffect(() => {
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
  useEffect(() => {
    if (volumeOcean > 0) {
      dispatch(toggleSlice.actions.oceanDashboardToggleHome(true));
    } else if (volumeOcean === 0) {
      dispatch(toggleSlice.actions.oceanDashboardToggleHome(false));
      dispatch(toggleSlice.actions.oceanToggleHome(false));
    }
  }, [volumeOcean]);
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
  const handleMixMode = () => {
    dispatch(toggleSlice.actions.mixModeToggleHome());
  };
  const mainControl = useSelector((state) => state.controlBoard.mainControl);
  const screenControl = useSelector(
    (state) => state.controlBoard.screenControl
  );
  const cafeScene = useSelector((state) => state.scene.cafeScene);
  const honoluluSceneDay = useSelector((state) => state.scene.honoluluDay);
  return (
    <ControlDashBoardStyles
      openControlAdjust={openControlAdjust}
      controlBoardWidth={controlBoardWidth}
      mixMode={mixModeToggle}
    >
      {mainControl && (
        <>
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
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
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

            <section className="z-50 flex flex-col gap-2 overflow-hidden">
              <h4 className="text-base text-white">Background Noise</h4>
              <aside
                className={`flex flex-col  ${
                  mixModeToggle
                    ? "overflow-y-auto overflow-x-hidden no-scrollbar h-[156px]"
                    : "h-[136px]"
                }  pt-[9px]	`}
              >
                {cafeScene && (
                  <>
                    <BackgroundNoise
                      url="assets/icons/dashboard/traffic.svg"
                      text="City traffic"
                      volume={volumeCityTrafficNum}
                      handleChange={handleChangeVolumeCityTraffic}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/rain-city.svg"
                      text="City rain"
                      volume={volumeCityRainNum}
                      handleChange={handleChangeVolumeCityRain}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/keyboard.svg"
                      text="Keyboard"
                      volume={volumeCityBoardNum}
                      handleChange={handleChangeVolumeCityBoard}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/bird.svg"
                      text="Bird"
                      volume={volumeBird}
                      handleChange={handleChangeVolumeBird}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/campfire.svg"
                      text="Camp Fire"
                      volume={volumeCampFire}
                      handleChange={handleChangeVolumeCampFire}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/space.svg"
                      text="Deep Space"
                      volume={volumeDeepSpace}
                      handleChange={handleChangeVolumeDeepSpace}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/fire-place.svg"
                      text="Fireplace"
                      volume={volumeFirePlace}
                      handleChange={handleChangeVolumeFirePlace}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/forest.svg"
                      text="Forest night"
                      volume={volumeForestNight}
                      handleChange={handleChangeVolumeForestNight}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/ocean.svg"
                      text="Ocean"
                      volume={volumeOcean}
                      handleChange={handleChangeVolumeOcean}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/people.svg"
                      text="People talk"
                      volume={volumePeopleTalk}
                      handleChange={handleChangeVolumePeopleTalk}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/rain-forest.svg"
                      text="Rain forest"
                      volume={volumeRainForest}
                      handleChange={handleChangeVolumeRainForest}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/river.svg"
                      text="River"
                      volume={volumeRiver}
                      handleChange={handleChangeVolumeRiver}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/snow.svg"
                      text="Snow"
                      volume={volumeSnow}
                      handleChange={handleChangeVolumeSnow}
                    ></BackgroundNoise>

                    <BackgroundNoise
                      url="assets/icons/dashboard/underwater.svg"
                      text="Underwater"
                      volume={volumeUnderWater}
                      handleChange={handleChangeVolumeUnderWater}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/waves.svg"
                      text="Waves"
                      volume={volumeWaves}
                      handleChange={handleChangeVolumeWaves}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/wind.svg"
                      text="Wind"
                      volume={volumeWind}
                      handleChange={handleChangeVolumeWind}
                    ></BackgroundNoise>
                  </>
                )}

                {honoluluSceneDay && (
                  <>
                    <BackgroundNoise
                      url="assets/icons/dashboard/summer-storm.svg"
                      text="Summer Storm"
                      volume={volumeSummerStormNum}
                      handleChange={handleChangeVolumeSummerStorm}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/keyboard.svg"
                      text="Keyboard"
                      volume={volumeCityBoardNum}
                      handleChange={handleChangeVolumeCityBoard}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/ocean.svg"
                      text="Ocean"
                      volume={volumeOcean}
                      handleChange={handleChangeVolumeOcean}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/bird.svg"
                      text="Bird"
                      volume={volumeBird}
                      handleChange={handleChangeVolumeBird}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/campfire.svg"
                      text="Camp Fire"
                      volume={volumeCampFire}
                      handleChange={handleChangeVolumeCampFire}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/space.svg"
                      text="Deep Space"
                      volume={volumeDeepSpace}
                      handleChange={handleChangeVolumeDeepSpace}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/fire-place.svg"
                      text="Fireplace"
                      volume={volumeFirePlace}
                      handleChange={handleChangeVolumeFirePlace}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/forest.svg"
                      text="Forest night"
                      volume={volumeForestNight}
                      handleChange={handleChangeVolumeForestNight}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/traffic.svg"
                      text="City traffic"
                      volume={volumeCityTrafficNum}
                      handleChange={handleChangeVolumeCityTraffic}
                    ></BackgroundNoise>

                    <BackgroundNoise
                      url="assets/icons/dashboard/people.svg"
                      text="People talk"
                      volume={volumePeopleTalk}
                      handleChange={handleChangeVolumePeopleTalk}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/rain-forest.svg"
                      text="Rain forest"
                      volume={volumeRainForest}
                      handleChange={handleChangeVolumeRainForest}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/river.svg"
                      text="River"
                      volume={volumeRiver}
                      handleChange={handleChangeVolumeRiver}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/snow.svg"
                      text="Snow"
                      volume={volumeSnow}
                      handleChange={handleChangeVolumeSnow}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/underwater.svg"
                      text="Underwater"
                      volume={volumeUnderWater}
                      handleChange={handleChangeVolumeUnderWater}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/waves.svg"
                      text="Waves"
                      volume={volumeWaves}
                      handleChange={handleChangeVolumeWaves}
                    ></BackgroundNoise>
                    <BackgroundNoise
                      url="assets/icons/dashboard/wind.svg"
                      text="Wind"
                      volume={volumeWind}
                      handleChange={handleChangeVolumeWind}
                    ></BackgroundNoise>
                  </>
                )}
              </aside>
            </section>
          </div>
          <button
            onClick={handleMixMode}
            className="bg-[#111] mt-[14px] text-[#888] -ml-[32px] w-[428px] rounded-br-[24px] rounded-bl-[24px] h-[45px] hover:opacity-60 transition-all duration-200"
          >
            Mix More
          </button>
        </>
      )}
    </ControlDashBoardStyles>
  );
};

export default ControlDashBoard;
