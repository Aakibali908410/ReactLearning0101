import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card userName='Aakib Ali' age={20} img='img.jpg.jpeg'/>
      <Card userName='Ashu Ojha' age={30} img='moon.jpg'/>
      <Card userName='Alfaiz Ali' age={23} img='study.jpg'/>
      <Card userName='syed wali' age={35} img='img.jpg.jpeg' />
      <Card userName='mohd zaki' age={24} img='moon.jpg'/>
      <Card userName='mohd zaid' age={24} img='study.jpg' /> 
      <Card userName='panki sharma' age={25} img='moon.jpg' />
      <Card userName='kabir khan' age={20} img='img.jpg.jpeg' />  
      <Card userName='arbaz malik' age={20} img='img.jpg.jpeg' />  
      <Card userName='kappora' age={20} img='img.jpg.jpeg' />  
      <Card userName='syed ali' age={20} img='img.jpg.jpeg' />  

    </div>
  )
}

export default App
