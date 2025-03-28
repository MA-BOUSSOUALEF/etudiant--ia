// src/components/FeaturesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, GraduationCap } from 'lucide-react';

function FeaturesSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-24"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
        Pourquoi Choisir ÉtudiantIA ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[{
          icon: <Sparkles className="w-6 h-6 text-primary-600" />,
          title: "Simple et Intuitif",
          description: "Interface claire et facile à utiliser"
        }, {
          icon: <Brain className="w-6 h-6 text-primary-600" />,
          title: "IA Avancée",
          description: "Technologie d'IA de pointe"
        }, {
          icon: <GraduationCap className="w-6 h-6 text-primary-600" />,
          title: "Adapté aux Études",
          description: "Outils conçus pour les étudiants"
        }].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-center"
          >
            <div className="bg-primary-100 dark:bg-primary-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default FeaturesSection;
