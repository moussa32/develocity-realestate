import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/Roboto/Roboto-Regular.ttf';
import './fonts/Roboto/Roboto-Medium.ttf';
import './fonts/Roboto/Roboto-Bold.ttf';
import './fonts/Roboto/Roboto-Black.ttf';
import './fonts/Roboto/Roboto-Light.ttf';
import { Provider } from 'react-redux'
import {store} from '../src/pages/store/store'



import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
