import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import toggleSlice from "../toggle/toggleSlice";
import AudioControl from "./AudioControl";
const AudioPlayer = ({ tracks, play, handleOnPlayPauseClick }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const { title, audioSrc } = tracks[trackIndex];
  const audioRef = useRef();
  const volumePlayListNum = useSelector((state) => state.volume.volumePlayList);
  console.log(
    "🚀 ~ file: AudioPlayer.jsx ~ line 11 ~ AudioPlayer ~ volumePlayListNum",
    volumePlayListNum
  );
  const [trackProgress, setTrackProgress] = useState(0);

  // Destructure for conciseness

  // Refs
  const intervalRef = useRef();
  const isReady = useRef(false);
  audioRef.current.volume = parseInt(volumePlayListNum) / 100;

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
    audioRef.current.volume = volumePlayListNum / 100;
    if (play) {
      audioRef.current.play();
      startTimer();
      console.log("its working 11111");
    } else {
      console.log("its working 2222");

      audioRef.current.pause();
    }
  }, [play, volumePlayListNum]);
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
      console.log("its working 22222");
    }
    if (play) {
      audioRef.current.play();
      console.log("its working 33333");

      handleOnPlayPauseClick(true);
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  return (
    <>
      <audio ref={audioRef}>
        <source src={audioSrc} />
      </audio>
    </>
  );
};

export default AudioPlayer;
