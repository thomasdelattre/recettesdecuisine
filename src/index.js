import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './clock'
import registerServiceWorker from './registerServiceWorker';

let name = "Margaux Lecerf";

ReactDOM.render(<App name={name} />, document.getElementById('root'));
registerServiceWorker();
