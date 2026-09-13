
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  // const getData = async ()=>{
  //   const response= await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data=await response.json()
  //   console.log(data);
  // }

  const [data, setdata] = useState([])

  const getData=async ()=>{
    const response=await axios.get('https://picsum.photos/v2/list')
    setdata(response.data)
  }
  return (
    <div>
      <button onClick={getData}>Click Here</button>
      <div>
        {
          data.map(function(elem, idx){
            return <h3>Hello, {elem.authorr} {idx}</h3>
          })
        }
      </div>
    </div>
  )
}

export default App
