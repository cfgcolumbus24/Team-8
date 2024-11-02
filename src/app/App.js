// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostComponent from './PostComponent'; // Your main post component
import UserProfile from './UserProfile/UserProfile'; // Import the new UserProfile component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/user/:username" component={UserProfile} /> {/* Dynamic user profile route */}
        <Route path="/" component={PostComponent} /> {/* Main component for posts */}
      </Switch>
    </Router>
  );
};

export default App;
