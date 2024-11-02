// src/UserProfile/UserProfile.js

import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  // Get the username from the URL parameters
  const { username } = useParams();

  // Simulate fetching user data (replace with actual API call)
  const userData = {
    name: username, // For demonstration, using username as the name
    profilePic: 'path/to/profilePic.jpg', // Replace with actual profile picture path
    content: 'This is the user profile content for ' + username, // Replace with actual user content
  };

  return (
    <div>
      <h1>{userData.name}'s Profile</h1>
      <img src={userData.profilePic} alt={`${userData.name}'s profile`} />
      <p>{userData.content}</p>
      {/* Add more user-specific details as needed */}
    </div>
  );
};

export default UserProfile;
