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
    // } else {
    //   dispatch(adjust(0));
    // }
  }, [sound]);
  const handleChangeVolume = (volume) => {
    dispatch(adjust(volume));
    if (volume === 0) {
      console.log(
        "🚀 ~ file: useHandleVolumeSound.js ~ line 22 ~ handleChangeVolume ~ volume",
        volume
      );

      dispatch(toggleRain(!sound));
    }
  };
  return {
    handleChangeVolume,
  };
}
