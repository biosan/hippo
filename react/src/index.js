// >>> React stuff...
import React from 'react';
import ReactDOM from 'react-dom';

// >>> Style
// import 'tailwindcss/dist/base.min.css';
// import 'tailwindcss/dist/tailwind.min.css';
// import 'tailwindcss/dist/utilities.min.css';
// import 'tailwindcss/dist/components.css';
import 'marx-css/css/marx.min.css';
import './style/index.css';

// >>> Components & Co.
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

