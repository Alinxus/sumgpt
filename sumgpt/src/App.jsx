import React from 'react'
import Hero from './components/Hero'
import Demo from './components/Demo'
import './App.css'
import ReactGA from 'react-analytics'
import { Helmet } from "react-helmet"



const App = () => {
  return (
    <>
    <Helmet>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-24E564EY06"></script>
      <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'G-24E564EY06');
    </script>
    </Helmet>
    <main>
        <div className="main">
            <div className="gradient" />
        </div>
        <div className="app">
            <Hero />
            <Demo />
        </div>
    </main>
    </>
  )
}

export default App