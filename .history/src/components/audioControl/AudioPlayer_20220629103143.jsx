import React, { useState, useEffect, useRef } from 'react';

const AudioPlayer = ({ tracks }) => {
	// State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

	return ( ... );
}

export default AudioPlayer;