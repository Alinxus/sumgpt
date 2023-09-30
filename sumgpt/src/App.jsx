import React from 'react'
import Hero from './components/Hero'
import Demo from './components/Demo'
import './App.css'
import ReactGA from 'react-analytics'
import { Helmet } from "react-helmet"



const App = () => {
  return (
    <>
    <head>
    <Helmet>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-F5E92MCQSE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'G-F5E92MCQSE');
</script>

    </Helmet>
    </head>
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