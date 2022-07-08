import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useHandleVolumeSound(
  sound = false,
  volume = 50,
  adjust = () => {},
  toggle = () => {}
) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (sound) {
      dispatch(adjust(50));
    } else {
      dispatch(adjust(50));
    }
  }, [sound]);
  const handleChangeVolume = (volume) => {
    dispatch(adjust(volume));
    if (volume === 0) {
      dispatch(toggle(false));
    }
  };
  return {
    handleChangeVolume,
  };
}
