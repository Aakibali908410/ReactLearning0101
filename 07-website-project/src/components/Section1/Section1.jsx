import React from 'react'
import Navbar from './Navbar'
import ContentPage1 from './ContentPage1'
import About from './About'

const Section1 = () => {
  return (
    <div className='h-screen w-full text-white'>
    <Navbar/>
    <About />
    <ContentPage1 />
    </div>
  )
}

export default Section1
