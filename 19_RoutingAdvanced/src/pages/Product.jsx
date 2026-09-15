import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className='gap-10 flex justify-center items-center p-5 font-bold text-2xl'>
      <Link to='/Product/men'>Men</Link>
      <Link to='/Product/women'>Women</Link>
    </div>
  )
}

export default Product
