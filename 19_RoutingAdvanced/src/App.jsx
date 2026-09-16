import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer';
import { Route,Routes } from 'react-router-dom';
import Product from './pages/Product';
import About from './pages/About';
import Home from './pages/Home';
import Men from './pages/Men';
import NotFound from './pages/NotFound';
import Women from './pages/Women';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Nav2 from './components/Nav2';


const App = () => {
  return (
    <div className='bg-cyan-700 h-screen'>
      <Nav />
      <Nav2 />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='*' element={<NotFound />}/>
        <Route path='/courses/:id' element={<CourseDetail />}/>
        <Route path='/product/men' element={<Men />}/>
        <Route path='/product/women' element={<Women />}/>
        <Route path='/courses' element={<Courses />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App