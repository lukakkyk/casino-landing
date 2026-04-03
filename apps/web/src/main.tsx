import React from 'react';
import ReactDOM from 'react-dom/client';
import { TamaguiProvider, Theme } from 'tamagui';
import { tamaguiConfig } from '@casino/config';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TamaguiProvider config={tamaguiConfig as any} defaultTheme="app">
      <Theme name="app">
        <App />
      </Theme>
    </TamaguiProvider>
  </React.StrictMode>
);