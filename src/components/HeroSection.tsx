// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Libérez la puissance de l'IA pour améliorer vos études !
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
        Notre site vous aide à réussir vos études grâce à des outils d'IA simples et puissants.
        Corrigez vos textes, résumez vos cours, résolvez des équations et bien plus encore – gratuitement !
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="animate-pulse-slow bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        Commencer maintenant
      </motion.button>
    </motion.div>
  );
}

export default HeroSection;
