import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { chill, jazz, kpop, sleepy } from "../../audioSource/audioSource";
import ControlBoard from "../../modules/ControlBoard";
import ControlDashBoard from "../../modules/ControlDashBoard";
import ControlField from "../../modules/ControlField";
import controlBoardSlice from "../../redux/reducers/controlBoardSlice";
import volumeSlice from "../../redux/reducers/volumeSlice";
import AudioPlayer from "../audioControl/AudioPlayer";
import ButtonStatus from "../buttonStatus/ButtonStatus";
import Radio from "../radio/Radio";
import toggleSlice from "../toggle/toggleSlice";

const HomeStyles = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
const Home = () => {
  const night = useSelector((state) => state.toggle.nightToggle);
  const dayRain = useSelector((state) => state.toggle.rainDayToggle);
  const cityTrafficSound = useSelector((state) => state.toggle.cityTraffic);
  const keyboardSound = useSelector((state) => state.toggle.keyboard);
  const dayRainDashboard = useSelector(
    (state) => state.toggle.rainDayDashBoardToggle
  );
  const cityTrafficDashBoard = useSelector(
    (state) => state.toggle.cityTrafficDashBoard
  );
  const keyboardDashBoard = useSelector(
    (state) => state.toggle.keyboardDashBoard
  );
  const enterStore = useSelector((state) => state.toggle.enterStoreToggle);
  //volume
  let volumeRainNum = useSelector((state) => state.volume.volumeRain);
  const volumeKeyboardNum = useSelector((state) => state.volume.volumeKeyboard);
  const volumeCityTrafficNum = useSelector(
    (state) => state.volume.volumeCityTraffic
  );
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
  const openControlAdjust = useSelector(
    (state) => state.controlBoard.openControl
  );
  const [controlBoardWidth, setControlBoardWidth] = useState("");

  useEffect(() => {
    let element = document.querySelector(".control-board");
    setControlBoardWidth(element.offsetWidth);
  }, []);

  const dispatch = useDispatch();
  const handleOnPlayPauseClickChill = (bool = false) => {
    dispatch(toggleSlice.actions.isChillToggleHome(bool));
    dispatch(toggleSlice.actions.isSleepyPlayToggleHome(bool));
    dispatch(toggleSlice.actions.isKpopPlayToggleHome(bool));
    dispatch(toggleSlice.actions.isJazzPlayToggleHome(bool));
  };
  const handleOpenControlAdjust = () => {
    dispatch(controlBoardSlice.actions.isOpenControl(!openControlAdjust));
  };
  const handleDayRain = async () => {
    await dispatch(
      toggleSlice.actions.rainDayDashBoardToggleHome(!dayRainDashboard)
    );
    dispatch(volumeSlice.actions.volumeRainAdjust(0));
    await dispatch(toggleSlice.actions.rainDayToggleHome(!dayRain));
  };
  const handleCityTraffic = async () => {
    if (!cityTrafficSound) {
      dispatch(volumeSlice.actions.volumeCityTrafficAdjust(0));
    }
    if (cityTrafficDashBoard) {
      dispatch(toggleSlice.actions.cityTrafficDashBoardToggleHome(false));
      dispatch(volumeSlice.actions.volumeCityTrafficAdjust(0));
    }
    await dispatch(
      toggleSlice.actions.cityTrafficToggleHome(!cityTrafficSound)
    );
  };
  const handleKeyboard = () => {
    if (!keyboardSound) {
      dispatch(volumeSlice.actions.volumeCityTrafficAdjust(0));
    }
    if (keyboardDashBoard) {
      dispatch(toggleSlice.actions.keyboardDashBoardToggleHome(false));
      dispatch(volumeSlice.actions.volumeKeyboardAdjust(0));
    }
    await dispatch(
      toggleSlice.actions.keyboardToggleHome(!cityTrafficSound)
    );
  };
  const handleEnterStore = () => {
    dispatch(toggleSlice.actions.enterStoreToggleHome());
  };
  return (
    <HomeStyles>
      <video
        autoPlay
        loop
        muted
        className={`${
          night ? "opacity-0 " : "opacity-100 "
        }absolute transition-opacity duration-1000`}
      >
        <source src="/assets/videos/Exterior+-+Day.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`${
          night ? "opacity-100" : "opacity-0"
        } absolute transition-opacity duration-1000`}
      >
        <source src="/assets/videos/Exterior+-+Night.mp4" type="video/mp4" />
      </video>
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
          src="/assets/videos/Exterior+-+Rainy+Day.mp4"
          type="video/mp4"
        />
      </video>
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
          src="/assets/videos/Exterior+-+Rainy+Night.mp4"
          type="video/mp4"
        />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`${
          enterStore ? "opacity-100" : "opacity-0"
        } absolute transition-opacity z-20 duration-1000`}
      >
        <source
          src="/assets/videos/Interior+-+Sunny+Day.mp4"
          type="video/mp4"
        />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`${
          (dayRain || (dayRainDashboard && volumeRainNum > 0)) && enterStore
            ? "opacity-100"
            : "opacity-0"
        } absolute transition-opacity z-20 duration-1000`}
      >
        <source
          src="/assets/videos/Interior+-+Rainy+Day.mp4"
          type="video/mp4"
        />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`${
          enterStore && night ? "opacity-100" : "opacity-0"
        } absolute transition-opacity z-20 duration-1000`}
      >
        <source src="/assets/videos/Interior+-+Night.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className={`${
          enterStore && night && dayRain ? "opacity-100" : "opacity-0"
        } absolute transition-opacity z-20 duration-1000`}
      >
        <source
          src="/assets/videos/Interior+-+Rainy+Night.mp4"
          type="video/mp4"
        />
      </video>
      {/* Other items on the screen */}
      <div className="absolute inset-0">
        <ButtonStatus top2="19%" left2="16%" top="42%" left="8%">
          <Radio
            text="city rain"
            dayRain={dayRain}
            onClick={handleDayRain}
          ></Radio>
          {(dayRain || (dayRainDashboard && volumeRainNum > 0)) && (
            <ReactAudioPlayer
              preload="auto"
              autoPlay
              src="/assets/sounds/rain_city.mp3"
              loop
              volume={volumeRainNum / 100}
            />
          )}
          {(cityTrafficSound || cityTrafficDashBoard) && (
            <ReactAudioPlayer
              preload="auto"
              autoPlay
              src="/assets/sounds/city_traffic.mp3"
              loop
              volume={volumeCityTrafficNum / 100}
            />
          )}
          {(keyboardSound || keyboardDashBoard) && (
            <ReactAudioPlayer
              preload="auto"
              autoPlay
              src="/assets/sounds/keyboard.mp3"
              loop
              volume={volumeKeyboardNum / 100}
            />
          )}
        </ButtonStatus>
        <div className={`${enterStore ? "opacity-0" : ""}`}>
          <ButtonStatus top="65%" left="28%">
            <Radio
              text="city traffic"
              onClick={handleCityTraffic}
              cityTrafficSound={cityTrafficSound}
            ></Radio>
          </ButtonStatus>
        </div>
        {enterStore && (
          <ButtonStatus top2="74%" left2="83%">
            <Radio
              text="key board"
              keyboardSound={keyboardSound}
              onClick={handleKeyboard}
            ></Radio>
          </ButtonStatus>
        )}
        <ButtonStatus top2="70%" right2="95%" top="58%" right="41%">
          <Radio
            text={enterStore ? "Go out" : "Enter"}
            enterStore={enterStore}
            onClick={handleEnterStore}
          ></Radio>
        </ButtonStatus>
        {/* openControlAdjust */}
        <ControlField controlBoardWidth={controlBoardWidth}>
          {openControlAdjust && (
            <ControlDashBoard
              openControlAdjust={openControlAdjust}
              controlBoardWidth={controlBoardWidth}
            ></ControlDashBoard>
          )}
          <ControlBoard
            controlBoardWidth={controlBoardWidth}
            handleOpenControlAdjust={handleOpenControlAdjust}
            className="control-board"
            openControlAdjust={openControlAdjust}
          ></ControlBoard>
        </ControlField>
        {/* -------------------------------------- */}
      </div>
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
    </HomeStyles>
  );
};

export default Home;
