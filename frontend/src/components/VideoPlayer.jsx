import React, { useState, useRef } from "react";

const VideoPlayer = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative max-w-80">
      {!isPlaying ? (
        <div
          className="cursor-pointer transition-all"
          onClick={handleVideoClick}
        >
          <video
            ref={videoRef}
            className=" object-cover rounded-lg"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <button className="text-white text-2xl">▶️</button>
          </div>
        </div>
      ) : (
        <video
          ref={videoRef}
          className="object-cover rounded-lg"
          controls
          autoPlay
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
