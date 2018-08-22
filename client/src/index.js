import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WebFont from 'webfontloader';
import 'normalize.css';
import './main.css';
import registerServiceWorker from './registerServiceWorker';
// import { AppContainer } from 'react-hot-loader';

WebFont.load({
  google: {
    families: ['Roboto:400', 'sans-serif'],
  },
});
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// const render = Component => {
//   ReactDOM.render(
//     <AppContainer>
//       <App />
//     </AppContainer>,
//     document.getElementById('root'),
//   );
// };
//
// render(App);
//
// if (module.hot) {
//   module.hot.accept('./App', () => {
//     render(App);
//   });
// }


