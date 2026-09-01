import React from 'react'
import { MoveRight } from 'lucide-react'

const RightContent = () => {
  return (
    <div className='text-black h-full w-4/5 flex justify-between px-2 gap-5'>
      <div className='w-1/3 h-[490px] rounded-3xl bg-cover bg-center' style={{backgroundImage:"url(https://plus.unsplash.com/premium_photo-1661765955533-596918f986f2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
            <h1 className='text-black text-2xl ml-4 mt-4 bg-white w-8 h-8 rounded-full flex items-center justify-center'>1</h1>
            <p className='text-white mt-25 px-3 text-2xl tracking-wider'>Prime customers <br />that have access <br /> to bank credit <br /> and are satisfied <br /> with  the current <br /> product</p>
            <div className='bg-blue-500 flex gap-15 mt-18 px-5 py-2 w-60 ml-2.5 rounded-full'>
                <h1 className='text-2xl tracking-wider font-medium'>Satisfied</h1>
                <MoveRight size={35}/>
            </div>
      </div>
       <div className='w-1/3 h-[490px] rounded-3xl bg-cover bg-center' style={{backgroundImage:"url(https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
            <h1 className='text-black text-2xl ml-4 mt-4 bg-white w-8 h-8 rounded-full flex items-center justify-center'>2</h1>
            <p className='text-white mt-25 px-3 text-2xl tracking-wider'>Prime customers <br />that have access <br /> to bank credit <br /> and are not<br />satisfied the<br />current service</p>
            <div className='bg-blue-500 flex gap-5 mt-18 px-5 py-2 w-60 ml-2.5 rounded-full'>
                <h1 className='text-2xl tracking-wider font-medium'>Underserved</h1>
                <MoveRight size={35}/>
            </div>
      </div>
       <div className='w-1/3 h-[490px] rounded-3xl bg-cover bg-center' style={{backgroundImage:"url(https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
            <h1 className='text-black text-2xl ml-4 mt-4 bg-white w-8 h-8 rounded-full flex items-center justify-center'>3</h1>
            <p className='text-white mt-25 px-3 text-2xl tracking-wider'>Customers <br />from near-prime <br /> and sub-prime <br /> segements with no <br />sccess to bank <br />credit</p>
            <div className='bg-green-300 flex gap-5 mt-18 px-5 py-2 w-60 ml-2.5 rounded-full'>
                <h1 className='text-2xl font-medium'>Underbanked</h1>
                <MoveRight size={35}/>
            </div>
      </div>
    </div>
  )
}

export default RightContent
