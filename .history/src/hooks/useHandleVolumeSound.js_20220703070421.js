import { useEffect } from "react";
import { useDispatch } from "react-redux";
import toggleSlice from "../components/toggle/toggleSlice";
import volumeSlice from "../redux/reducers/volumeSlice";

export default function useHandleVolumeSound(
  sound = false,
  volume,
  dayRain = false,
  volumeCityTrafficNum = false,
  handleChangeBolume
) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (sound) {
      dispatch(volumeSlice.actions.volumeRainAdjust(50));
    }
  }, [sound]);
  const handleChangeVolume = (e) => {
    let volume = e.target.value;
    if (volume === 0 && dayRain) {
      dispatch(toggleSlice.actions.rainDayToggleHome());
    }
    dispatch(volumeSlice.actions.volumeRainAdjust(volume));
  };
}
