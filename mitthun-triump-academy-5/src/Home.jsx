import React from "react"
import home from "./assets/Mithun/Hero section img.jpg"

export default function Home() {
  return (
    <section className=" w-full h-screen overflow-x-hidden items-center relative">
      
      {/* Background Image */}
      <img
        src={home}
        alt="Home"
        className="w-full h-180 md:h-full object-cover"
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300
          flex flex-col justify-center
          px-6 md:ml-10 
          text-left md:text-left
          space-y-6
           mb-10 md:w-1/2 md:h-1/2 md:mt-50 
        "
      >
        <h1 className="text-white text-4xl sm:text-4xl md:text-6xl">
          Smarter Audits,<br />Stronger Futures.
        </h1>

        <p className="text-white text-sm sm:text-lg md:text-2xl max-w-xl mb-15 mx-auto md:mx-0">
          Empowering future accountants and auditors through practical learning,
          data-driven insights, and global standards.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-full w-full sm:w-auto cursor-pointer">
            Enroll Now
          </button>

          <button className="bg-white text-black px-6 py-3 rounded-full border border-white w-full sm:w-auto cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
