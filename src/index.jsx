import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router}  from 'react-router-dom'
import App from './components/App'

const rootElement = ReactDOM.createRoot(document.getElementById('root'))  
rootElement.render(
    <Router>
        <App />
    </Router>
)