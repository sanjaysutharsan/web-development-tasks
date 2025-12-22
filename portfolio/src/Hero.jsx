import React from 'react'
import HeroImg from './assets/hero.webp'

export default function Hero() {
  return(
   <section className="flex flex-col md:flex-row bg-gray-900 px-10 justify-between text-white py-6 cursor-pointer">
   

    <div className="md:w-1/3  items-center py-10">
        <h1 className="text-6xl text-red border-4xl">I'm<br/><span className='text-red'>James Adams</span></h1><br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus atque saepe, quis natus vel officiis nihil ex enim? Voluptates ratione aliquid accusamus incidunt dolor? Facere, provident unde! Incidunt, odio.</p>
        </div>
        <img src ={HeroImg} alt="heroimage" className="md:w-1/4 rounded-full"/>
        <div className="md:w-1/3">
        <h2 className="text-2xl">Services</h2><br/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non optio facere ratione voluptate, labore quia, aspernatur, ut accusantium dolorum quos obcaecati quasi dicta voluptas perspiciatis illum totam vel dolor. Quam.</p>
        </div>
  </section>
  )
  
}
