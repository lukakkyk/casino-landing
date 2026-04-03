import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TamaguiProvider, Theme } from 'tamagui';
import { tamaguiConfig } from '@casino/config';
import './index.css';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={tamaguiConfig} defaultTheme="app">
        <Theme name="app">
          <App />
        </Theme>
      </TamaguiProvider>
    </QueryClientProvider>
  </React.StrictMode>
);