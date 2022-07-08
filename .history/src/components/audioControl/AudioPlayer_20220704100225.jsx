import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import volumeSlice from "../../redux/reducers/volumeSlice";
import toggleSlice from "../toggle/toggleSlice";
import AudioControl from "./AudioControl";
import { chill } from "../../audioSource/audioSource";
const AudioPlayer = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  const play = useSelector((state) => state.toggle.playToggle);
  const dispatch = useDispatch();
  // Destructure for conciseness
  const { title, audioSrc } = tracks[trackIndex];
  const volumePlayListNum = useSelector((state) => state.volume.volumePlayList);
  console.log(
    "🚀 ~ file: AudioPlayer.jsx ~ line 17 ~ AudioPlayer ~ volumePlayListNum",
    volumePlayListNum
  );

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  console.log(
    "🚀 ~ file: AudioPlayer.jsx ~ line 21 ~ AudioPlayer ~ intervalRef",
    intervalRef
  );
  const isReady = useRef(false);

  useEffect(() => {
    audioRef.current.volume = volumePlayListNum / 100;
  }, [volumePlayListNum]);
  // Destructure for conciseness
  const { duration } = audioRef.current;
  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };
  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };
  useEffect(() => {
    if (play) {
      dispatch(volumeSlice.actions.volumePlayListAdjust(50));
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [play]);
  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);
  // Handle setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current && play) {
      audioRef.current.play();
      handleOnPlayPauseClick(true);
      startTimer();
    }
    if (play) {
      audioRef.current.play();
      handleOnPlayPauseClick(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);
  const handleOnPlayPauseClick = (bool = false) => {
    dispatch(toggleSlice.actions.playToggleHome(bool));
  };

  return (
    <>
      <AudioControl
        isPlaying={play}
        onPrevClick={toPrevTrack}
        onNextClick={toNextTrack}
        handleOnPlayPauseClick={handleOnPlayPauseClick}
      ></AudioControl>
    </>
  );
};

export default AudioPlayer;
