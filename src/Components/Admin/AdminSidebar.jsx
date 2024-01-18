import React from 'react'
import { Link } from 'react-router-dom'
export default function AdminSidebar() {
    return (
        <>
           <div className="list-group">
  <Link to="/AdminHome" className="list-group-item list-group-item-action active  font-weight-bold" aria-current="true"><i className=' fs-4 fas fa-home'></i>
    <span className='float-end'>Home</span>
  </Link>
  <Link to="/Admin/users" className="list-group-item list-group-item-action"><i className=' fs-4 fas fa-users text-primary text-primary'></i>
    <span className='float-end'>User</span></Link>
  <Link to="/Admin/Maincategory" className="list-group-item list-group-item-action"><i className=' fs-4 fas fa-list-alt text-primary'></i>
    <span className='float-end'>Maincategory</span></Link>
  <Link to="/Admin/subcategory" className="list-group-item list-group-item-action"><i className=' fs-4 fas fa-list-alt text-primary'></i>
    <span className='float-end'>Subcategory</span></Link>
  <Link to="/Admin/brand" className="list-group-item list-group-item-action"><i className=' fs-4 fab fa-stack-overflow text-primary'></i>
    <span className='float-end'>Brand</span></Link>
  <Link to="/Admin/product" className="list-group-item list-group-item-action"><i className=' fs-4 fab fa-product-hunt text-primary'></i>
    <span className='float-end'>Products</span></Link>
  <Link to="/Admin/testimonials" className="list-group-item list-group-item-action"><i className=' fs-4 fas fa-comment text-primary'></i>
    <span className='float-end'>Testimonials</span></Link>
  <Link to="/Admin/checkout" className="list-group-item list-group-item-action"><i className=' fs-4 fas fa-shopping-cart text-primary'></i>
    <span className='float-end'>Checkout</span></Link>
  <Link to="/Admin/contactus" className="list-group-item list-group-item-action"><i className=' fs-4 fas fa-address-book text-primary'></i>
    <span className='float-end'>ContactUs</span></Link>
  <Link to="/Admin/newslatters" className="list-group-item list-group-item-action"><i className=' fs-4 fas fa-newspaper text-primary'></i>
    <span className='float-end'>NewsLatters</span></Link>
    
</div>
        </>
    )
}
