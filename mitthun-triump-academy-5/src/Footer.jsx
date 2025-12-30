import React from 'react'
import logo from './assets/Mithun/MtA logo Black bg.jpg'
import gmail from './assets/gmail.png'
import mail from './assets/mail.svg'
import phone from './assets/phoneicon.svg'

import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080e45] text-white">
      <div className="
        max-w-7xl mx-auto px-6 py-16
        flex flex-col md:flex-row
       md:justify-between
      ">

        {/* Left Section */}
        <div className="space-y-6 text-left">
          <div className="flex gap-3 items-center justify-center md:justify-start">
            <img src={logo} className="w-12 h-12 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold uppercase">
              Mithun Triumph Academy
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
            139A, P.W.D. Road, Chidambaranagar Junction,<br />
            Nagercoil - 629002, Kanniyakumari District.
          </p>

          {/* Contact */}
          <div className="space-y-4 text-gray-300">
            <div className="flex gap-3 justify-start">
              <img src={phone} className="w-6 h-6" />
              <div className="text-lg md:text-xl">
                <div>8754004605</div>
                <div>9443204605</div>
              </div>
            </div>

            <div className="text-lg md:text-xl">
              ☎︎ 04652 - 358 489
            </div>

            <div className="flex gap-2 justify-left text-lg md:text-xl break-all">
              <img src={mail} className="w-8 h-8" />
              <span>Triumphacademy2022nagercoil@gmail.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4 justify-start">
            <div className="p-2 border rounded-full hover:bg-blue-700">
              <Instagram size={26} />
            </div>
            <div className="p-2 border rounded-full hover:bg-blue-700">
              <Facebook size={26} />
            </div>
            <div className="p-2 border rounded-full hover:bg-blue-700">
              <img src={gmail} className="w-7 h-7" />
            </div>
            <div className="p-2 border rounded-full hover:bg-blue-700">
              <Youtube size={26} />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="
          flex flex-row
           md:gap-35 gap-30
          mt-12 md:mt-20 ml-10
          text-left
        ">

          {/* Quick Links */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
              Quick links
            </h3>
            <ul className="space-y-3 text-gray-300 text-lg md:text-xl">
              <li><a className="hover:text-blue-400 hover:underline" href="#">Home</a></li>
              <li><a className="hover:text-blue-400 hover:underline" href="#about">About us</a></li>
              <li><a className="hover:text-blue-400 hover:underline" href="#courses">Courses</a></li>
              <li><a className="hover:text-blue-400 hover:underline" href="#mentors">Mentors</a></li>
              <li><a className="hover:text-blue-400 hover:underline" href="#contact">Contact us</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
              Policies
            </h3>
            <ul className="space-y-3 text-gray-300 text-lg md:text-xl">
              <li className="hover:text-blue-400 hover:underline">Privacy policy</li>
              <li className="hover:text-blue-400 hover:underline">Terms of use</li>
              <li className="hover:text-blue-400 hover:underline">Legal information</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="py-6 text-center text-base md:text-lg">
        Copyright © Mithun Triumph Academy {new Date().getFullYear()}
      </div>
    </footer>
  )
}
