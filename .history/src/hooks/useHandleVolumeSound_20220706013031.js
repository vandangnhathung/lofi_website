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
    if(sound) {
      dispatch(adjust(volume));
    }
    if (sound && volume === 0) {
      dispatch(adjust(50));
    } else {
      dispatch(adjust(0));
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
