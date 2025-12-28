import { useState } from 'react'
import React from 'react'
import './App.css'
import './index.css'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Courses from './Courses.jsx'
import Statcards from './Statcards.jsx'
import Mentors from './Mentors.jsx'
import Testimonials from './Testimonials.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Statcards />
      <Courses />
      <Mentors />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
