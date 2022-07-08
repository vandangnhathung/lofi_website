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

const ControlBoardStyles = styled.section`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background-color: red;
  display: inline-block;
  height: 280px;
  left: calc(99% - ${(props) => props.controlBoardWidth}px);
  border-radius: 35px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px;
  z-index: 999;
`;
const ControlBoard = ({ controlBoardWidth, className }) => {
  const openControlAdjust = useSelector(
    (state) => state.controlBoard.openControl
  );
  console.log(
    "🚀 ~ file: ControlBoard.js ~ line 30 ~ ControlBoard ~ openControlAdjust",
    openControlAdjust
  );
  const dispatch = useDispatch();
  const handleOpenControlAdjust = () => {
    dispatch(controlBoardSlice.actions.isOpenControl(!openControlAdjust));
  };
  return (
    <ControlBoardStyles
      controlBoardWidth={controlBoardWidth}
      className={`${className}`}
    >
      <ControlAdjust onClick={handleOpenControlAdjust}>
        <AdjustIcon></AdjustIcon>
        {openControlAdjust && <ControlDashBoard></ControlDashBoard>}
      </ControlAdjust>
      <ControlAdjust>
        <ScreenIcon></ScreenIcon>
      </ControlAdjust>
      <ControlAdjust>
        <ChangeSetIcon></ChangeSetIcon>
      </ControlAdjust>
      <ControlAdjust>
        <ProductitiveIcon></ProductitiveIcon>
      </ControlAdjust>
    </ControlBoardStyles>
  );
};

export default ControlBoard;
