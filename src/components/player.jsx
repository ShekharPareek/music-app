import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react"; // Using lucide-react icons

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Play or Pause the Audio
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update Progress Bar
  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((currentTime / duration) * 100);
  };

//   // Seek Audio Position
  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  return (
    <div style={{backgroundColor:'#121212'}} className="w-auto p-5 mx-3 my-1 mt-0 text-white rounded-lg flex flex-col items-center">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        src="https://hindi.djpunjab.app/load/xUK1mjPZtkAOXFo38qxWgQ==/Laungda%20Lashkara%20(Remix).mp3"
      ></audio>
      <div className="flex gap-3 items-center ">
      <button
        className="p-2 bg-green-600 rounded-full cursor-pointer"
        onClick={togglePlayPause}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>

      <input
        type="range"
        value={progress}
        onChange={handleSeek}
        className="w-48 mt-2"
      />
      </div>
      
    </div>
  );
};

export default AudioPlayer;
