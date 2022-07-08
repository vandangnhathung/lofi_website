import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import toggleSlice from "../toggle/toggleSlice";
import AudioControl from "./AudioControl";
const AudioPlayer = ({ tracks, isChill, isSleepy }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  const dispatch = useDispatch();
  // Destructure for conciseness
  const { title, audioSrc } = tracks[trackIndex];
  const volumePlayListNum = useSelector((state) => state.volume.volumePlayList);

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);
  audioRef.current.volume = volumePlayListNum / 100;
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
  // const playDelay = () =>
  //   setTimeout(() => {
  //     audioRef.current.play();
  //   }, 2000);
  useEffect(() => {
    if (isChill || isSleepy) {
      audioRef.current.play();
      startTimer();
      console.log("its working 11111");
    } else {
      audioRef.current.pause();
    }
  }, [isChill || isSleepy]);
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

    if ((isReady.current && isChill) || (isReady.current && isSleepy)) {
      audioRef.current.play();
      handleOnPlayPauseClick(true);
      startTimer();
      console.log("its working 22222", isChill || isSleepy);
    }
    if (isChill || isSleepy) {
      audioRef.current.play();
      console.log("its working 33333");

      handleOnPlayPauseClick(true);
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);
  const handleOnPlayPauseClick = (bool = false) => {
    if (isChill) {
      dispatch(toggleSlice.actions.chillToggleHome(bool));
    }
  };

  return (
    <>
      <AudioControl
        isPlaying={isChill || isSleepy}
        onPrevClick={toPrevTrack}
        onNextClick={toNextTrack}
        handleOnPlayPauseClick={handleOnPlayPauseClick}
      ></AudioControl>
    </>
  );
};

export default AudioPlayer;
