import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import hello from './hello'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<hello />, document.getElementById('root'));
registerServiceWorker();
