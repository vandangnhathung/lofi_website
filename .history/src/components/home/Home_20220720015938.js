import ReactAudioPlayer from "react-audio-player";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { chill, jazz, kpop, sleepy } from "../../audioSource/audioSource";
import ControlBoard from "../../modules/ControlBoard";
import ControlDashBoard from "../../modules/ControlDashBoard";
import ControlField from "../../modules/ControlField";
import ControlScreen from "../../modules/changeScene/ControlScreen";
import controlBoardSlice from "../../redux/reducers/controlBoardSlice";
import React, { useEffect, useState } from "react";
import volumeSlice from "../../redux/reducers/volumeSlice";
import AudioPlayer from "../audioControl/AudioPlayer";
import ButtonStatus from "../buttonStatus/ButtonStatus";
import Radio from "../radio/Radio";
import toggleSlice from "../toggle/toggleSlice";
import changeSceneSlice from "../../redux/reducers/changeSceneSlice";

const HomeStyles = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "lofi.co - relax & focus";
  }, []);
  //scene
  const cafeScene = useSelector((state) => state.scene.cafeScene);
  const honoluluSceneDay = useSelector((state) => state.scene.honoluluDay);

  //scene
  const night = useSelector((state) => state.toggle.nightToggle);
  const dayRain = useSelector((state) => state.toggle.rainDayToggle);
  const cityTrafficSound = useSelector((state) => state.toggle.cityTraffic);
  const keyboardSound = useSelector((state) => state.toggle.keyboard);
  const summerStormSound = useSelector((state) => state.toggle.summerStorm);
  const oceanSound = useSelector((state) => state.toggle.ocean);
  const dayRainDashboard = useSelector(
    (state) => state.toggle.rainDayDashBoardToggle
  );
  const cityTrafficDashBoard = useSelector(
    (state) => state.toggle.cityTrafficDashBoard
  );
  const keyboardDashBoard = useSelector(
    (state) => state.toggle.keyboardDashBoard
  );
  const summerStormDashboard = useSelector(
    (state) => state.toggle.summerStormDashboardToggle
  );
  const oceanDashBoard = useSelector(
    (state) => state.toggle.oceanDashboardToggle
  );
  const enterStore = useSelector((state) => state.toggle.enterStoreToggle);
  //volume
  const volumeSummerStorm = useSelector(
    (state) => state.volume.volumeSummerStorm
  );

  let volumeRainNum = useSelector((state) => state.volume.volumeRain);
  const volumeKeyboardNum = useSelector((state) => state.volume.volumeKeyboard);
  const volumeCityTrafficNum = useSelector(
    (state) => state.volume.volumeCityTraffic
  );
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
  //dashboard playlist type
  const isChill = useSelector((state) => state.toggle.chillToggle);
  const isChillPlay = useSelector((state) => state.toggle.isChillPlayToggle);
  const isSleepy = useSelector((state) => state.toggle.sleepyToggle);
  const isSleepyPlay = useSelector((state) => state.toggle.isSleepyPlayToggle);
  const isKpop = useSelector((state) => state.toggle.kpopToggle);
  const isKpopPlay = useSelector((state) => state.toggle.isKpopPlayToggle);
  const isJazz = useSelector((state) => state.toggle.jazzToggle);
  const isJazzPlay = useSelector((state) => state.toggle.isJazzPlayToggle);
  //---------------
  //---------------
  const [updateId, setUpdateId] = useState();
  const openControlAdjust = useSelector(
    (state) => state.controlBoard.openControl
  );
  const openScreenControl = useSelector(
    (state) => state.controlBoard.openScreenControl
  );
  const [controlBoardWidth, setControlBoardWidth] = useState("");

  useEffect(() => {
    let element = document.querySelector(".control-board");
    setControlBoardWidth(element.offsetWidth);
  }, []);

  const handleOnPlayPauseClickChill = (bool = false) => {
    dispatch(toggleSlice.actions.isChillToggleHome(bool));
    dispatch(toggleSlice.actions.isSleepyPlayToggleHome(bool));
    dispatch(toggleSlice.actions.isKpopPlayToggleHome(bool));
    dispatch(toggleSlice.actions.isJazzPlayToggleHome(bool));
  };
  const mainControl = useSelector((state) => state.controlBoard.mainControl);
  // console.log("🚀 ~ file: Home.js ~ line 99 ~ Home ~ mainControl", mainControl);
  const screenControl = useSelector(
    (state) => state.controlBoard.screenControl
  );

  const handleDayRain = () => {
    if (dayRain === false && dayRainDashboard === true) {
      dispatch(volumeSlice.actions.volumeRainAdjust(0));
      dispatch(toggleSlice.actions.rainDayToggleHome(!dayRain));
    }
    if (dayRain === false && dayRainDashboard === false) {
      dispatch(toggleSlice.actions.rainDayToggleHome(true));
    }
    if (dayRain === true) {
      dispatch(volumeSlice.actions.volumeRainAdjust(0));
      dispatch(toggleSlice.actions.rainDayToggleHome(false));
    }
    if (dayRainDashboard) {
      dispatch(toggleSlice.actions.rainDayDashBoardToggleHome(false));
      dispatch(toggleSlice.actions.rainDayToggleHome(false));
      dispatch(volumeSlice.actions.volumeRainAdjust(0));
    }
  };
  const handleSummerStorm = () => {
    if (summerStormSound === false && summerStormDashboard) {
      dispatch(volumeSlice.actions.volumeSummerStormAdjust(0));
      dispatch(toggleSlice.actions.summerStormToggleHome(!summerStormSound));
    }
    if (summerStormSound === false && !summerStormDashboard) {
      dispatch(toggleSlice.actions.summerStormToggleHome(!summerStormSound));
    }
    if (summerStormSound === true) {
      dispatch(volumeSlice.actions.volumeSummerStormAdjust(0));
      dispatch(toggleSlice.actions.summerStormToggleHome(!summerStormSound));
    }
    if (summerStormDashboard) {
      dispatch(toggleSlice.actions.summerStormDashboardToggleHome(false));
      dispatch(toggleSlice.actions.summerStormToggleHome(false));
      dispatch(volumeSlice.actions.volumeSummerStormAdjust(0));
    }
  };

  const handleCityTraffic = () => {
    if (cityTrafficDashBoard) {
      dispatch(toggleSlice.actions.cityTrafficDashBoardToggleHome(false));
      dispatch(toggleSlice.actions.cityTrafficToggleHome(false));
      dispatch(volumeSlice.actions.volumeCityTrafficAdjust(0));
    }
    if (cityTrafficSound === false && cityTrafficDashBoard) {
      dispatch(toggleSlice.actions.cityTrafficToggleHome(false));
      dispatch(volumeSlice.actions.volumeCityTrafficAdjust(0));
    }
    if (cityTrafficSound === false && !cityTrafficDashBoard) {
      dispatch(toggleSlice.actions.cityTrafficToggleHome(true));
    }
    if (cityTrafficSound === true) {
      dispatch(volumeSlice.actions.volumeCityTrafficAdjust(0));
      dispatch(toggleSlice.actions.cityTrafficToggleHome(false));
    }
  };
  const handleKeyboard = () => {
    if (keyboardSound === false && keyboardDashBoard) {
      dispatch(volumeSlice.actions.volumeKeyboardAdjust(0));
      dispatch(toggleSlice.actions.keyboardToggleHome(!keyboardSound));
    }
    if (keyboardSound === false && !keyboardDashBoard) {
      dispatch(toggleSlice.actions.keyboardToggleHome(!keyboardSound));
    }
    if (keyboardDashBoard) {
      dispatch(toggleSlice.actions.keyboardDashBoardToggleHome(false));
      dispatch(toggleSlice.actions.keyboardToggleHome(false));
      dispatch(volumeSlice.actions.volumeKeyboardAdjust(0));
    }
    if (keyboardSound === true) {
      dispatch(volumeSlice.actions.volumeKeyboardAdjust(0));
      dispatch(toggleSlice.actions.keyboardToggleHome(!keyboardSound));
    }
  };
  const handleOceanSound = () => {
    if (oceanSound === false && oceanDashBoard) {
      dispatch(volumeSlice.actions.volumeOceanAdjust(0));
      dispatch(toggleSlice.actions.oceanToggleHome(!oceanSound));
    }
    if (oceanSound === false && !oceanDashBoard) {
      dispatch(toggleSlice.actions.oceanToggleHome(!oceanSound));
    }
    if (oceanSound === true) {
      dispatch(volumeSlice.actions.volumeOceanAdjust(0));
      dispatch(toggleSlice.actions.oceanToggleHome(!oceanSound));
    }
    if (oceanDashBoard) {
      dispatch(toggleSlice.actions.oceanDashboardToggleHome(false));
      dispatch(toggleSlice.actions.oceanToggleHome(false));
      dispatch(volumeSlice.actions.volumeOceanAdjust(0));
    }
  };
  const handleEnterStore = () => {
    dispatch(toggleSlice.actions.enterStoreToggleHome(!enterStore));
  };
  return (
    <>
      <div className="absolute inset-0 bg-[#24242f]  flex items-center justify-center">
        <img
          src="./assets/icons/logo.0cbf9e63b4a021661126.gif"
          className="h-[100px] w-[200px]"
          alt=""
        />
      </div>
      <HomeStyles>
        <>
          <div
            className={`${
              cafeScene ? "opacity-100" : "opacity-70"
            } transition-opacity duration-1000`}
          >
            {cafeScene && (
              <video
                autoPlay
                loop
                muted
                className={`${night ? "opacity-0 " : "opacity-100 "} ${
                  cafeScene ? "opacity-100 " : "opacity-0 "
                } absolute transition-opacity duration-1000`}
              >
                <source
                  src="./assets/videos/Exterior+-+Day.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>

          <div
            className={`${
              honoluluSceneDay ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000`}
          >
            {honoluluSceneDay && (
              <video
                autoPlay
                loop
                muted
                className={`${
                  night === false && enterStore === false
                    ? "opacity-100 "
                    : "opacity-0 "
                }
                ${
                  night === false &&
                  honoluluSceneDay &&
                  volumeSummerStorm === 0 &&
                  enterStore === false
                }
                absolute transition-opacity duration-1000`}
              >
                <source
                  src="./assets/images/thumbnails/honolulu/honoluluBalconyDay.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
          {/* Focus this one */}
          <div
            className={`${
              cafeScene ? "opacity-100" : "opacity-70"
            } transition-opacity duration-1000`}
          >
            {cafeScene && (
              <video
                autoPlay
                loop
                muted
                className={`${
                  night ? "opacity-100" : "opacity-0"
                } absolute transition-opacity duration-1000`}
              >
                <source
                  src="./assets/videos/Exterior+-+Night.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
          <div
            className={`${
              honoluluSceneDay ? "opacity-100" : "opacity-70"
            } transition-opacity duration-1000`}
          >
            {honoluluSceneDay && (
              <video
                autoPlay
                loop
                muted
                className={`${
                  night && enterStore === false ? "opacity-100" : "opacity-0"
                } absolute transition-opacity duration-1000`}
              >
                <source
                  src="./assets/images/thumbnails/honolulu/honoluluBalconyNight.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
          <div
            className={`${
              cafeScene ? "opacity-100" : "opacity-70"
            } transition-opacity duration-1000`}
          >
            {cafeScene && (
              <video
                autoPlay
                loop
                muted
                className={`${
                  (dayRain || (dayRainDashboard && volumeRainNum > 0)) && !night
                    ? "opacity-100"
                    : "opacity-0"
                } absolute transition-opacity z-20 duration-1000`}
              >
                <source
                  src="./assets/videos/Exterior+-+Rainy+Day.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
          <div
            className={`${
              honoluluSceneDay ? "opacity-100" : "opacity-90"
            } transition-opacity duration-1000`}
          >
            {honoluluSceneDay && (
              <video
                autoPlay
                loop
                muted
                className={`${
                  (summerStormSound ||
                    (summerStormDashboard && volumeSummerStorm > 0)) &&
                  !night
                    ? "opacity-100"
                    : "opacity-0"
                } absolute transition-opacity z-20 duration-1000`}
              >
                <source
                  src="./assets/images/thumbnails/honolulu/Honolulu+Balcony+Rainy+Day.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
          <div
            className={`${
              cafeScene ? "opacity-100" : "opacity-70"
            } transition-opacity duration-1000`}
          >
            {cafeScene && (
              <video
                autoPlay
                loop
                muted
                className={`${
                  (dayRain || (dayRainDashboard && volumeRainNum > 0)) && night
                    ? "opacity-100"
                    : "opacity-0"
                } absolute transition-opacity z-20 duration-1000`}
              >
                <source
                  src="./assets/videos/Exterior+-+Rainy+Night.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
          <div
            className={`${
              honoluluSceneDay ? "opacity-100" : "opacity-90"
            } transition-opacity duration-1000`}
          >
            {honoluluSceneDay && (
              <video
                autoPlay
                loop
                muted
                className={`${
                  (summerStormSound ||
                    (summerStormDashboard && volumeSummerStorm > 0)) &&
                  night
                    ? "opacity-100"
                    : "opacity-0"
                } absolute transition-opacity z-20 duration-1000`}
              >
                <source
                  src="./assets/images/thumbnails/honolulu/Honolulu+Balcony+Rainy+Night.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
          <div
            className={`${
              cafeScene ? "opacity-100" : "opacity-70"
            } transition-opacity duration-1000`}
          >
            {cafeScene && (
              <video
                autoPlay
                loop
                muted
                className={`${
                  enterStore ? "opacity-100" : "opacity-0"
                } absolute transition-opacity z-20 duration-1000`}
              >
                <source
                  src="./assets/videos/Interior+-+Sunny+Day.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
          <div
            className={`${
              honoluluSceneDay ? "opacity-100" : "opacity-80"
            } transition-opacity duration-1000`}
          >
            {honoluluSceneDay && (
              <video
                autoPlay
                loop
                muted
                className={`${
                  enterStore && night === false && volumeSummerStorm === 0
                    ? "opacity-100"
                    : "opacity-0"
                } absolute transition-opacity z-20 duration-1000`}
              >
                <source
                  src="./assets/images/thumbnails/honolulu/Honolulu+Beach+Day.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
          <div
            className={`${
              cafeScene ? "opacity-100" : "opacity-70"
            } transition-opacity duration-1000`}
          >
            {cafeScene && (
              <video
                autoPlay
                loop
                muted
                className={`${
                  (dayRain || (dayRainDashboard && volumeRainNum > 0)) &&
                  enterStore
                    ? "opacity-100"
                    : "opacity-0"
                } absolute transition-opacity z-20 duration-1000`}
              >
                <source
                  src="./assets/videos/Interior+-+Rainy+Day.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
          <div
            className={`${
              honoluluSceneDay ? "opacity-100" : "opacity-80"
            } transition-opacity duration-1000`}
          >
            {honoluluSceneDay && (
              <video
                autoPlay
                loop
                muted
                className={`${
                  (summerStormSound ||
                    (summerStormDashboard && volumeSummerStorm > 0)) &&
                  enterStore
                    ? "opacity-100"
                    : "opacity-0"
                } absolute transition-opacity z-20 duration-1000`}
              >
                <source
                  src="./assets/images/thumbnails/honolulu/Honolulu+Beach+Rainy+Day.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
          <div
            className={`${
              cafeScene ? "opacity-100" : "opacity-70"
            } transition-opacity duration-1000`}
          >
            {cafeScene && (
              <video
                autoPlay
                loop
                muted
                className={`${
                  enterStore && night ? "opacity-100" : "opacity-0"
                } absolute transition-opacity z-20 duration-1000`}
              >
                <source
                  src="./assets/videos/Interior+-+Night.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
          <div
            className={`${
              honoluluSceneDay ? "opacity-100" : "opacity-80"
            } transition-opacity duration-1000`}
          >
            {honoluluSceneDay && (
              <video
                autoPlay
                loop
                muted
                className={`${
                  enterStore && night && volumeSummerStorm === 0
                    ? "opacity-100"
                    : "opacity-0"
                } absolute transition-opacity z-20 duration-1000`}
              >
                <source
                  src="./assets/images/thumbnails/honolulu/Honolulu+Beach+Night.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
          <div
            className={`${
              cafeScene ? "opacity-100" : "opacity-70"
            } transition-opacity duration-1000`}
          >
            {cafeScene && (
              <video
                autoPlay
                loop
                muted
                className={`${
                  enterStore && night && dayRain ? "opacity-100" : "opacity-0"
                } absolute transition-opacity z-20 duration-1000`}
              >
                <source
                  src="./assets/videos/Interior+-+Rainy+Night.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
          <div
            className={`${
              honoluluSceneDay ? "opacity-100" : "opacity-80"
            } transition-opacity duration-1000`}
          >
            {honoluluSceneDay && (
              <video
                autoPlay
                loop
                muted
                className={`${
                  enterStore && night && summerStormSound
                    ? "opacity-100"
                    : "opacity-0"
                } absolute transition-opacity z-20 duration-1000`}
              >
                <source
                  src="./assets/images/thumbnails/honolulu/Honolulu+Beach+Rainy+Night.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
          {/* Other items on the screen */}
          <div className="absolute inset-0">
            <ButtonStatus top2="19%" left2="16%" top="42%" left="8%">
              {cafeScene && (
                <Radio
                  text="city rain"
                  dayRain={dayRain}
                  onClick={handleDayRain}
                ></Radio>
              )}
              {honoluluSceneDay && (
                <Radio
                  text="Summer storm"
                  dayRain={dayRain}
                  onClick={handleSummerStorm}
                ></Radio>
              )}

              {cafeScene &&
                (dayRain || (dayRainDashboard && volumeRainNum > 0)) && (
                  <ReactAudioPlayer
                    preload="auto"
                    autoPlay
                    src="./assets/sounds/rain_city.mp3"
                    loop
                    volume={volumeRainNum / 100}
                  />
                )}
              {honoluluSceneDay &&
                (summerStormSound ||
                  (summerStormDashboard && volumeSummerStorm > 0)) && (
                  <ReactAudioPlayer
                    preload="auto"
                    autoPlay
                    src="./assets/sounds/summer_storm.mp3"
                    loop
                    volume={volumeSummerStorm / 100}
                  />
                )}
              {(cityTrafficSound || cityTrafficDashBoard) && (
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/sounds/city_traffic.mp3"
                  loop
                  volume={volumeCityTrafficNum / 100}
                />
              )}
              {(keyboardSound || keyboardDashBoard) && (
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/sounds/keyboard.mp3"
                  loop
                  volume={volumeKeyboardNum / 100}
                />
              )}
              {volumeBird > 0 && (
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/sounds/birds.mp3"
                  loop
                  volume={volumeBird / 100}
                />
              )}
              {volumeCampFire > 0 && (
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/sounds/campfire.mp3"
                  loop
                  volume={volumeCampFire / 100}
                />
              )}
              {volumeDeepSpace > 0 && (
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/sounds/deepspace.mp3"
                  loop
                  volume={volumeDeepSpace / 100}
                />
              )}
              {volumeFirePlace > 0 && (
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/sounds/fireplace.mp3"
                  loop
                  volume={volumeFirePlace / 100}
                />
              )}
              {volumeForestNight > 0 && (
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/sounds/forest_night.mp3"
                  loop
                  volume={volumeForestNight / 100}
                />
              )}
              {volumeOcean > 0 && (
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/sounds/ocean.mp3"
                  loop
                  volume={volumeOcean / 100}
                />
              )}
              {volumePeopleTalk > 0 && (
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/sounds/people_talk_inside.mp3"
                  loop
                  volume={volumePeopleTalk / 100}
                />
              )}
              {volumeRainForest > 0 && (
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/sounds/rain_forest.mp3"
                  loop
                  volume={volumeRainForest / 100}
                />
              )}
              {volumeRiver > 0 && (
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/sounds/river.mp3"
                  loop
                  volume={volumeRiver / 100}
                />
              )}
              {volumeSnow > 0 && (
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/sounds/snow.mp3"
                  loop
                  volume={volumeSnow / 100}
                />
              )}
              {volumeUnderWater > 0 && (
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/sounds/underwater.mp3"
                  loop
                  volume={volumeUnderWater / 100}
                />
              )}
              {volumeWaves > 0 && (
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/sounds/waves.mp3"
                  loop
                  volume={volumeWaves / 100}
                />
              )}
              {volumeWind > 0 && (
                <ReactAudioPlayer
                  preload="auto"
                  autoPlay
                  src="./assets/sounds/wind.mp3"
                  loop
                  volume={volumeWind / 100}
                />
              )}
            </ButtonStatus>

            {cafeScene && !enterStore && (
              <ButtonStatus top="65%" left="28%">
                <Radio
                  text="city traffic"
                  onClick={handleCityTraffic}
                  cityTrafficSound={cityTrafficSound}
                ></Radio>
              </ButtonStatus>
            )}
          </div>
          {enterStore && cafeScene && (
            <ButtonStatus top2="74%" left2="83%">
              <Radio
                text="key board"
                keyboardSound={keyboardSound}
                onClick={handleKeyboard}
              ></Radio>
            </ButtonStatus>
          )}
          {honoluluSceneDay && !enterStore && (
            <ButtonStatus top="83%" left="67%">
              <Radio
                text="key board"
                keyboardSound={keyboardSound}
                onClick={handleKeyboard}
              ></Radio>
            </ButtonStatus>
          )}
          {honoluluSceneDay && enterStore && (
            <ButtonStatus top2="65% " left2="67%">
              <Radio text="Ocean" onClick={handleOceanSound}></Radio>
            </ButtonStatus>
          )}
          {cafeScene && (
            <ButtonStatus top2="70%" right2="95%" top="58%" right="41%">
              <Radio
                text={enterStore ? "Go out" : "Enter"}
                enterStore={enterStore}
                onClick={handleEnterStore}
              ></Radio>
            </ButtonStatus>
          )}

          {honoluluSceneDay && (
            <ButtonStatus top2="70%" right2="95%" top="58%" right="41%">
              <Radio
                text={enterStore ? "Go back home" : "Go out the beach"}
                enterStore={enterStore}
                onClick={handleEnterStore}
              ></Radio>
            </ButtonStatus>
          )}
          {/* openControlAdjust */}
          <ControlField controlBoardWidth={controlBoardWidth}>
            {openControlAdjust && (
              <ControlDashBoard
                openControlAdjust={openControlAdjust}
                controlBoardWidth={controlBoardWidth}
              ></ControlDashBoard>
            )}
            {openScreenControl && <ControlScreen></ControlScreen>}
            <ControlBoard
              controlBoardWidth={controlBoardWidth}
              // handleOpenControlAdjust={handleOpenControlAdjust}
              className="control-board"
              openControlAdjust={openControlAdjust}
              openScreenControl={openScreenControl}
              // handleScreenControl={handleScreenControl}
            ></ControlBoard>
          </ControlField>
          {/* -------------------------------------- */}
          {isChill && (
            <AudioPlayer
              tracks={chill}
              play={isChillPlay}
              handleOnPlayPauseClick={handleOnPlayPauseClickChill}
            ></AudioPlayer>
          )}
          {isSleepy && (
            <AudioPlayer
              tracks={sleepy}
              play={isSleepyPlay}
              handleOnPlayPauseClick={handleOnPlayPauseClickChill}
            ></AudioPlayer>
          )}
          {isKpop && (
            <AudioPlayer
              tracks={kpop}
              play={isKpopPlay}
              handleOnPlayPauseClick={handleOnPlayPauseClickChill}
            ></AudioPlayer>
          )}
          {isJazz && (
            <AudioPlayer
              tracks={jazz}
              play={isJazzPlay}
              handleOnPlayPauseClick={handleOnPlayPauseClickChill}
            ></AudioPlayer>
          )}
        </>
      </HomeStyles>
    </>
  );
};

export default Home;
