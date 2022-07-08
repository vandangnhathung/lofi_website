import { useEffect } from "react";
import { useDispatch } from "react-redux";
import toggleSlice from "../components/toggle/toggleSlice";
import volumeSlice from "../redux/reducers/volumeSlice";

export default function useHandleVolumeSound(
  sound = false,
  volume = 50,
  adjust = () => {}
) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (sound) {
      dispatch(volumeSlice.actions.volumeRainAdjust(50));
    }
  }, [sound]);
  const handleChangeVolume = (volume) => {
    if (volume === 0) {
      dispatch(adjust);
    }
    dispatch(adjust(volume));
  };
  return {
    handleChangeVolume,
  };
}
