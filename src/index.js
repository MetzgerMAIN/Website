import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './modul.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak'; 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById('root'));

const initOptions = {  // Hier Klammern entfernt und auf normale Objektklammern geändert
  onLoad: 'check-sso',
  checkLoginIframe: false
};

root.render(
  <ReactKeycloakProvider authClient={keycloak} initOptions={initOptions} >
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </React.StrictMode>
  </ReactKeycloakProvider>
);

reportWebVitals();
