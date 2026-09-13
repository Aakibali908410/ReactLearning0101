import React from 'react'

const App = () => {
  const storage={
    age:20,
    Name:"Aakib Ali",
    Course:"B.Tech",
    ROll_Number:2
  }
  // localStorage.setItem('user',storage)
  // localStorage.clear()
  localStorage.setItem('user',JSON.stringify(storage))
  return (
    <div>
      
    </div>
  )
}

export default App
