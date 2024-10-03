import React from 'react'
import logout from "../Assests/logout.png";

function Header() {
  return (
    <div className='text-white text-2xl  grid grid-cols-3 flex-wrap'>
        <div className='text-left m-4 lg:2xl md:xl sm:xl'><span className='text-6xl font-mono '>A</span><span>d</span><span className='lg:text-6xl md:text-3xl sm:text-2xl text-blue-700'>S</span><span className='lg:text-5xl md:text-3xl sm:text-2xl font-serif text-purple-600'>p</span>a<span>r</span><span>k</span></div>
        <div className='text-center lg:text-5xl md:text-3xl sm:text-2xl m-3 '>Ad <span className='lg:text-6xl md:text-4xl sm:text-2xl text-blue-600 font-mono py-2 font-semibold'>Generator</span> </div>
        <div className='flex justify-end'><img  className ="w-10 h-8 m-4 mx-5 text-white" src={`${logout}`} alt="logout "/></div>
    </div>
  )
}

export default Header;
