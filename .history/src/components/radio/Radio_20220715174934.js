import { Slider, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHandleVolumeSound from "../../hooks/useHandleVolumeSound.js";
import volumeSlice from "../../redux/reducers/volumeSlice";
import toggleSlice from "../toggle/toggleSlice";
import "./Radio.scss";

const Radio = ({
  text,
  dayRain = false,
  enterStore = false,
  cityTrafficSound = false,
  keyboardSound = false,
  onClick = () => {},
}) => {
  let volumeRainNum = useSelector((state) => state.volume.volumeRain);
  const dayRainDashboard = useSelector(
    (state) => state.toggle.rainDayDashBoardToggle
  );
  const summerStormSound = useSelector((state) => state.toggle.summerStorm);

  const volumeSummerStorm = useSelector(
    (state) => state.volume.volumeSummerStorm
  );
  const summerStormDashboard = useSelector(
    (state) => state.toggle.summerStormDashboardToggle
  );
  const cityTrafficDashBoard = useSelector(
    (state) => state.toggle.cityTrafficDashBoard
  );
  const keyboardDashBoard = useSelector(
    (state) => state.toggle.keyboardDashBoard
  );
  const volumeCityTrafficNum = useSelector(
    (state) => state.volume.volumeCityTraffic
  );
  const volumeKeyboardNum = useSelector((state) => state.volume.volumeKeyboard);
  const { handleChangeVolume: handleChangeVolumeSummerStorm } =
    useHandleVolumeSound(
      summerStormSound,
      volumeSummerStorm,
      volumeSlice.actions.volumeSummerStormAdjust,
      toggleSlice.actions.summerStormToggleHome
    );
  const handleChangeSummerStorm = (e) => {
    handleChangeVolumeSummerStorm(e.target.value);
  };
  const { handleChangeVolume } = useHandleVolumeSound(
    dayRain,
    volumeRainNum,
    volumeSlice.actions.volumeRainAdjust,
    toggleSlice.actions.rainDayToggleHome
  );
  const handleChangeVolumeRain = (e) => {
    handleChangeVolume(e.target.value);
  };
  const { handleChangeVolume: handleChangeVolumeTraffic } =
    useHandleVolumeSound(
      cityTrafficSound,
      volumeCityTrafficNum,
      volumeSlice.actions.volumeCityTrafficAdjust,
      toggleSlice.actions.cityTrafficToggleHome
    );
  const handleChangeTraffic = (e) => {
    handleChangeVolumeTraffic(e.target.value);
  };
  const { handleChangeVolume: handleChangeVolumeKeyboard } =
    useHandleVolumeSound(
      keyboardSound,
      volumeKeyboardNum,
      volumeSlice.actions.volumeKeyboardAdjust,
      toggleSlice.actions.keyboardToggleHome
    );
  const handleChangeKeyboard = (e) => {
    handleChangeVolumeKeyboard(e.target.value);
  };
  return (
    <label className="absolute cursor-pointer w-[200px] h-[72px] group flex justify-center">
      <input type="radio" className="hidden-input" checked={dayRain} />
      <div
        className="absolute border-[3px] border-white rounded-full w-8 h-8 group-hover:border-primary"
        onClick={onClick}
      >
        <span className="absolute block w-5 h-5 transition-all duration-200 -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:bg-primary left-1/2 top-1/2"></span>
      </div>
      <div
        className={`absolute top-[50%] opacity-0 p-2  text-white capitalize rounded-lg group-hover:animate-scale bg-blackBackground whitespace-nowrap hover:text-opacity-30 transition-all duration-200 group-hover:opacity-100 text-center flex flex-col items-center`}
      >
        <p
          onClick={onClick}
          className={`text-base ${dayRain ? "" : "px-[2.8rem]"} `}
        >
          {text}
        </p>
        <div className="transition-all duration-200">
          {" "}
          {(summerStormSound && text === "Summer storm") ||
          (text === "Summer storm" &&
            summerStormDashboard &&
            volumeSummerStorm > 0) ? (
            <Box sx={{ width: 150 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
                <Slider
                  aria-label="Volume"
                  value={volumeSummerStorm}
                  onChange={handleChangeSummerStorm}
                  min={0}
                  max={100}
                  valueLabelDisplay="auto"
                  className="slider"
                />
              </Stack>
            </Box>
          ) : (
            ""
          )}
          {(dayRain && text === "city rain") ||
          (text === "city rain" && dayRainDashboard && volumeRainNum > 0) ? (
            <Box sx={{ width: 150 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
                <Slider
                  aria-label="Volume"
                  value={volumeRainNum}
                  onChange={handleChangeVolumeRain}
                  min={0}
                  max={100}
                  valueLabelDisplay="auto"
                  className="slider"
                />
              </Stack>
            </Box>
          ) : (
            ""
          )}
          {(cityTrafficSound &&
            text === "city traffic" &&
            volumeCityTrafficNum > 0) ||
          (cityTrafficDashBoard &&
            text === "city traffic" &&
            volumeCityTrafficNum > 0) ? (
            <Box sx={{ width: 150 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
                <Slider
                  aria-label="Volume"
                  value={volumeCityTrafficNum}
                  onChange={handleChangeTraffic}
                  min={0}
                  max={100}
                  valueLabelDisplay="auto"
                  className="slider"
                />
              </Stack>
            </Box>
          ) : (
            ""
          )}
          {(keyboardSound && text === "key board" && volumeKeyboardNum > 0) ||
          (keyboardDashBoard &&
            text === "key board" &&
            volumeKeyboardNum > 0) ? (
            <Box sx={{ width: 150 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
                <Slider
                  aria-label="Volume"
                  value={volumeKeyboardNum}
                  onChange={handleChangeKeyboard}
                  min={0}
                  max={100}
                  valueLabelDisplay="auto"
                  className="slider"
                />
              </Stack>
            </Box>
          ) : (
            ""
          )}
        </div>
      </div>
    </label>
  );
};

export default Radio;
