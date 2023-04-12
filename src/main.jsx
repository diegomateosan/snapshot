import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SearchProvider } from './context/search'
import { ImagesProvider } from './context/images'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ImagesProvider>
    <SearchProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SearchProvider>
  </ImagesProvider>
)
