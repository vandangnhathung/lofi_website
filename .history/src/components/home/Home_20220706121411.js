import React, { useEffect, useState } from "react";
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
  const enterStore = useSelector((state) => state.toggle.enterStoreToggle);

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
  const handleDayRain = () => {
    dispatch(toggleSlice.actions.rainDayToggleHome(!dayRain));
  };
  const handleCityTraffic = () => {
    dispatch(toggleSlice.actions.cityTrafficToggleHome(!cityTrafficSound));
  };
  const handleKeyboard = () => {
    dispatch(toggleSlice.actions.keyboardToggleHome(!keyboardSound));
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
          (dayRain || dayRainDashboard) && !night ? "opacity-100" : "opacity-0"
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
          (dayRain || dayRainDashboard) && night ? "opacity-100" : "opacity-0"
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
          (dayRain || dayRainDashboard) && enterStore
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
          enterStore && night && (dayRain || dayRainDashboard)
            ? "opacity-100"
            : "opacity-0"
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
        </ButtonStatus>
        <div className={`${enterStore ? "opacity-0" : ""}`}>
          <ButtonStatus top="65%" left="28%">
            <Radio
              text="city traffic"
              onClick={handleCityTraffic}
              cityTrafficSound={cityTrafficSound}
              setCityTrafficSound={setCityTrafficSound}
            ></Radio>
          </ButtonStatus>
        </div>
        {enterStore && (
          <ButtonStatus top2="74%" left2="83%">
            <Radio
              text="Key board"
              keyboardSound={keyboardSound}
              setKeyboardSound={setKeyboardSound}
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
