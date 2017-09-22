/* eslint-env browser */
import 'babel-regenerator-runtime';
import React    from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App      from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
