import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Importer le BrowserRouter
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>  {/* Ajouter le BrowserRouter ici */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
