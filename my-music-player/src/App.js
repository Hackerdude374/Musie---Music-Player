// Step 4: Import the MusicPlayer component into your main application file
// src/App.js

import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling
import Navbar from './components/Navbar'; // Import Navbar component
import MusicPlayer from './MusicPlayer'; // Import the MusicPlayer component

function App() {
  return (
    <div className="App">
      {/* Step 5: Render the MusicPlayer component */}
      <Navbar />
      <MusicPlayer />
      
    </div>
  );
}

export default App;
