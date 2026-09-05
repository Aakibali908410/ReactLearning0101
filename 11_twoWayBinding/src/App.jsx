import React, { useState } from 'react'

const App = () => {
  
  const [Tittle, setTittle] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log('form submitted')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" placeholder='Enter your name' value={Tittle} 
        onChange={(e)=>{
          setTittle(e.target.value)
          console.log(Tittle)
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
