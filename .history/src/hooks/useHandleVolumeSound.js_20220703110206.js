import { useEffect } from "react";
import { useDispatch } from "react-redux";
import toggleSlice from "../components/toggle/toggleSlice";
import volumeSlice from "../redux/reducers/volumeSlice";

export default function useHandleVolumeSound(
  sound = false,
  volume = 50,
  adjust = () => {},
  toggleRain = false
) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (sound) {
      dispatch(volumeSlice.actions.adjust);
    }
  }, [sound]);
  const handleChangeVolume = (volume) => {
    if (volume === 0) {
      dispatch(toggleRain());
    }
    dispatch(adjust(volume));
  };
  return {
    handleChangeVolume,
  };
}
