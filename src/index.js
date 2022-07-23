import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import './Nav/navbar.css';
import './home/homestyle.css';
import './about/aboutStyle.css';
import './skills/skillsStyle.css';
import './projects/projectsStyle.css';
import './footer/footerStyle.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'jquery/dist/jquery.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
