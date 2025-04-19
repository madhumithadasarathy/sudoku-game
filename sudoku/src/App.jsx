import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import LevelMap from './LevelMap';
import SudokuGame from './SudokuGame';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/levels" element={<LevelMap />} />
        <Route path="/game/:level" element={<SudokuGame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
