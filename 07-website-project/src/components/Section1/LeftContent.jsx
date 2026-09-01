import React from 'react'
import { TrendingUp } from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='text-black h-full w-1/3 bg-blue-50 rounded-2xl'>  
      <div className='px-10 py-15'>
        <h1 className='text-4xl tracking-wider font-bold leading-10'>Propective <br/> Customer <br/> Segmentation</h1>
        <p className='mt-5 tracking-widest' >Depending on customer <br /> satisfication access <br /> to banking products, potential <br /> target audience can be divided <br /> inot three groups</p>
      </div>
      <div className='mt-14 ml-2'>
        < TrendingUp size={60}/>
      </div>
    </div>
  )
}

export default LeftContent
