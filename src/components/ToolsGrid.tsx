import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Importez les icônes nécessaires
import { FileText, Brain, Calculator, Languages, MessageSquare, Sparkles } from 'lucide-react';

const tools = [
  {
    id: 'grammar',
    name: 'Correcteur Orthographique',
    description: 'Corrigez vos textes automatiquement',
    icon: <FileText className="w-6 h-6" />,
    color: 'bg-blue-500',
    link: '/grammar' // Ajouter un lien de destination
  },
  {
    id: 'summary',
    name: 'Générateur de Résumés',
    description: 'Résumez vos documents rapidement',
    icon: <Brain className="w-6 h-6" />,
    color: 'bg-purple-500',
    link: '/summary' // Ajouter un lien de destination
  },
  {
    id: 'math',
    name: 'Solveur Mathématique',
    description: 'Résolvez des équations complexes',
    icon: <Calculator className="w-6 h-6" />,
    color: 'bg-green-500',
    link: '/mathSolver' // Ajouter un lien de destination
  },
  {
    id: 'translator',
    name: 'Traducteur',
    description: 'Traduisez dans plusieurs langues',
    icon: <Languages className="w-6 h-6" />,
    color: 'bg-red-500',
    link: '/translator' // Ajouter un lien de destination
  },
  {
    id: 'analyzer',
    name: 'Analyseur de Texte',
    description: 'Analysez le ton et la complexité',
    icon: <MessageSquare className="w-6 h-6" />,
    color: 'bg-yellow-500',
    link: '/analyzer' // Ajouter un lien de destination
  },
  {
    id: 'rewriter',
    name: 'Reformulateur',
    description: 'Reformulez vos textes',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'bg-pink-500',
    link: '/rewriter' // Ajouter un lien de destination
  },
];

function ToolsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          className="relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all p-6"
        >
          <div className="flex items-center mb-4">
            <div className={`p-2 ${tool.color} bg-opacity-10 rounded-lg`}>
              {tool.icon}
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {tool.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
          {tool.link && (
            <Link to={tool.link}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                Découvrir
              </motion.button>
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default ToolsGrid;
