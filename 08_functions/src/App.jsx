import React from 'react'

// function clicked(){
//   console.log("Ho gya kaam")
// }
// function hover(){
//   console.log("wait kariyyegaa")
// }
// there many fucntion 1.onClick 2.ondoubleClick, 3.onMouseEnter, 4.onChange
//                     5. onMouseMove 6. pagescrolling 
const App = () => {
  return (
    <div onWheel={(ele)=>{
      console.log(ele.target.className)
    }} className='scroll'>
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="box3"></div>
    </div>
  )
}

export default App
