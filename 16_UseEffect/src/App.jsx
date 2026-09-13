import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [A, setA] = useState(0)
  const [B, setB] = useState(0)

  function A_changing(){
    console.log("A change ho rah hai")
  }
  function B_changing(){
    console.log("B change ho rah hai")
  }
  useEffect(function(){
    console.log('Use effect on running mode')
  },[A])
  return (
    <div>
      <h1>A is {A}</h1>
      <h1>B is {B}</h1>
      <button onClick={()=>{
        setA(A+1);
      }}>
      Change A</button>

      <button onClick={()=>{
        setB(B-1);
      }}>
      Change B</button>
    </div>
  )
}

export default App
