import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './index.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import jQuery from 'jquery'
import './main.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Route exact path='/' component = {Index}/>
    </Router>
  </React.StrictMode>,
)
