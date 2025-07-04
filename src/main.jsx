import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StoreContextProvider from './context/StoreContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/FuULLSTACK-WEBSITE-BHARATCRAFTS">
        <StoreContextProvider>
            <App />
        </StoreContextProvider>
    </BrowserRouter>


)
