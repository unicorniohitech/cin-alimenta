import React from 'react'

import ReactDOM from 'react-dom/client'

// import App from './App'
// import Home from './pages/Home'
import SignIn from './pages/SignIn'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
)
