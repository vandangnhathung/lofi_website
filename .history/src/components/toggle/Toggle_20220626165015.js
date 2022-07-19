import React, { useState } from "react";
import "./ToggleStyles.scss";

const Toggle = () => {
  const [toggleButton, setToggleButton] = useState(false);
  return (
    // <div
    //   className="h-[31px] w-[62px] p-1 rounded-full bg-primary cursor-pointer relative"
    //   onClick={() => setToggleButton(!toggleButton)}
    // >
    //   <div
    //     className={`top-[4px] left-[4px] w-[23px] absolute h-[23px] rounded-full transition-all duration-400 ${
    //       toggleButton ? "animate-switch" : ""
    //     }
    //       bg-white`}
    //   ></div>
    // </div>
    <div class="switch">
      <input type="checkbox" />
      <div class="slider"></div>
      <div class="bg"></div>
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