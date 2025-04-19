import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-[url('/space-bg.jpg')] bg-cover bg-center flex items-center justify-center flex-col text-white">
      <h1 className="text-5xl font-bold mb-6 animate-pulse">🚀 Sudoku Galaxy</h1>
      <p className="mb-4 text-xl">Prepare for takeoff, Commander!</p>
      <button
        onClick={() => navigate('/levels')}
        className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all"
      >
        Start Mission
      </button>
    </div>
  );
};

export default Welcome;
