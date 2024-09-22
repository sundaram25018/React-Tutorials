import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navebar from './components/Navebar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navebar />
  </StrictMode>,
)
