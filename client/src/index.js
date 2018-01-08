import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
