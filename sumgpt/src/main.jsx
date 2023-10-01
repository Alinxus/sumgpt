import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { store } from './services/store';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-rbrdusjbcya4c4so.us.auth0.com"
    clientId="BdTEX9eqlyyPzIInclEvAuWOuQqItJ6u"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  </Auth0Provider>
)
