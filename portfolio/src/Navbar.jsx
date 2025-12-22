import React from 'react'
import { useState } from 'react'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    
  <header className="flex justify-between p-5 bg-gray-800 text-white ">
    <h1 className="font-bold text-3xl cursor-pointer">Adam's</h1>
    <nav className="hidden md:block cursor-pointer">
    <ul className="flex space-x-4">
      <li><a href="/">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">contact</a></li>
    </ul>
  </nav>
 {toggleMenu && <nav className="block md:hidden fixed top-16 left-0 bg-black w-full p-4 cursor-pointer">
    <ul onClick={() => setToggleMenu(!toggleMenu)}  className="flex-col space-y-1 text-center w-full h-full ">
      <li><a href="/">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">contact</a></li>
    </ul>
  </nav>}
  <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden ">☰</button>
  </header>
  )
      
        
  
}
  

