import React from 'react';

const LevelMap = () => {
  const levels = [
    { id: 1, difficulty: 'basic' },
    { id: 2, difficulty: 'basic' },
    { id: 3, difficulty: 'easy' },
    { id: 4, difficulty: 'easy' },
    { id: 5, difficulty: 'medium' },
    { id: 6, difficulty: 'medium' },
    { id: 7, difficulty: 'hard' },
    { id: 8, difficulty: 'hard' },
    { id: 9, difficulty: 'expert' },
    { id: 10, difficulty: 'expert' },
    // Add more levels as needed
  ];

  const getLevelColor = (difficulty) => {
    switch (difficulty) {
      case 'basic':
        return 'bg-orange-500';
      case 'easy':
        return 'bg-blue-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'hard':
        return 'bg-purple-600';
      case 'expert':
        return 'bg-blue-800';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="flex flex-col items-center py-8">
      <h2 className="text-4xl font-bold text-white mb-8">Your Space Journey: Level Map</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {levels.map((level) => (
          <div
            key={level.id}
            className={`w-16 h-16 flex items-center justify-center text-xl text-white font-bold rounded-full cursor-pointer ${getLevelColor(level.difficulty)} transform transition-transform duration-200 hover:scale-105`}
          >
            {level.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelMap;
