import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import './main.scss';


const rootElement = document.querySelector('#root');

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, rootElement);