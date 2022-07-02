import { useSelect } from "@mui/base";
import { Slider, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "./Radio.scss";

const Radio = ({
  text,
  dayRain = false,
  enterStore = false,
  onClick = () => {},
}) => {
  const volumeNum = useSelector((state) => state.volume.volumeValue);
  console.log("🚀 ~ file: Radio.js ~ line 14 ~ volumeNum", volumeNum);
  const handleChangeValume = (e) => {};
  return (
    <label className="absolute cursor-pointer w-[200px] h-[72px] group flex justify-center">
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
        <p>{text}</p>
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
                onChange={handleChangeValume}
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
