import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { audioData, chill, sleepy } from "../../audioSource/audioSource";
import ControlBoard from "../../modules/ControlBoard";
import ControlDashBoard from "../../modules/ControlDashBoard";
import ControlField from "../../modules/ControlField";
import controlBoardSlice from "../../redux/reducers/controlBoardSlice";
import AudioControl from "../audioControl/AudioControl";
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
  const enterStore = useSelector((state) => state.toggle.enterStoreToggle);
  //dashboard playlist type
  const isChill = useSelector((state) => state.toggle.chillToggle);
  const isSleepy = useSelector((state) => state.toggle.sleepyToggle);
  //---------------
  const openControlAdjust = useSelector(
    (state) => state.controlBoard.openControl
  );
  const [controlBoardWidth, setControlBoardWidth] = useState("");
  const [cityTrafficSound, setCityTrafficSound] = useState(false);

  const [keyboardSound, setKeyboardSound] = useState(false);

  useEffect(() => {
    let element = document.querySelector(".control-board");
    setControlBoardWidth(element.offsetWidth);
  }, []);

  const dispatch = useDispatch();
  const handleOnPlayPauseClick = (bool = false) => {
    dispatch(toggleSlice.actions.chillToggleHome(bool));
  };

  const handleOpenControlAdjust = () => {
    dispatch(controlBoardSlice.actions.isOpenControl(!openControlAdjust));
  };
  const handleDayRain = () => {
    dispatch(toggleSlice.actions.rainDayToggleHome());
  };
  const handleCityTraffic = () => {
    setCityTrafficSound(!cityTrafficSound);
  };
  const handleKeyboard = () => {
    setKeyboardSound(!keyboardSound);
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
          dayRain && !night ? "opacity-100" : "opacity-0"
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
          dayRain && night ? "opacity-100" : "opacity-0"
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
          dayRain && enterStore ? "opacity-100" : "opacity-0"
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
      <AudioPlayer
        tracks={chill}
        play={isChill}
        handleOnPlayPauseClick={handleOnPlayPauseClick}
      ></AudioPlayer>
      {isSleepy && <AudioPlayer tracks={sleepy}></AudioPlayer>}
    </HomeStyles>
  );
};

export default Home;
