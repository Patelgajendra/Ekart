import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <>
        {/* <!-- Navbar start --> */}
        <div className="container-fluid fixed-top">
            <div className="container topbar bg-primary d-none d-lg-block">
                <div className="d-flex justify-content-between">
                  
                        <small ><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <a target='_blank' rel='noreferrer' href="#" className="text-white">New Ashok Nagar Delhi</a></small>
                        <small ><i className="fas fa-envelope me-2 text-secondary"></i><a target='_blank' rel='noreferrer' href="mailto:patel.61052@gmail.com" className="text-white">patel.61052@gmail.com</a></small>
                        <small ><i className="fas fa-phone-alt me-2 text-secondary"></i><a target='_blank' rel='noreferrer' href="tel:6306618391" className="text-white">+91-630-661-8391</a></small>
                        <small ><i className="fab fa-whatsapp me-2 text-secondary"></i><a target='_blank' rel='noreferrer' href=" https://wa.me/6306618391" className="text-white">+91-630-661-8391</a></small>
                    
                </div>
            </div>
            <div className="container px-0">
                <nav className="navbar navbar-light bg-white navbar-expand-xl">
                    <Link to="home" className="navbar-brand"><h1 className="text-primary display-6">eKart</h1></Link>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <NavLink to="Home" className="nav-item nav-link ">Home</NavLink>
                            <NavLink to="Shop" className="nav-item nav-link">Shop</NavLink>
                            <NavLink to="ProductDetail" className="nav-item nav-link">Product Detail</NavLink>
                            <div className="nav-item dropdown">
                                <NavLink to="Pages" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                    <NavLink to="Cart" className="dropdown-item">Cart</NavLink>
                                    <NavLink to="Checkout" className="dropdown-item">Checkout</NavLink>
                                    <NavLink to="Testimonial" className="dropdown-item">Testimonial</NavLink>
                                    <NavLink to="404" className="dropdown-item">404 Page</NavLink>
                                </div>
                            </div>
                            <NavLink to="Contact" className="nav-item nav-link">Contact</NavLink>
                            <NavLink to="AdminHome" className="nav-item nav-link">Admin</NavLink>
                        </div>
                        <div className="d-flex m-3 me-0">
                            <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary"></i></button>
                            <Link to="cart" className="position-relative me-4 my-auto">
                                <i className="fa fa-shopping-bag fa-2x"></i>
                                <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{top: "-5px", left: "15px", height: "20px", minWidth: "20px"}}>3</span>
                            </Link>
                            <Link to="contact" className="my-auto">
                                <i className="fas fa-user fa-2x"></i>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- Navbar End -->*/}
              {/* <!-- Modal Search Start --> */}
        <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center">
                        <div className="input-group w-75 mx-auto d-flex">
                            <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1"/>
                            <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Modal Search End --> */}
    </> 
  )
}
