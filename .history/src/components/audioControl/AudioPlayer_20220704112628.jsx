import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import toggleSlice from "../toggle/toggleSlice";
import AudioControl from "./AudioControl";
const AudioisChill || isSleepyer = ({ tracks, isChill, isSleepy }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  const dispatch = useDispatch();
  // Destructure for conciseness
  const { title, audioSrc } = tracks[trackIndex];
  const volumeisChill || isSleepyListNum = useSelector((state) => state.volume.volumeisChill || isSleepyList);

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);
  audioRef.current.volume = volumeisChill || isSleepyListNum / 100;
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
  // const isChill || isSleepyDelay = () =>
  //   setTimeout(() => {
  //     audioRef.current.isChill || isSleepy();
  //   }, 2000);
  useEffect(() => {
    if (isChill || isSleepy) {
      audioRef.current.isChill || isSleepy();
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

    if (isReady.current && isChill || isSleepy) {
      audioRef.current.isChill || isSleepy();
      handleOnisChill || isSleepyPauseClick(true);
      startTimer();
      console.log("its working 22222");
    }
    if (isChill || isSleepy) {
      audioRef.current.isChill || isSleepy();
      console.log("its working 33333");

      handleOnisChill || isSleepyPauseClick(true);
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);
  const handleOnisChill || isSleepyPauseClick = (bool = false) => {
    dispatch(toggleSlice.actions.chillToggleHome(bool));
  };

  return (
    <>
      <AudioControl
        isisChill || isSleepying={isChill || isSleepy}
        onPrevClick={toPrevTrack}
        onNextClick={toNextTrack}
        handleOnisChill || isSleepyPauseClick={handleOnisChill || isSleepyPauseClick}
      ></AudioControl>
    </>
  );
};

export default AudioisChill || isSleepyer;
