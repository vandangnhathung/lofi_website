import { useSelect } from "@mui/base";
import { Slider, Stack } from "@mui/material";
import React, { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useDispatch, useSelector } from "react-redux";
import volumeSlice from "../../redux/reducers/volumeSlice";
import toggleSlice from "../toggle/toggleSlice";
import "./Radio.scss";

const Radio = ({
  text,
  dayRain = false,
  enterStore = false,
  onClick = () => {},
}) => {
  const volumeNum = useSelector((state) => state.volume.volumeRain);
  console.log("🚀 ~ file: Radio.js ~ line 14 ~ volumeNum", volumeNum);
  const dispatch = useDispatch();
  useEffect(() => {
    if (dayRain) {
      dispatch(volumeSlice.actions.volumeRainAdjust(50));
    }
  }, [dayRain]);
  const handleChangeVolumeRain = (e) => {
    let volumeRain = e.target.value;
    if (volumeRain === 0) {
      dispatch(toggleSlice.actions.rainDayToggleHome());
    }

    dispatch(volumeSlice.actions.volumeRainAdjust(volumeRain));
  };
  const handleDragStop = () => this.props.update(this.value);
  return (
    <label className="absolute cursor-pointer w-[200px] h-[72px] group flex justify-center">
      {dayRain && (
        <ReactAudioPlayer
          preload="auto"
          autoPlay
          src="/assets/sounds/rain_city.mp3"
          loop
          volume={volumeNum / 100}
        />
      )}
      <input
        type="radio"
        className="hidden-input"
        checked={dayRain || enterStore}
      />
      <div
        className="absolute border-[3px] border-white rounded-full w-8 h-8 group-hover:border-primary"
        onClick={onClick}
      >
        <span className="absolute block w-5 h-5 transition-all duration-200 -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:bg-primary left-1/2 top-1/2"></span>
      </div>
      <div className="absolute top-[50%] hidden p-3 px-6 text-white capitalize rounded-lg group-hover:animate-scale group-hover:block bg-blackBackground whitespace-nowrap hover:text-opacity-30 transition-all duration-200 text-center">
        <p onClick={onClick}>{text}</p>
        <div className="transition-all duration-200 group-hover:block w-[100px]">
          {" "}
          {dayRain ? (
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <Slider
                aria-label="Volume"
                value={volumeNum}
                onChange={handleChangeVolumeRain}
                onDragStop={(e) => this.props.update(e, this.val)}
                min={0}
                max={100}
                valueLabelDisplay="auto"
              />
            </Stack>
          ) : (
            ""
          )}
        </div>
      </div>
    </label>
  );
};

export default Radio;
