import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
//Now we can use our provider after we implement the env variable
import { Auth0Provider } from '@auth0/auth0-react';

//Create two variable to store our environmental variable
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render();  React 17

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

//We will be able to access all Auth0Provider properties within our app
//Because Auth0Provider component uses React context
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
);



