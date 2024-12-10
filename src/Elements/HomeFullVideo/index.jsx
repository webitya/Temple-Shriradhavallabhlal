import React, { useState, useRef } from 'react';
import { PlayCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import './FullVideoSection.css';

const FullVideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  // Handle video load
  const handleVideoLoaded = () => {
    setLoading(false);
  };

  // Function to handle the play button click
  const handlePlayVideo = () => {
    setShowVideo(true); // Show video when the play button is clicked
    setTimeout(() => {
      videoRef.current.play(); // Start video playback after thumbnail disappears
    }, 300); // Slightly increased delay for smooth transition
  };

  return (
    <div className="enhanced-gradient flex justify-center items-center ">
      {/* If showVideo is false, show thumbnail */}
      {!showVideo && (
        <div className="relative cursor-pointer" onClick={handlePlayVideo}>
          <img
            src="/bg1.jpg" // Replace with your thumbnail image
            alt="Video Thumbnail"
            className="thumbnail w-100vw max-h-60vh rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          {/* Play button overlay on the thumbnail */}
          <div className="absolute inset-0 flex justify-center items-center text-white play-btn-container">
            <PlayCircleOutlined className="text-7xl play-btn hover:scale-110 transition-transform duration-300 ease-in-out" />
          </div>
        </div>
      )}

      {/* Show video when the user clicks on the thumbnail */}
      {showVideo && (
        <div className="relative">
          {loading && (
            <div className="absolute inset-0 flex justify-center items-center">
              <LoadingOutlined className="text-4xl text-white" />
            </div>
          )}
          <video
            ref={videoRef}
            className="video-element shadow-lg transition-all duration-300 ease-in-out"
            controls
            onLoadedData={handleVideoLoaded}
          >
            <source src="/vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default FullVideoSection;
