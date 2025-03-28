import React from 'react';

const MathSolver = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">
        Solveur d'Équations Mathématiques
      </h1>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <textarea
          className="w-full h-48 p-4 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:border-gray-600"
          placeholder="Entrez votre équation mathématique ici..."
        />
        <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity">
          Résoudre
        </button>
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Solution</h2>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <p>La solution apparaîtra ici...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathSolver;