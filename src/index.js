import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

//react router
import {
  RouterProvider,
} from "react-router-dom";
import router from "./routers/index.js";

//redux
import store from "./store/index.js";
import { Provider } from "react-redux";

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'

//prime react
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';

//nprogress
import "nprogress/nprogress.css";

//toster notification
import ToasterNotification from './components/TosterNotification.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToasterNotification />
      </Provider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
