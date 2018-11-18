import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

import './index.css';

const app = <App />;

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
