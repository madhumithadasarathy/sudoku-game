import React, { useState, useEffect } from 'react';

const initialGrid = Array(9).fill(null).map(() => Array(9).fill(''));

const SudokuGame = () => {
  const [grid, setGrid] = useState(initialGrid);
  const [timer, setTimer] = useState(0);
  const [lives, setLives] = useState(3);
  const [difficulty, setDifficulty] = useState('easy');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (t) => {
    const minutes = Math.floor(t / 60);
    const seconds = t % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  const handleInputChange = (row, col, value) => {
    if (!/^[1-9]?$/.test(value)) return; // Allow digits 1-9 or empty
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Sudoku Challenge 🧩</h1>

      <div className="flex items-center justify-between w-full max-w-md mb-4">
        <span className="text-lg">⏱ {formatTime(timer)}</span>
        <span className="text-lg">
          {'❤️'.repeat(lives)}{' '}
          {'🤍'.repeat(3 - lives)}
        </span>
        <select
          className="border rounded px-2 py-1"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="grid grid-cols-9 gap-1 bg-black p-1">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onChange={(e) =>
                handleInputChange(rowIndex, colIndex, e.target.value)
              }
              className="w-8 h-8 text-center text-lg font-medium border-none outline-none bg-white text-blue-600"
            />
          ))
        )}
      </div>

      <div className="mt-4 space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">New Game</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Hint</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  );
};

export default SudokuGame;
