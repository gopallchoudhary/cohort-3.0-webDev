import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SideBarContextProvider from './context/SideBarContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SideBarContextProvider>
      <App />
    </SideBarContextProvider>
  </StrictMode>,
)
