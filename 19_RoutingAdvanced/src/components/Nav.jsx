import React from 'react'
import {Link  } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='bg-cyan-600 flex justify-between items-center py-6'>
      <div className='flex gap-2 px-4'>
        <img className='w-10 h-9 rounded' src="https://img.magnific.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        <h2 className='font-bold text-2xl'>Ali-WebDesigner</h2>
      </div>
      <div className='flex gap-15 px-10 '>
        <Link className='font-bold text-lg hover:scale-95 hover:text-blue-600' to='/'>Home</Link>
        <Link className='font-bold text-lg hover:scale-95 hover:text-blue-600' to='/about'>About</Link>
        <Link className='font-bold text-lg hover:scale-95 hover:text-blue-600' to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Nav
