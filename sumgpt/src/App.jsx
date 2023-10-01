import React from 'react'
import Hero from './components/Hero'
import Demo from './components/Demo'
import Login from './Login'
import { useAuth0 } from '@auth0/auth0-react';

import './App.css'


const App = () => { 
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Oops... {error.message}</div>;
    }
  
    if (isAuthenticated) {
      return (
        <main>
        <div className="main">
            <div className="gradient" />
        </div>
        <div className="app">
            <Hero />
            <Demo />
        </div>
    </main>

      );
    } else {
      return <button onClick={() => loginWithRedirect()}>Log in</button>;
    }
  }



export default App