import { Box, Slider, Stack } from "@mui/material";
import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import toggleSlice from "../toggle/toggleSlice";

const BackgroundNoiseStyles = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: white;
`;
const BackgroundNoise = ({ text, volume, handleChange }) => {
  const dayRain = useSelector((state) => state.toggle.rainDayToggle);
  const [cityTrafficSound, setCityTrafficSound] = useState(false);
  const [keyboardSound, setKeyboardSound] = useState(false);
  const dispatch = useDispatch();
  const handleDayRain = () => {
    dispatch(toggleSlice.actions.rainDayToggleHome());
  };
  const handleCityTraffic = () => {
    setCityTrafficSound(!cityTrafficSound);
  };
  const handleKeyboard = () => {
    setKeyboardSound(!keyboardSound);
  };
  return (
    <BackgroundNoiseStyles>
      {dayRain && (
        <ReactAudioPlayer
          preload="auto"
          autoPlay
          src="/assets/sounds/rain_city.mp3"
          loop
          volume={volume / 100}
        />
      )}
      {cityTrafficSound && (
        <ReactAudioPlayer
          preload="auto"
          autoPlay
          src="/assets/sounds/city_traffic.mp3"
          loop
          volume={volume / 100}
        />
      )}
      {keyboardSound && (
        <ReactAudioPlayer
          preload="auto"
          autoPlay
          src="/assets/sounds/keyboard.mp3"
          loop
          volume={volume / 100}
        />
      )}
      <h4 className="mr-3 max-w-[80px] w-full">{text}</h4>
      <div className="flex-1">
        <Box sx={{ width: 150 }} className="box">
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Slider
              aria-label="Volume"
              value={volume}
              onChange={handleChange}
              min={0}
              max={100}
              valueLabelDisplay="auto"
              className="slider"
            />
          </Stack>
        </Box>
      </div>
    </BackgroundNoiseStyles>
  );
};

export default BackgroundNoise;
