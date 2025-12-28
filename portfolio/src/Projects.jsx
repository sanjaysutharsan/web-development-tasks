import React from 'react'
import img1 from './assets/img1.jpeg'
import img2 from './assets/img2.webp'
import img3 from './assets/img3.avif'

export default function Projects() {
  return (
    <section className="flex flex-col md:flex-row bg-gray-700  px-10 justify-between text-white py-6 cursor-pointer" id='projects'>
        <div className="md:w-1/2 py-25 px-10">
            <h1 className="text-5xl text-center py-10 text-white">What Can  Do For <br/>Your Needs</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis totam reiciendis ipsam obcaecati cupiditate. Debitis obcaecati, nesciunt similique, repellendus itaque provident accusamus voluptate iste quo, illum dolorum nulla asperiores? Placeat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste saepe inventore, quos, soluta assumenda voluptatem voluptate repellendus molestiae, ipsa nam sit quae doloremque neque ullam qui dolorem id veniam!</p>
        </div>
        <div className="py-10 md:w-1/2 shadow-lg bg-gray-500 rounded-lg px-10">
            <div className="flex-col justify-left space-y-6 shadow-lg bg-gray-850">
              <p className="text-4xl">Projects</p>
            <div className="flex flex-col md:flex-row space-x-2 shadow-lg bg-gray-900 rounded-lg pl-4">
            <img src={img1} alt="projectimage" className="rounded-lg h-[150px] w-[230px]" />
            <p className="text-2xl">UI/UX Design<br/><p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nam esse animi, eos cum sed consectetur corporis pariatur exercitationem fugiat assumenda dolorem aut unde. Error quam ipsa ullam eveniet voluptates.</p>
            </p>
            </div>
            <div className="flex flex-col md:flex-row space-x-2 shadow-lg bg-gray-900 rounded-lg pl-4">
            <img src={img2} alt="projectimage" className=" rounded-lg h-[150px] w-[230px]" />
            <p className="text-2xl">Front End Web Develop<br/><p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi excepturi nostrum ad cum consectetur sapiente sequi dolorem libero ipsa temporibus odit iusto, blanditiis voluptatibus consequuntur est eum molestias, obcaecati consequatur!</p>
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-x-2 shadow-lg bg-gray-900 rounded-lg pl-4">
            <img src={img3} alt="projectimage" className="
            \ rounded-lg h-[150px]  w-[230px]" />
            <p className="text-2xl">Mobile App Develop<br/><p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nulla reprehenderit mollitia impedit quibusdam facere minus adipisci. Impedit doloremque commodi eos unde autem. Accusamus modi, eum ipsa porro commodi distinctio.</p>
            </p>
            </div>


        </div>
      </div>
    </section>


    
  )
}
