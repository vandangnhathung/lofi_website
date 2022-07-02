import React, { useState } from "react";
import { useDispatch, useSelector } from "@reduxjs/toolkit";
import { toggleSlice } from "./toggleSlice";
const Toggle = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const toggleSelector = useSelector((state) => state.toggles);
  console.log(toggleSelector);
  const dispatch = useDispatch();
  const handleToggle = () => {
    setToggleButton(!toggleButton);
    dispatch(toggleSlice.actions.toggleHome);
  };
  return (
    <div
      className={`h-[31px] w-[62px] p-1 rounded-full transition-all duration-300 bg-primary cursor-pointer relative flex items-center ${
        toggleButton ? "bg-transparent" : ""
      }`}
      onClick={handleToggle}
    >
      <div
        className={`day absolute left-[35px] transition-all duration-300 ${
          toggleButton ? "opacity-0 -translate-x-[19px]" : "opacity-1"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
      <div
        className={`night transition-all absolute left-[20px] duration-300 ${
          toggleButton ? "opacity-1 -translate-x-[14px]" : "opacity-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
      <div
        className={`top-[4px] left-[4px] w-[23px] absolute h-[23px] rounded-full transition-all duration-400 ${
          toggleButton ? "animate-switch" : "animate-reverseSwitch"
        }
          bg-white`}
      ></div>
    </div>
  );
};

export default Toggle;
// import React from "react";
// import styled from "@emotion/styled";
// import { FormControlLabel, Switch } from "@mui/material";

// export const IOSSwitch = styled(Switch)(({ theme }) => ({
//   width: 42,
//   height: 26,
//   padding: 0,
//   "& .MuiSwitch-switchBase": {
//     padding: 0,
//     margin: 2,
//     transitionDuration: "300ms",
//     "&.Mui-checked": {
//       transform: "translateX(16px)",
//       color: "#fff",
//       "& + .MuiSwitch-track": {
//         backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
//         opacity: 1,
//         border: 0,
//       },
//       "&.Mui-disabled + .MuiSwitch-track": {
//         opacity: 0.5,
//       },
//     },
//     "&.Mui-focusVisible .MuiSwitch-thumb": {
//       color: "#33cf4d",
//       border: "6px solid #fff",
//     },
//     "&.Mui-disabled .MuiSwitch-thumb": {
//       color:
//         theme.palette.mode === "light"
//           ? theme.palette.grey[100]
//           : theme.palette.grey[600],
//     },
//     "&.Mui-disabled + .MuiSwitch-track": {
//       opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     boxSizing: "border-box",
//     width: 22,
//     height: 22,
//   },
//   "& .MuiSwitch-track": {
//     borderRadius: 26 / 2,
//     backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
//     opacity: 1,
//     transition: theme.transitions.create(["background-color"], {
//       duration: 500,
//     }),
//   },
// }));

// const Toggle = ({ theme }) => {
//   return (
//     <>
//       <FormControlLabel
//         control={<IOSSwitch sx={{ m: 1 }} theme={theme} />}
//         label="iOS style"
//       />
//     </>
//   );
// };

// export default Toggle;
