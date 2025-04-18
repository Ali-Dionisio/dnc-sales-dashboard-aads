import React from 'react'
import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {  GloboStyle, lighTheme } from './styles/'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={lighTheme}>
      <GloboStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
