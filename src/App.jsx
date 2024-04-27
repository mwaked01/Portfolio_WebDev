import { useState } from 'react'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Hi 👋</h1>
        <h1>I'm Mohamed Waked</h1>
        <Navbar />
      </header>
      <section id="ABOUT">
        <h2>ABOUT ME</h2>
        <p>
          Motivated professional who is eager to
          transition into a career in Web Development.
          Highly motivated self starter with a strong passion
          for programming. Committed to continuous learning
          and staying up-to-date with the latest industry trends.
          Looking forward to embracing new challenges.
        </p>
      </section>
      <Skills />
    </>
  )
}

export default App
