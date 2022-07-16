import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AdjustIcon from "../icons/AdjustIcon";
import ChangeSetIcon from "../icons/ChangeSetIcon";
import ProductitiveIcon from "../icons/ProductitiveIcon";
import ScreenIcon from "../icons/ScreenIcon";
import controlBoardSlice from "../redux/reducers/controlBoardSlice";
import ControlAdjust from "./ControlAdjust";
import ControlDashBoard from "./ControlDashBoard";

const ControlBoardStyles = styled.section``;
const ControlBoard = ({
  controlBoardWidth,
  className,
  openControlAdjust,
  handleOpenControlAdjust,
}) => {
  const controlArray = [
    {
      id: 1,
      icon: <AdjustIcon></AdjustIcon>,
    },
    {
      id: 2,
      icon: <ScreenIcon></ScreenIcon>,
    },
  ];
  const mainDashboard = useSelector(
    (state) => state.controlBoard.mainDashboard
  );
  const dispatch = useDispatch();
  const handleClickDashboard = (id) => {
    console.log(
      "🚀 ~ file: ControlBoard.js ~ line 34 ~ handleClickDashboard ~ id",
      id
    );
    if (id === 1) {
      dispatch(controlBoardSlice.actions.isMainControl(!mainDashboard));
    }
  };
  return (
    <ControlBoardStyles
      controlBoardWidth={controlBoardWidth}
      className={`${className}`}
    >
      {controlArray.map((item) => (
        <ControlAdjust
          openControlAdjust={openControlAdjust}
          onClick={() => {
            handleOpenControlAdjust(item.id);
          }}
          key={item.id}
        >
          <span
            onClick={() => {
              handleClickDashboard(item.id);
            }}
            className="block"
          >
            {item.icon}
          </span>
        </ControlAdjust>
      ))}
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
