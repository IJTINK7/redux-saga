import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCdPw_YRJry_dULJZP23M-0D2Dg5zb8HgQ",
    authDomain: "testproject-4c32b.firebaseapp.com",
    projectId: "testproject-4c32b",
    storageBucket: "testproject-4c32b.appspot.com",
    messagingSenderId: "192725407914",
    appId: "1:192725407914:web:83fb4e3534470c667798d3",
    measurementId: "G-PR6E5MFV6X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics.app.options.apiKey)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
