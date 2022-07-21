import { Box, Slider, Stack } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const BackgroundNoiseStyles = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: white;
  .icon > .MuiSlider-thumb {
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    width: 26px !important;
    height: 26px !important;
  }
  .icon.MuiSlider-root {
    width: 180px !important;
    height: 26px !important;
    & > .MuiSlider-rail {
      background: #141414;
    }
  }
`;
const BackgroundNoise = ({ text, volume, handleChange, icon, url }) => {
  const dayRainVolume = useSelector((state) => state.volume.volumeRain);
  const cityTrafficSound = useSelector(
    (state) => state.volume.volumeCityTraffic
  );
  const cityTraffic = useSelector((state) => state.toggle.cityTrafficToggle);
  const dayRainDashboard = useSelector(
    (state) => state.toggle.rainDayDashBoardToggle
  );
  console.log(
    "🚀 ~ file: BackgroundNoise.js ~ line 25 ~ BackgroundNoise ~ dayRainDashboard",
    url
  );
  return (
    <BackgroundNoiseStyles url={url}>
      {/* {dayRainDashboard && dayRainVolume > 0 && (
        <ReactAudioPlayer
          preload="auto"
          autoPlay
          src="/assets/sounds/rain_city.mp3"
          loop
          volume={dayRainVolume / 100}
        />
      )} */}
      {/* {cityTraffic && cityTrafficSound > 0 && (
        <ReactAudioPlayer
          preload="auto"
          autoPlay
          src="/assets/sounds/city_traffic.mp3"
          loop
          volume={cityTrafficSound / 100}
        />
      )} */}
      <h4 className="mr-16 max-w-[80px] w-full">{text}</h4>
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
              className={`slider icon`}
            />
          </Stack>
        </Box>
      </div>
    </BackgroundNoiseStyles>
  );
};

export default BackgroundNoise;
