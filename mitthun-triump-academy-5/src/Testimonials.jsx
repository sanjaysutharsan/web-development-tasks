import React from 'react'
import img from './assets/Mithun/Review img.png'

export default function Testimonials() {
  return (
    <section className=" md:px-0">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl text-blue-900 font-bold text-center mb-4 md:mb-10">
        Testimonials
      </h1>

      <p className="text-lg md:text-3xl text-center mt-4 md:mt-6 mb-8 md:mb-10">
        Hear what our students have say about their journey with us
      </p>

      {/* Cards wrapper */}
      <div className="flex flex-col md:flex-row md:gap-10 md:mx-20">

        {/* Card 1 */}
        <div className="flex justify-center items-center py-16 md:py-20">
          <div className="relative w-full max-w-sm md:max-w-95">

            <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-10">
              <img
                src={img}
                alt="Profile"
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            <div className="bg-blue-100 rounded-3xl pt-24 px-6 md:px-8 pb-8 md:pb-10 text-center shadow-md">
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 md:mb-6">
                Lekshmanan lekshmanan
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Best academy in Kanyakumari district run by talent faculty.
                Best place to move next stage in life.
              </p>
            </div>

          </div>
        </div>

        {/* Card 2 */}
        <div className="flex justify-center items-center py-16 md:py-20">
          <div className="relative w-full max-w-sm md:max-w-95">

            <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-10">
              <img
                src={img}
                alt="Profile"
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            <div className="bg-blue-100 rounded-3xl pt-24 px-6 md:px-8 pb-8 md:pb-10 text-center shadow-md">
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 md:mb-6">
                Lekshmanan lekshmanan
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Best academy in Kanyakumari district run by talent faculty.
                Best place to move next stage in life.
              </p>
            </div>

          </div>
        </div>

        {/* Card 3 */}
        <div className="flex justify-center items-center py-16 md:py-20">
          <div className="relative w-full max-w-sm md:max-w-95">

            <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-10">
              <img
                src={img}
                alt="Profile"
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            <div className="bg-blue-100 rounded-3xl pt-24 px-6 md:px-8 pb-8 md:pb-10 text-center shadow-md">
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 md:mb-6">
                Lekshmanan lekshmanan
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Best academy in Kanyakumari district run by talent faculty.
                Best place to move next stage in life.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
