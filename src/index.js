// react has webpack underneath the hood --> able to use imports
import React from 'react';
import ReactDOM from 'react-dom';

// can add css to each diff component
import './index.css';

// automatically assumes .js if no extension indicated
import App from './containers/App';

// ServiceWorker: new feature that allows our apps to become faster and potentially
// work offline
// import registerServiceWorker from './registerServiceWorker';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
