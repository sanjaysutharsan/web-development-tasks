import React from 'react'
import aboutImage from './assets/Mithun/About page img.jpg'

export default function About() {
  return (
    <section className="mt-10 mb-10 md:mt-10 md:mb-10" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
       <h2 className="text-4xl md:text-5xl font-bold  mb-10 text-blue-900 md:hidden">
            About Us
          </h2>
        {/* IMAGE SECTION */}
        <div className="text-center md:ml-20 md:mt-30 md:mr-20 md:mb-30 relative">

          <section className="relative w-fit mx-auto mt-10 md:mt-20">

            {/* SVG 1 */}
            <svg
              className=" absolute -top-16 left-60.5 z-20 md:hidden"
              width="155"
              height="155"
              viewBox="0 0 220 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M107.162 97.998V145.001L58.5 168.773L9.83789 145.001V97.998L58.5 74.2256L107.162 97.998Z" fill="#000080" fillOpacity="0.8" stroke="white" strokeWidth="4"/>
              <path d="M159.096 26.0029V72.9961L110 96.7773L60.9043 72.9961V26.0029L110 2.22168L159.096 26.0029Z" fill="#000080" fillOpacity="0.8" stroke="white" strokeWidth="4"/>
              <path d="M209.962 98.2568V145.742L160 169.779L110.038 145.742V98.2568L160 74.2197L209.962 98.2568Z" fill="#000080" fillOpacity="0.8" stroke="white" strokeWidth="4"/>
            </svg>
            <svg
              className=" md:block absolute md:-top-20 md:left-79 z-20 hidden"
              width="220"
              height="180"
              viewBox="0 0 220 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M107.162 97.998V145.001L58.5 168.773L9.83789 145.001V97.998L58.5 74.2256L107.162 97.998Z" fill="#000080" fillOpacity="0.8" stroke="white" strokeWidth="4"/>
              <path d="M159.096 26.0029V72.9961L110 96.7773L60.9043 72.9961V26.0029L110 2.22168L159.096 26.0029Z" fill="#000080" fillOpacity="0.8" stroke="white" strokeWidth="4"/>
              <path d="M209.962 98.2568V145.742L160 169.779L110.038 145.742V98.2568L160 74.2197L209.962 98.2568Z" fill="#000080" fillOpacity="0.8" stroke="white" strokeWidth="4"/>
            </svg>

            {/* IMAGE */}
            <img
              src={aboutImage}
              alt="About Us"
              className="relative z-10 pt-5 w-80 md:w-600 h-auto md:h-180"
            />

            {/* SVG 2 – hide */}
            <svg
              className=" absolute right-39.5 top-105 z-20 md:hidden"
              width="180"
              height="180"
              viewBox="0 0 264 218"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M130.336 93.8888L78.3558 123.63L27.1713 91.4635L27.1709 45.5686L79.9558 14.6234L130.336 45.4325L130.336 93.8888Z" fill="#000080" fillOpacity="0.8" stroke="white" strokeWidth="4"/>
              <path d="M235.797 94.0944L183.817 123.835L132.632 91.669L132.632 45.7742L185.417 14.829L235.798 45.638L235.797 94.0944Z" fill="#000080" fillOpacity="0.8" stroke="white" strokeWidth="4"/>
              <path d="M183.509 172.842L131.53 202.583L80.3453 170.417L80.3449 124.522L133.13 93.5769L183.51 124.386L183.509 172.842Z" fill="#000080" fillOpacity="0.8" stroke="white" strokeWidth="4"/>
            </svg>
            <svg
              className="md:block absolute right-48 top-157 z-20 hidden"
              width="264"
              height="218"
              viewBox="0 0 264 218"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M130.336 93.8888L78.3558 123.63L27.1713 91.4635L27.1709 45.5686L79.9558 14.6234L130.336 45.4325L130.336 93.8888Z" fill="#000080" fillOpacity="0.8" stroke="white" strokeWidth="4"/>
              <path d="M235.797 94.0944L183.817 123.835L132.632 91.669L132.632 45.7742L185.417 14.829L235.798 45.638L235.797 94.0944Z" fill="#000080" fillOpacity="0.8" stroke="white" strokeWidth="4"/>
              <path d="M183.509 172.842L131.53 202.583L80.3453 170.417L80.3449 124.522L133.13 93.5769L183.51 124.386L183.509 172.842Z" fill="#000080" fillOpacity="0.8" stroke="white" strokeWidth="4"/>
            </svg>

          </section>
        </div>

        {/* TEXT SECTION */}
        <div className="text-center md:text-left md:mr-20 md:mb-20 md:ml-10 px-4 md:px-0">
          <h2 className=" hidden md:block text-3xl md:text-5xl font-bold md:ml-30 md:mb-20 text-blue-900">
            About Us
          </h2>

          <p className="text-gray-600 leading-relaxed text-base md:text-3xl mt-5 mt-20">
            <span className="font-semibold text-gray-800 text-lg md:text-4xl">
              Mithun Triumph Academy
            </span>{" "}
            is a leading institute in Nagercoil offering professional training
            for CA, CMA, ACCA, and CS aspirants. With expert guidance and
            practical learning methods, the academy helps students build
            strong foundations and achieve success in their accounting careers.
          </p>
        </div>

      </div>
    </section>
  )
}
