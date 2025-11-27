import React, { useEffect, useState } from 'react'
import Home from './Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Mobile from './Mobiles/Mobile'
import Laptops from './Laptop/Laptop'
import Accessories from './Accessories/Accessories'
import Shoes from './Shoes/Shoes'
import MensClothing from './MensClothing/MensClothing'
import SmartGadgets from './SmartGadgets/SmartGadgets'
import HomeAppliances from './HomeAppliances/HomeAppliances'
import Furnitures from './Furnitures/Furnitures'
import Details from './ProductDetails'
import SearchPage from './SearchPage'
import './App.css'
import AddToCart from './AddToCart'
import Purchased from './Purchased'


function App() {

  return (

    <div>

      <div id='body'>
        <BrowserRouter>

          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mobiles' element={<Mobile />} />
            <Route path='/laptops' element={<Laptops />} />
            <Route path='/accessories' element={<Accessories />} />
            <Route path='/shoes' element={<Shoes />} />
            <Route path='/mensClothings' element={<MensClothing />} />
            <Route path='/smartGadgets' element={<SmartGadgets />} />
            <Route path='/homeAppliances' element={<HomeAppliances />} />
            <Route path='/furnitures' element={<Furnitures />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/:category/:id' element={<Details />} />
            <Route path='/cart' element={<AddToCart />} />
            <Route path='/buyNow' element={<Purchased />} />

          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
