import React from 'react'
import  { use, useState } from 'react'

const Basics = () => {
    // increase ke liye
    const [counter1, setCounter1] = useState(0)
    function increase(){
        setCounter1(counter1+1)
    }
    // decrease ke liye
    function decrease(){
        setCounter1(counter1-1)
    }
    function restart(){
        setCounter1(0);
    }
  return (
    <div className='h-full w-full'>
          <div className='bg-gray-600 px-10 py-5 h-50 ml-135 w-70 rounded-3xl mt-60 items-center justify-center flex'>
            <h1 className='text-9xl items-center'>{counter1}</h1>
          </div>
          <div className='flex justify-center gap-10'>
          <button onClick={increase} className='bg-green-600 py-2 px-5 rounded-2xl mt-5 hover:bg-green-900'>Increase</button>
          <button onClick={decrease} className='bg-green-600 py-2 px-5 rounded-2xl mt-5 hover:bg-green-900'>Decrease</button>
          <button onClick={restart} className='bg-green-600 py-2 px-5 rounded-2xl mt-5 hover:bg-green-900'>Restart</button>
          </div>
          
    </div>
  )
}

export default Basics
