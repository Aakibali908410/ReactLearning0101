import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
const App = () => {

  const [userData, setuserData] = useState([])
  const [Index, setIndex] = useState(1)

  const getData=async()=>{


    const response =await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=30`)
    setuserData(response.data)
  }

  useEffect(function(){
    getData()
  },[Index])

  let printUserData=<h3 className='text-gray-400 text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
  if(userData.length>0){
        printUserData=userData.map(function(elem,idx){

          return <div key={idx}>
            <Card elem={elem}/>
          </div>
        })
  }

  return (
    <div className='bg-black h-screen overflow-auto text-white p-3'>
      <div className='flex flex-wrap gap-5'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-5 items-center p-5 mt-8'>
        <button
         className='bg-amber-400 text-black rounded px-4 py-2 font-bold text-sm cursor-pointer active:scale-95'
         onClick={()=>{
           if(Index > 1){
             setIndex(Index-1)
             setuserData([])
           }
         }}
         >Prev</button>
         <h4>Page {Index}</h4>
        <button
         className='bg-amber-400 text-black rounded px-4 py-2 font-bold text-sm cursor-pointer active:scale-95'
         onClick={()=>{
            setuserData([])
            setIndex(Index+1)
         }}
         >Next</button>
      </div>
    </div>
  )
}

export default App
