import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { TaskContextProvider } from "./api/Context.api.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <TaskContextProvider>
    <App/>
  </TaskContextProvider>
)
