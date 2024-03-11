// Step 1: Create a new file named MusicPlayer.js in your src directory
// src/components/MusicPlayer.js

import React from 'react';

const MusicPlayer = () => {
  return (
    // Step 2: Define the structure of your music player component
    <div className="music-player">
      <div className="song-info">
        <div className="song-title">Song Title</div>
        <div className="artist">Artist Name</div>
      </div>
      <div className="controls">
        <button className="control-button">Shuffle</button>
        <button className="control-button">Previous</button>
        <button className="control-button">Play</button>
        <button className="control-button">Next</button>
        <button className="control-button">Repeat</button>
      </div>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
      <div className="volume-control">
        <input type="range" min="0" max="100" defaultValue="50" className="volume-slider" />
      </div>
    </div>
  );
};

export default MusicPlayer;
