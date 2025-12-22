import React from 'react'

export default function Contact() {
  return (
    <section className="flex flex-col bg-gray-700  px-10 justify-centre text-white py-6 cursor-pointer" id='contact'>
    <div className=" flex flex-col w-full py-30 bg-gray-900 text-white rounded-lg px-10 pt-15 pb-15 item-center justify centre shadow-lg">
        <div className="text-center space-y-3 justify-center items-center">
        <h1 className="text-3xl">Contact</h1>
        <p>If you want to discuss more in detail,please contact me.</p>
        <p><span className="font-bold">Email: </span>jamesadames@gmail.com</p>
        <p><span className="font-bold">Phone: </span>+91 9876543210</p>
        </div>
    </div>
    </section>
  )
}
