import React from 'react'
import png from './assets/Mithun/Contact page illustration.png'

export default function Contact() {
  return (
    <section id="contact">
      <h1 className="text-3xl md:text-5xl text-blue-900 text-center mb-6 font-bold">
        Contact Us
      </h1>

      <p className="text-lg md:text-2xl text-center mb-6">
        Get in touch — your journey starts with a message.
      </p>

      <section
        className="
          bg-blue-100
          pb-10 px-4 mt-10 pt-0
          md:pb-10 md:pt-60 md:px-20 md:mt-40
          flex items-center justify-center relative z-10
        "
      >
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Section */}
          <div className="relative">

            {/* Illustration */}
            <img
              src={png}
              alt="Support Illustration"
              className="
                w-full static
                md:w-140 md:h-130 md:absolute md:z-20 md:bottom-120 md:left-10
              "
            />

            {/* Form */}
            <form className="space-y-4 shadow-2xl p-6 bg-transparent rounded-xl">
              <div>
                <label className="block text-gray-700 mb-1 text-lg md:text-xl">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1 text-lg md:text-xl">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1 text-lg md:text-xl">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Type your message here..."
                  className="
                    w-full rounded-xl border border-gray-500
                    p-4 focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                ></textarea>
              </div>

              <div className="flex justify-center md:block">
                <button
                  type="submit"
                  className="
                    bg-blue-900 text-white px-10 py-3
                    rounded-full text-lg md:text-xl font-bold
                    hover:bg-blue-800 transition cursor-pointer
                    md:ml-50
                  "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Map */}
          <div className="w-full h-64 md:h-100 rounded-xl overflow-hidden shadow-lg mb-10 md:mb-40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.2529033797887!2d77.42894197496095!3d8.17725789185395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f1b45cd91d13%3A0xac8b82d7c1d32953!2sMithun%20Triumph%20Academy!5e0!3m2!1sen!2sin!4v1766758145498!5m2!1sen!2sin"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>
    </section>
  )
}
