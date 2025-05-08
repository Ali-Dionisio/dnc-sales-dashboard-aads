import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AppThemeProvider } from './contexts/AppThemeContext.tsx'
import { GloboStyle } from './styles/globalStyle.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <GloboStyle />
      <App />
    </AppThemeProvider>
  </React.StrictMode>
)
