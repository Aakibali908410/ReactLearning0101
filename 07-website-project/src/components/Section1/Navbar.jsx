import React from 'react'
import { CornerDownRight } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-8 px-17'> 
      <h4 className='bg-black text-white px-6 py-3 rounded-full uppercase'>Target Audience</h4>
        <div className='flex space-x-1 bg-gray-200 text-black rounded-full px-5 py-2 tracking-widest text-sm'>
            <CornerDownRight />
            <button className='uppercase'>Digital Banking Platform</button>
        </div>
    </div>
  )
}

export default Navbar
