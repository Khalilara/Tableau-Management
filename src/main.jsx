import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EditableTable from './components/tableau.jsx'
import Navbar from './components/navbar.jsx'
import Tab2 from './components/tableu2.jsx'
import Welcome from './pages/welcome.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <App />
  </StrictMode>,
)
