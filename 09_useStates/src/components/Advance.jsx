import React from 'react'
import  { use, useState } from 'react'

const Advance = () => {
    const [data, setdata] = useState({Name:"AAKIB ALI",Age:20,phone:9084101749,course:"B.Tech"})
    function details(){
        const newd={...data}
        data.newd="SAYYED AAKIB JI";
        console.log(newd.Age,newd.Name)
        newd.Age=3748;
        newd.Name="dfiihjfsiuiujujtdiy";
        setdata(newd)
    }
  return (
    <div className=''>
      <h1 className=''>{data.Age} <br /> {data.Name}</h1>
      <button onClick={details}>click here</button>
    </div>
  )
}

export default Advance
