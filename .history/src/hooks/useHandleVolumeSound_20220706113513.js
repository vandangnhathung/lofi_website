import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useHandleVolumeSound(
  sound = false,
  volume = 50,
  adjust = () => {},
  toggleRain = () => {}
) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (sound) {
      dispatch(adjust(50));
    }
  }, [sound]);
  const handleChangeVolume = (volume) => {
    if (volume === 0) {
      dispatch(toggleRain(!sound));
    }
    dispatch(adjust(volume));
  };
  return {
    handleChangeVolume,
  };
}