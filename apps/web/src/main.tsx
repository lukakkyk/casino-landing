import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TamaguiProvider } from 'tamagui'
import { tamaguiConfig } from '../../../packages/config/src/tamagui.config'
import '@tamagui/core/reset.css'
import './index.css'
import App from './App'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={tamaguiConfig} defaultTheme="app">
        <App />
      </TamaguiProvider>
    </QueryClientProvider>
  </React.StrictMode>
)