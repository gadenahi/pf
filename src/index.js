import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css';
import App from './components/js/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
