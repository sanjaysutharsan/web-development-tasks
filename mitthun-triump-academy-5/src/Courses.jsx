import React from 'react'
import img1 from './assets/Mithun/Ca course img.jpg'
import img2 from './assets/Mithun/Cma course img.jpg'
import img3 from './assets/Mithun/Acca course img.jpg'
import img4 from './assets/Mithun/Mba course img.jpg'
import img5 from './assets/Mithun/Mcom course img.jpeg'
import img6 from './assets/Mithun/Bcom course img.jpg'
import img7 from './assets/Mithun/Bba course img.jpg'
import img8 from './assets/Mithun/11 th coaching.jpg'
import img9 from './assets/Mithun/12th coaching.jpg'
import img10 from './assets/Mithun/income tax class.jpg'

export default function Courses() {
  return (
    <section id="courses" className="px-4 md:px-0 mx-10">

      <h1 className="text-4xl md:text-5xl text-blue-900 font-bold text-center">
        Our Courses
      </h1>

      <p className="text-2xl md:text-3xl text-center mt-6 mb-15">
        Empowering students with expert training in commerce, finance,
        <br className="hidden md:block" /> and professional studies.
      </p>

      {/* Coaching Classes */}
      <h2 className="text-3xl md:text-4xl text-blue-800 font-semibold text-center mb-10">
        Coaching Classes
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-10 mb-15 w-full">

        <div className="border-2 border-gray-400 bg-blue-100 rounded-lg w-full md:w-100 md:h-94.5 h-77.5 text-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <img src={img1} className="w-full h-48 md:h-65 object-cover mb-4 rounded-md" />
          <h2 className="text-2xl mb-4 font-semibold text-blue-900">CA course</h2>
          <button className="bg-blue-900 text-xl font-bold text-white px-13 py-3 rounded-full">For Enquiry</button>
        </div>

        <div className="border-2 border-gray-400 bg-blue-100 rounded-lg w-full md:w-100 md:h-94.5 h-77.5 text-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <img src={img2} className="w-full h-48 md:h-65 object-cover mb-4 rounded-md" />
          <h2 className="text-2xl mb-4 font-semibold text-blue-900">CMA course</h2>
          <button className="bg-blue-900 text-xl font-bold text-white px-13 py-3 rounded-full">For Enquiry</button>
        </div>

        <div className="border-2 border-gray-400 bg-blue-100 rounded-lg w-full md:w-100 md:h-94.5 h-77.5 text-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <img src={img3} className="w-full h-48 md:h-65 object-cover mb-4 rounded-md" />
          <h2 className="text-2xl mb-4 font-semibold text-blue-900">ACCA course</h2>
          <button className="bg-blue-900 text-xl font-bold text-white px-13 py-3 rounded-full">For Enquiry</button>
        </div>

      </div>

      {/* Management Courses */}
      <h2 className="text-3xl md:text-4xl text-blue-800 font-semibold text-center mb-10">
        Management Courses
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-5 mb-15 w-full">

        <div className="border-2 border-gray-400 bg-blue-100 rounded-lg w-full md:w-80 md:h-102.5 h-83.5 text-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <img src={img4} className="w-full h-48 md:h-65 object-cover mb-4 rounded-md" />
          <h2 className="text-xl md:text-2xl mb-4 font-semibold text-blue-900">
            Master of Business Administration course (MBA)
          </h2>
          <button className="bg-blue-900 text-xl font-bold text-white px-10 py-3 rounded-full">For Enquiry</button>
        </div>

        <div className="border-2 border-gray-400 bg-blue-100 rounded-lg w-full md:w-80 md:h-102.5 h-76.5 text-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <img src={img5} className="w-full h-48 md:h-65 object-cover mb-4 rounded-md" />
          <h2 className="text-xl md:text-2xl mb-4 font-semibold text-blue-900">
            Master of Commerce course (M.Com)
          </h2>
          <button className="bg-blue-900 text-xl font-bold text-white px-10 py-3 rounded-full">For Enquiry</button>
        </div>

        <div className="border-2 border-gray-400 bg-blue-100 rounded-lg w-full md:w-80 md:h-102.5 h-76.5 text-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <img src={img6} className="w-full h-48 md:h-65 object-cover mb-4 rounded-md" />
          <h2 className="text-xl md:text-2xl mb-4 font-semibold text-blue-900">
            Bachelor of Commerce course (B.Com)
          </h2>
          <button className="bg-blue-900 text-xl font-bold text-white px-10 py-3 rounded-full">For Enquiry</button>
        </div>

        <div className="border-2 border-gray-400 bg-blue-100 rounded-lg w-full md:w-80 md:h-102.5 h-83.5 text-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <img src={img7} className="w-full h-48 md:h-65 object-cover mb-4 rounded-md" />
          <h2 className="text-xl md:text-2xl mb-4 font-semibold text-blue-900">
            Bachelor of Business Administration course (BBA)
          </h2>
          <button className="bg-blue-900 text-xl font-bold text-white px-10 py-3 rounded-full">For Enquiry</button>
        </div>

      </div>

      {/* School Coaching */}
      <h2 className="text-3xl md:text-4xl text-blue-800 font-semibold text-center mb-15">
        Accountancy & Maths coaching<br className="md:hidden" />
        <span className="text-xl md:text-2xl font-soft">(State board & CBSE)</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-10 mb-15 w-full">

        <div className="border-2 border-gray-400 bg-blue-100 rounded-lg w-full md:w-100 md:h-94.5 h-76.5 text-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <img src={img8} className="w-full h-48 md:h-65 object-cover mb-4 rounded-md" />
          <h2 className="text-xl md:text-2xl mb-4 font-semibold text-blue-900">
            Higher Secondary First Year (+1)
          </h2>
          <button className="bg-blue-900 text-xl font-bold text-white px-13 py-3 rounded-full">For Enquiry</button>
        </div>

        <div className="border-2 border-gray-400 bg-blue-100 rounded-lg w-full md:w-100 md:h-94.5 h-76.5 text-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <img src={img9} className="w-full h-48 md:h-65 object-cover mb-4 rounded-md" />
          <h2 className="text-xl md:text-2xl mb-4 font-semibold text-blue-900">
            Higher Secondary Second Year (+2)
          </h2>
          <button className="bg-blue-900 text-xl font-bold text-white px-13 py-3 rounded-full">For Enquiry</button>
        </div>

        <div className="border-2 border-gray-400 bg-blue-100 rounded-lg w-full md:w-100 md:h-94.5 h-76.5 text-center hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <img src={img10} className="w-full h-48 md:h-65 object-cover mb-4 rounded-md" />
          <h2 className="text-xl md:text-2xl mb-4 font-semibold text-blue-900">
            Special Classes for Income Tax
          </h2>
          <button className="bg-blue-900 text-xl font-bold text-white px-13 py-3 rounded-full">For Enquiry</button>
        </div>

      </div>

    </section>
  )
}
