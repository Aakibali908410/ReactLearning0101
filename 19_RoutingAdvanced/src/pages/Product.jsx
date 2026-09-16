import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='gap-10 flex justify-center items-center p-5 font-bold text-2xl'>
      <Link to='/Product/men'>Men</Link>
      <Link to='/Product/women'>Women</Link>
      <Outlet />
    </div>
  )
}

export default Product
