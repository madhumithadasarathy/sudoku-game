import React, { useEffect, useState } from 'react';
import { generateSudoku } from 'sudoku-gen';
import useSound from 'use-sound';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import winSound from '../assets/sounds/win.mp3';

const initialLives = 3;

const deepCopy = (arr) => JSON.parse(JSON.stringify(arr));

const SudokuGame = () => {
  const [difficulty, setDifficulty] = useState(null);
  const [board, setBoard] = useState([]);
  const [fixed, setFixed] = useState([]);
  const [solution, setSolution] = useState([]);
  const [selected, setSelected] = useState(null);
  const [lives, setLives] = useState(initialLives);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [playWin] = useSound(winSound);

  // Timer
  useEffect(() => {
    if (!startTime || gameOver) return;
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime, gameOver]);

  const startGame = (diff) => {
    const { puzzle, solution } = generateSudoku(diff);
    const board = Array.from({ length: 9 }, (_, i) =>
      puzzle.slice(i * 9, i * 9 + 9).map(Number)
    );
    const fixed = board.map((row) => row.map((v) => v !== 0));
    const sol = Array.from({ length: 9 }, (_, i) =>
      solution.slice(i * 9, i * 9 + 9).map(Number)
    );
    setDifficulty(diff);
    setBoard(board);
    setFixed(fixed);
    setSolution(sol);
    setLives(initialLives);
    setSelected(null);
    setElapsedTime(0);
    setGameOver(false);
    setStartTime(Date.now());
  };

  const handleInput = (num) => {
    if (!selected || gameOver) return;
    const [r, c] = selected;
    if (fixed[r][c]) return;
    const newBoard = deepCopy(board);
    if (num !== solution[r][c]) {
      setLives((prev) => {
        const newLives = prev - 1;
        if (newLives <= 0) setGameOver(true);
        return newLives;
      });
    } else {
      newBoard[r][c] = num;
      setBoard(newBoard);
      checkWin(newBoard);
    }
  };

  const checkWin = (b) => {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (b[r][c] !== solution[r][c]) return;
      }
    }
    setGameOver(true);
    playWin();
  };

  const handleHint = () => {
    if (!selected || gameOver) return;
    const [r, c] = selected;
    if (fixed[r][c]) return;
    const newBoard = deepCopy(board);
    newBoard[r][c] = solution[r][c];
    setBoard(newBoard);
    checkWin(newBoard);
  };

  if (!difficulty) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold mb-6">🌌 Choose Difficulty</h1>
        <div className="flex gap-4">
          {['easy', 'medium', 'hard'].map((diff) => (
            <button
              key={diff}
              onClick={() => startGame(diff)}
              className="bg-purple-600 px-6 py-2 rounded text-lg hover:bg-purple-700 transition"
            >
              {diff.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      {gameOver && <Confetti />}
      <h1 className="text-3xl font-bold text-center mb-4">🧠 Sudoku - {difficulty.toUpperCase()}</h1>
      <div className="flex justify-between mb-4">
        <span>⏱ {elapsedTime}s</span>
        <span>❤️ {lives}</span>
        <button
          onClick={handleHint}
          className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600"
        >
          💡 Hint
        </button>
      </div>

      <div className="grid grid-cols-9 gap-1 w-fit mx-auto">
        {board.map((row, rIdx) =>
          row.map((val, cIdx) => {
            const selectedCell = selected?.[0] === rIdx && selected?.[1] === cIdx;
            const isFixed = fixed[rIdx][cIdx];
            return (
              <motion.div
                key={`${rIdx}-${cIdx}`}
                className={`w-10 h-10 text-lg font-semibold border flex items-center justify-center cursor-pointer
                  ${isFixed ? 'bg-slate-800' : 'bg-slate-700'}
                  ${selectedCell ? 'ring-2 ring-purple-400' : ''}`}
                onClick={() => setSelected([rIdx, cIdx])}
                whileTap={{ scale: 0.9 }}
              >
                {val !== 0 ? val : ''}
              </motion.div>
            );
          })
        )}
      </div>

      <div className="grid grid-cols-9 gap-2 mt-6 justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <button
            key={n}
            onClick={() => handleInput(n)}
            className="bg-slate-700 hover:bg-slate-600 w-10 h-10 rounded text-lg"
          >
            {n}
          </button>
        ))}
      </div>

      {gameOver && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 bg-purple-800 p-6 rounded-xl text-center shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-2">
            {lives > 0 ? '🎉 You Win!' : '💀 Game Over'}
          </h2>
          <p>Time: {elapsedTime} seconds</p>
          <button
            onClick={() => setDifficulty(null)}
            className="mt-4 bg-white text-black px-4 py-1 rounded hover:bg-slate-100"
          >
            🔁 Play Again
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default SudokuGame;
