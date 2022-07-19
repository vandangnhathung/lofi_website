import React, { useState, useEffect, useRef } from "react";
import AudioControl from "./AudioControl";

const AudioPlayer = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  // Destructure for conciseness
  //   const { title, audioSrc } = tracks[trackIndex];

  // Refs
  //   const audioRef = useRef(new Audio(audioSrc));
  //   const intervalRef = useRef();
  //   const isReady = useRef(false);

  //   console.log(audioRef);
  // Destructure for conciseness
  //   const { duration } = audioRef.current;
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
  return (
    <>
      <AudioControl
        toPrevTrack={toPrevTrack}
        toNextTrack={toNextTrack}
      ></AudioControl>
    </>
  );
};

export default AudioPlayer;