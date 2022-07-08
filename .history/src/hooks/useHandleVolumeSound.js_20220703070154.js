import { useEffect } from "react";
import { useDispatch } from "react-redux";
import toggleSlice from "../components/toggle/toggleSlice";
import volumeSlice from "../redux/reducers/volumeSlice";

export default function useHandleVolumeSound(sound = false) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (sound) {
      dispatch(volumeSlice.actions.volumeRainAdjust(50));
    }
  }, [sound]);
  const handleChangeVolume = (e) => {
    let volumeRain = e.target.value;
    if (volumeRain === 0) {
      dispatch(toggleSlice.actions.rainDayToggleHome());
    }
    dispatch(volumeSlice.actions.volumeRainAdjust(volumeRain));
  };
}
