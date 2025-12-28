import React from 'react'
import img1 from './assets/Mithun/VPV sir img.jpg'
import img2 from './assets/Mithun/VPV sir_s wife img.jpg'
import img3 from './assets/Mithun/Sree devi img.jpg'
import img4 from './assets/Mithun/S. mathan img.jpg'
import img5 from './assets/Mithun/S.Muthuswamy img.jpg'

export default function Mentors() {
  return (
    <section id="mentors" className="px-4 md:px-0 ">

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl text-blue-900 font-bold text-center">
        Our Academic Experts
      </h1>

      <p className="text-lg md:text-3xl text-center mt-4 md:mt-6 mb-10">
        Learn from certified experts with real-world experience, helping students build the
        skills and confidence to succeed.
      </p>

      <section className="bg-blue-100 py-12 md:py-16 md:mt-20 mb-25 md:mx-15 md:pb-35 pb-35">
        <div className="max-w-7xl mx-auto">

          {/* First 3 cards */}
          <div className="grid gap-30 sm:grid-cols-2 lg:grid-cols-3 place-items-center">

            {/* Card 1 */}
            <div className="relative flex flex-col items-center">
              <div className="w-56 h-72 rounded-2xl overflow-hidden bg-white shadow-md">
                <img src={img1} alt="Dr. V. P. Vignesh Kumar" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-20 w-64 bg-white border-2 border-blue-900 rounded-xl px-4 py-3 text-center shadow-lg">
                <h3 className="text-lg font-semibold text-blue-900">
                  Dr. V. P. Vignesh Kumar
                </h3>
                <p className="text-base md:text-xl font-bold text-blue-900 mt-1">
                  FOUNDER & CEO
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative flex flex-col items-center">
              <div className="w-56 h-72 rounded-2xl overflow-hidden bg-white shadow-md">
                <img src={img2} alt="Mrs. R. Kolammal" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-20 w-64 bg-white border-2 border-blue-800 rounded-xl px-4 py-3 text-center shadow-lg">
                <h3 className="text-lg font-semibold text-blue-900">
                  Mrs. R. Kolammal
                </h3>
                <p className="text-base md:text-xl font-bold text-blue-900 mt-1">
                  TREASURER
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative flex flex-col items-center">
              <div className="w-56 h-72 rounded-2xl overflow-hidden bg-white shadow-md">
                <img src={img3} alt="Dr. V. Sree Devi" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-20 w-64 bg-white border-2 border-blue-800 rounded-xl px-4 py-3 text-center shadow-lg">
                <h3 className="text-lg font-semibold text-blue-900">
                  Dr. V. Sree Devi
                </h3>
                <p className="text-base md:text-xl font-bold text-blue-900 mt-1">
                  SECRETARY
                </p>
              </div>
            </div>
          </div>

          {/* Last 2 cards */}
          <div className="flex flex-col md:flex-row justify-center gap-30 md:gap-40 mt-32 items-center">

            {/* Card 4 */}
            <div className="relative flex flex-col items-center">
              <div className="w-56 h-72 rounded-2xl overflow-hidden bg-white shadow-md">
                <img src={img4} alt="CMA. S. Antony Mathan" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-20 w-72 bg-white border-2 border-blue-800 rounded-xl px-4 py-3 text-center shadow-lg">
                <h3 className="text-lg font-semibold text-blue-900">
                  CMA. S. Antony Mathan
                </h3>
                <p className="text-base md:text-xl font-bold text-blue-900 mt-1">
                  TRUST MEMBER & COST CONSULTANT
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="relative flex flex-col items-center">
              <div className="w-56 h-72 rounded-2xl overflow-hidden bg-white shadow-md">
                <img src={img5} alt="Mr. S. Muthuswamy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-20 w-72 bg-white border-2 border-blue-800 rounded-xl px-4 py-3 text-center shadow-lg">
                <h3 className="text-lg font-semibold text-blue-900">
                  Mr. S. Muthuswamy
                </h3>
                <p className="text-base md:text-xl font-bold text-blue-900 mt-1">
                  TRUST MEMBER & <br /> COST ACCOUNTANT
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </section>
  )
}
