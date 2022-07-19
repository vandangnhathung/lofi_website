import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { audioData } from "../../audioSource/audioSource";
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
  const dispatch = useDispatch();
  const handleDayRain = () => {
    dispatch(toggleSlice.actions.rainDayToggleHome());
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
        {!enterStore && (
          <ButtonStatus top="65%" left="28%">
            <Radio text="city traffic"></Radio>
          </ButtonStatus>
        )}
        {enterStore && (
          <ButtonStatus top2="74%" left2="83%">
            <Radio text="Key board"></Radio>
          </ButtonStatus>
        )}
        <ButtonStatus top2="70%" right2="95%" top="58%" right="41%">
          <Radio
            text={enterStore ? "Go out" : "Enter"}
            enterStore={enterStore}
            onClick={handleEnterStore}
          ></Radio>
        </ButtonStatus>
        <AudioPlayer tracks={audioData}></AudioPlayer>
      </div>
    </HomeStyles>
  );
};

export default Home;