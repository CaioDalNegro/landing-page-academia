import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@fontsource/big-shoulders-display/800';
import '@fontsource/big-shoulders-display/900';
import '@fontsource-variable/dm-sans';

import './styles/tokens.css';
import './styles/reset.css';
import './styles/global.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
