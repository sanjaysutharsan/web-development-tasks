import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Social from './Social'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <>
      <Navbar /> 
      <Hero />
      <Social />
      <Projects />
      <Contact />
      <Footer />
  </>
  )
}

export default App
