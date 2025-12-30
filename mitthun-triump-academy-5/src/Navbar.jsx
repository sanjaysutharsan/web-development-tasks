import { useState } from "react"
import { Button } from "@/components/ui/button"
import logo from "./assets/Mithun/MtA logo Black bg.jpg"
import icon from "./assets/phoneicon.svg"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full fixed top-0 z-50 ">
      <div className="flex h-16 items-center justify-between px-4 bg-[#080e45] md:h-16">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className=" h-9 w-9 rounded-full"
          />
          <h1 className="text-white font-semibold text-base sm:text-lg">
            Mithun Triumph Academy
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-sm text-white hover:text-blue-400 hover:underline">HOME</a>
          <a href="#about" className="text-sm text-white hover:text-blue-400 hover:underline">ABOUT</a>
          <a href="#courses" className="text-sm text-white hover:text-blue-400 hover:underline">COURSES</a>
          <a href="#mentors" className="text-sm text-white hover:text-blue-400 hover:underline">MENTORS</a>
          <a href="#contact" className="text-sm text-white hover:text-blue-400 hover:underline">CONTACT</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <button className="flex items-center gap-1 text-white border border-white px-3 py-1 rounded-full text-sm cursor-pointer">
            <img src={icon} alt="Phone" className="h-4 w-4" />
            +91 8754004605 ⮟
          </button>

          <button className="bg-white text-black px-3 py-1 rounded-full text-sm cursor-pointer">
            🔍︎ Search
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="bg-transparent text-white text-2xl"
              >
                ☰
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 pl-3">
              <nav className="flex flex-col gap-6 mt-12 text-base font-medium">
                <button className="bg-black text-white pr-50 py-2 rounded-md text-sm cursor-pointer">
                    🔍︎ Search
                   </button>
                <a href="#" onClick={() => setOpen(false)} className="hover:text-blue-500">HOME</a>
                <a href="#about" onClick={() => setOpen(false)} className="hover:text-blue-500">ABOUT</a>
                <a href="#courses" onClick={() => setOpen(false)} className="hover:text-blue-500">COURSES</a>
                <a href="#mentors" onClick={() => setOpen(false)} className="hover:text-blue-500">MENTORS</a>
                <a href="#contact" onClick={() => setOpen(false)} className="hover:text-blue-500">CONTACT</a>

                <div className="mt-6 border-t pt-4 space-y-1">
                  <Button variant="outline" className="w-full flex gap-2 bg-black text-white">
                    <img src={icon} className="h-4 w-4" />
                    +91 8754004605 ⮟
                  </Button>
                   
                </div>

              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}
