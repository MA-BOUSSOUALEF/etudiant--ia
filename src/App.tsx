import React, { useState, useEffect } from 'react';
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ToolsGrid from './components/ToolsGrid';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SpellChecker from "./pages/spellChecker";
import Summarizer from './pages/Summarizer';
import Paraphraser from './pages/paraphraser';
import MathSolver from './pages/mathSolver'; // Ensure you have a MathSolver component
import Translator from './pages/translator';
import TextAnalyser from './pages/textAnalyser';
import { Routes, Route, Link } from 'react-router-dom';  // Importer Routes, Route, Link
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' ||
        (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('darkMode', darkMode.toString());
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [darkMode, mounted]);

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: darkMode ? "#ffffff" : "#000000"
            },
            opacity: {
              value: 0.2
            },
            size: {
              value: 3
            },
            move: {
              enable: true,
              speed: 1
            }
          }
        }}
        className="absolute inset-0"
      />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Déplacement des routes dans le BrowserRouter */}
      <Routes>
        {/* La route d'accueil */}
        <Route path="/" element={<HomePage />} />
        
        {/* Autres routes */}
        <Route path="/grammar" element={<TextAnalyser />} />
        <Route path="/summary" element={<Summarizer />} />
        <Route path="/mathSolver" element={<MathSolver />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/analyzer" element={<SpellChecker />} />
        <Route path="/rewriter" element={<Paraphraser />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
