import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import Report from './report.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Report/>
  </StrictMode>,
)
