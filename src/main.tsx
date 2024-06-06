import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'

const list = ["Goku", "Tanjiro", "Eren"];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App array={list} />
  </React.StrictMode>,
)
