import React from 'react'

import "../../all.css"
import { Navbar } from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/home/Home'
import { Sofa } from '../../pages/Sofa/Sofa'
import { Cart } from '../../pages/cart/Cart'
import { Tursofa } from '../../pages/Tursofa/Tursofa'
import { Intro } from '../../pages/Intro/Intro'

export  function Main() {
  return (
    <div  className='main'>
      <Navbar/>
      <Routes>

        <Route   path='/home'  element={ <Home/> }  />
        <Route   path='/like'  element={ <Sofa/> }  />
        <Route   path='/bag'  element={ <Cart/> }  />
        <Route   path='/user'  element={ <Tursofa/> }  />
        <Route   path='/'  element={ <Intro/> }  />
       
  
      </Routes>

      <Footer/>
      
    </div>
  )
}
