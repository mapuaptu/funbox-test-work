import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WebFont from 'webfontloader';
import 'normalize.css';
import './main.css';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Roboto:400', 'sans-serif'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
