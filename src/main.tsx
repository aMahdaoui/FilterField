import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { initI18n } from './config/i18n'
import './index.css'

// initI18n('fr')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
