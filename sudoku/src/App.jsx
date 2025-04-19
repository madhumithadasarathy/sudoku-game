import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import LevelMap from './LevelMap';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Welcome page (Loading Screen) */}
        <Route path="/" element={<Welcome />} />
        
        {/* Route for the LevelMap page */}
        <Route path="/level-map" element={<LevelMap />} />
      </Routes>
    </Router>
  );
};

export default App;
