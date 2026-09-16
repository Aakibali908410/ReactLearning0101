import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {

    let navigate = useNavigate()

  return (
    <div className='flex'>

    <button onClick={()=>{
        navigate('/')
    }}
    className='bg-green-800 px-3 py-2 rounded m-3 hover:scale-95 '>
    Return to Home page
    </button>

    <button onClick={()=>{
        navigate(-1)
    }}
    className='bg-green-800 flex px-3 py-2 rounded m-3 hover:scale-95'>
    Back
    </button>

    <button onClick={()=>{
        navigate(+1)
    }}
    className='bg-green-800 flex px-3 py-2 rounded m-3 hover:scale-95'>
    Next
    </button>
    
    </div>
  )
}

export default Nav2