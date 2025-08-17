import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-slate-800  text-white'>
          <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

            <div className="logo font-bold text-2xl">
              <span className='text-green-500'>&lt;</span>

             <span>Pass</span> 

              <span className='text-green-500'>OP/&gt;</span>
              
              </div>
            
            <a href="https://github.com/omsaidesaii" target='_blank'>
          <button className='text-white my-5 cursor-pointer border border-gray-200 bg-green-700 rounded-full flex justify-between items-center'>

            <img className='invert  w-10 p-1 ' src="icons/github.svg" alt="" />
            <span className='font-bold px-2 cursor-poi'>Github</span>
          </button>
            </a>

          </div>
        </nav>
    </div>
  )
}

export default Navbar