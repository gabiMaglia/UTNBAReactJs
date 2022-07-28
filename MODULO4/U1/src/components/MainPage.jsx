import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Header from './layout/header'
import Nosotros from '../pages/Nosotros'
import QueHacemos from '../pages/QueHacemos'
import Contacto from '../pages/Contacto'
import Footer from './layout/footer'

const MainPage = () => {
  return (
    <div className='mainPage' >        
     <BrowserRouter>  
         <Header/>
         <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="QueHacemos" element={<QueHacemos />} />
         <Route path="nosotros" element={<Nosotros />} />
         <Route path="contacto" element={<Contacto />} />

         </Routes>
         </BrowserRouter>

      
        <HomePage/>
        <Nosotros/>
        <QueHacemos/>
        <Contacto/>

        <Footer/>
    </div>
  )
}

export default MainPage