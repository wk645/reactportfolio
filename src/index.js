import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
// import '../semantic/dist/semantic.min.css';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();