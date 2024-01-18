import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Footer from './Footer'
import Contact from './Contact'
import Shop from './Shop'
import ShopDetails from './ProductDetail'
import Error404 from './Error404'
import Testimonial from './Testimonial'
import Checkout from './Checkout'
import Cart from './Cart'

import AdminHome from './Admin/AdminHome'

import Maincategory from './Admin/Maincategory/Maincategory'
import CreateMaincategory from './Admin/Maincategory/CreateMaincategory'
import UpdateMaincategory from './Admin/Maincategory/UpdateMaincategory'

import Subcategory from './Admin/Subcategory/Subcategory'
import CreateSubcategory from './Admin/Subcategory/CreateSubcategory'
import UpdateSubcategory from './Admin/Subcategory/UpdateSubcategory'

import Brand from './Admin/Brand/Brand'
import CreateBrand from './Admin/Brand/CreateBrand'
import UpdateBrand from './Admin/Brand/UpdateBrand'

import Product from './Admin/Product/Product'
import CreateProduct from './Admin/Product/CreateProduct'
import UpdateProduct from './Admin/Product/UpdateProduct'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/ProductDetail' element={<ShopDetails />} />
          <Route path='/Testimonial' element={<Testimonial />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/Cart' element={<Cart />} />

          <Route path='/AdminHome' element={<AdminHome />} />

          <Route path='/Admin/Maincategory' element={<Maincategory />} />
          <Route path='/Admin/Maincategory/Create' element={<CreateMaincategory />} />
          <Route path='/Admin/Maincategory/Update/:id' element={<UpdateMaincategory />} />

          <Route path='/Admin/Subcategory' element={<Subcategory />} />
          <Route path='/Admin/Subcategory/Create' element={<CreateSubcategory />} />
          <Route path='/Admin/Subcategory/Update/:id' element={<UpdateSubcategory />} />

          <Route path='/Admin/Brand' element={<Brand />} />
          <Route path='/Admin/Brand/Create' element={<CreateBrand />} />
          <Route path='/Admin/Brand/Update/:id' element={<UpdateBrand />} />

          <Route path='/Admin/Product' element={<Product />} />
          <Route path='/Admin/Product/Create' element={<CreateProduct />} />
          <Route path='/Admin/Product/Update/:id' element={<UpdateProduct />} />



          <Route path='*' element={<Error404 />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
