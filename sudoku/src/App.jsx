import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SudokuGame from './SudokuGame';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route directly to SudokuGame for now */}
        <Route path="/" element={<SudokuGame />} />
      </Routes>
    </Router>
  );
};

export default App;
