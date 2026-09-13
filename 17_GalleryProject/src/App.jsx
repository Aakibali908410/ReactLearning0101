import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  const [userData, setuserData] = useState([])

  const getData=async()=>{


    const response =await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
    setuserData(response.data)
  }

  let printUserData='No User Available'
  if(userData.length>0){
        printUserData=userData.map(function(elem,idx){

          return <div>
            <a href={elem.url} target='_blank'>
            <div className='h-40 w-44 overflow-hidden'>
              <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
            </div>
            <h2 className='font-bold text-lg'>{elem.author}</h2>
            </a>
          </div>
        })
  }

  return (
    <div className='bg-black h-screen overflow-auto text-white'>
      <button onClick={getData} className='bg-green-700 px-5 py-3 rounded-2x'>click here</button>
      <div className='flex flex-wrap gap-5'>
        {printUserData}
      </div>
    </div>
  )
}

export default App
