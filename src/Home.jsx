import React from 'react'
import home from './assets/home.jpg'

export default function Home() {
  return (
    <div> 
        <img src={home} alt="Home" className=" absolute w-full h-full object-cover" />
        <div className="absolute flex-col top-1/3 ml-20 space-y-8">
        <h1 className=" text-white text-6xl">Smarter Audits,<br/>Stronger Futures.</h1>
        <p className="text-white text-2xl">
            Empowering future accountants and auditors <br/>through practical
            learning, data-driven insights, and<br/> global standards.
          </p>
          <div className="flex">
          <button className="bg-blue-900 text-white px-4 py-2 rounded-full">Enroll Now</button>
          <button className="ml-2 text-black bg-white border px-4 py-2 rounded-full border-white">Contact Us</button>
          </div>
          </div>
    </div>
  )
}
    

