import React from 'react';
import HeroSection from './HeroSection';
import ToolsGrid from './ToolsGrid';
import FeaturesSection from './FeaturesSection';

const HomePage = () => {
  return (
    <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <HeroSection />
      <ToolsGrid />
      <FeaturesSection />
    </main>
  );
};

export default HomePage;
