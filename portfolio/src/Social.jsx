import React from 'react'

export default function Social() {
  return (
    <div className="bg-gray-900  py-10 px-10 cursor-pointer">
        <ul className=" md:flex flex-row justify-between space-x-10 bg-gray-600 text-white px-10 py-6 shadow -lg rounded-lg grid grid-cols-2">          
               <li><a href="https://www.firefox.com/en-US/more/what-is-a-browser/" className="text-3xl">🌐</a>Browser</li>
            <li><a href="https://www.facebook.com/home.php" className="text-4xl">ⓕ</a>Facebook</li>
            <li><a href="https://x.com/?lang=en" className="text-4xl">𝕏</a>Twitter</li>
            <li><a href="https://play.google.com/store/apps/details?id=com.google.android.gm&hl=en_IN" className="text-4xl">✉︎</a>GMail</li>
        </ul>
    </div>
  )
}
