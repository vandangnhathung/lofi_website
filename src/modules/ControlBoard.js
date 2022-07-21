import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AdjustIcon from "../icons/AdjustIcon";
import ScreenIcon from "../icons/ScreenIcon";
import controlBoardSlice from "../redux/reducers/controlBoardSlice";
import ControlAdjust from "./ControlAdjust";

const ControlBoardStyles = styled.section``;
const ControlBoard = ({ controlBoardWidth, className }) => {
  const mainControl = useSelector((state) => state.controlBoard.mainControl);
  const screenControl = useSelector(
    (state) => state.controlBoard.screenControl
  );
  const openControlAdjust = useSelector(
    (state) => state.controlBoard.openControl
  );
  const openScreenControl = useSelector(
    (state) => state.controlBoard.openScreenControl
  );
  const controlArray = [
    {
      id: 1,
      title: "Mixer",
      icon: <AdjustIcon mainControl={mainControl}></AdjustIcon>,
    },
    {
      id: 2,
      title: "Templates",
      icon: <ScreenIcon screenControl={screenControl}></ScreenIcon>,
    },
  ];
  const dispatch = useDispatch();
  const handleOpenControlAdjust = () => {
    dispatch(controlBoardSlice.actions.isOpenControl(!openControlAdjust));
    dispatch(controlBoardSlice.actions.isMainControl(!mainControl));
    dispatch(controlBoardSlice.actions.isOpenScreenControl(false));
    dispatch(controlBoardSlice.actions.isScreenControl(false));
  };

  const handleScreenControl = () => {
    dispatch(controlBoardSlice.actions.isOpenScreenControl(!openScreenControl));
    dispatch(controlBoardSlice.actions.isScreenControl(!screenControl));
    dispatch(controlBoardSlice.actions.isOpenControl(false));
    dispatch(controlBoardSlice.actions.isMainControl(false));
  };
  return (
    <ControlBoardStyles
      controlBoardWidth={controlBoardWidth}
      className={`${className}`}
    >
      {controlArray.map((item) => {
        if (item.id === 1) {
          return (
            <ControlAdjust
              openControlAdjust={openControlAdjust}
              key={item.id}
              onClick={() => {
                handleOpenControlAdjust(item.id);
              }}
              title={item.title}
            >
              {item.icon}
            </ControlAdjust>
          );
        }
        if (item.id === 2) {
          return (
            <ControlAdjust
              openScreenControl={openScreenControl}
              key={item.id}
              onClick={() => {
                handleScreenControl(item.id);
              }}
              title={item.title}
            >
              {item.icon}
            </ControlAdjust>
          );
        }
      })}
      {/* <ControlAdjust
        openControlAdjust={openControlAdjust}
        onClick={handleOpenControlAdjust}
      >
        <AdjustIcon openControlAdjust={openControlAdjust}></AdjustIcon>
      </ControlAdjust>
      <ControlAdjust
        openControlAdjust={openControlAdjust}
        onClick={handleOpenControlAdjust}
      >
        <ScreenIcon></ScreenIcon>
      </ControlAdjust>
      <ControlAdjust>
        <ChangeSetIcon></ChangeSetIcon>
      </ControlAdjust>
      <ControlAdjust>
        <ProductitiveIcon></ProductitiveIcon>
      </ControlAdjust> */}
    </ControlBoardStyles>
  );
};

export default ControlBoard;
