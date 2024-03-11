import React, { useState } from 'react';
import axios from 'axios';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    try {
      // Make API call to fetch YouTube videos
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          q: query,
          part: 'snippet',
          maxResults: 5, // Number of videos to fetch
          type: 'video',
          key: 'AIzaSyBT72GZq0ew2mz5yd0so8g-1clR__JOpZk', // Replace with your actual YouTube API key
        },
      });
      
      // Extract relevant data from the API response
      const fetchedResults = response.data.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
      }));

      setSearchResults(fetchedResults);
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
    }
  };

  const handleAddToPlaylist = (videoId) => {
    // Implement adding video to playlist functionality
    console.log('Adding video to playlist:', videoId);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <button className="btn-resume">Resume</button>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search YouTube"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <div className="dropdown">
          <ul className="dropdown-menu">
            {searchResults.map((video) => (
              <li key={video.id} className="dropdown-item">
                <span>{video.title}</span>
                <button onClick={() => handleAddToPlaylist(video.id)}>+</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
