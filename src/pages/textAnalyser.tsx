import React from 'react';

const TextAnalyzer = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">
        Analyseur de Texte
      </h1>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <textarea
          className="w-full h-48 p-4 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:border-gray-600"
          placeholder="Entrez votre texte à analyser..."
        />
        <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity">
          Analyser
        </button>
        
        <div className="mt-8 space-y-6">
          {/* Mots-clés */}
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 dark:text-white">Mots-clés</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                mot-clé
              </span>
            </div>
          </div>

          {/* Analyse du ton */}
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 dark:text-white">Analyse du ton</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Positif</span>
                <div className="w-2/3 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Neutre</span>
                <div className="w-2/3 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Négatif</span>
                <div className="w-2/3 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Score de complexité */}
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 dark:text-white">Score de complexité</h2>
            <div className="flex items-center space-x-4">
              <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-green-500 to-yellow-500 h-4 rounded-full" 
                  style={{ width: '0%' }}
                ></div>
              </div>
              <span className="text-gray-600 dark:text-gray-300 font-semibold">0/10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAnalyzer;