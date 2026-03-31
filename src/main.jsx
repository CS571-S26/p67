import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import QuestionRouting from './QuestionRouting.jsx'

createRoot(document.getElementById('root')).render(
  <QuestionRouting/>
)
