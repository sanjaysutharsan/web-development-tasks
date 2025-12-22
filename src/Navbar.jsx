import { Button } from "@/components/ui/button"
import logo from './assets/logo.jpeg'
import React from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="w-full ">
      <div className=" flex h-16 items-center justify-between px-4 bg-blue-900">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
        <h1 className="text-xl font-bold text-white">Mithun Triump Academy</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-sm font-medium hover:text-primary text-white">HOME</a>
          <a href="#" className="text-sm font-medium hover:text-primary text-white">ABOUT</a>
          <a href="#" className="text-sm font-medium hover:text-primary text-white">COURSES</a>
          <a href="#" className="text-sm font-medium hover:text-primary text-white">MENTORS</a>
          <a href="#" className="text-sm font-medium hover:text-primary text-white">CONTACT</a>
        </nav>
        <div className="hidden md:flex">
            <button variant="outline" className="text-white border border-white rounded-full px-2 py-1 ">📞 +91 8754004605 <select></select></button>
            <button className="ml-2 text-black bg-white border px-2 py-1 rounded-full border-white">🔍︎ Search</button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="bg-indigo-900 text-xl text-white ">☰</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 h-full px-2">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">COURSES</a>
                <a href="#">MENTORS</a>
                <a href="#">CONTACT</a>

              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}
