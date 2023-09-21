import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './index.jsx'
import './main.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Route exact path='/' component = {Index}/>
    </Router>
  </React.StrictMode>,
)
