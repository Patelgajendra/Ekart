import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        {/* <!-- Footer Start --> */}
        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
            <div className="container py-5">
                <div className="pb-4 mb-4" style={{borderBottom: "1px solid rgba(226, 175, 24, 0.5)"}}>
                    <div className="row g-4">
                        <div className="col-lg-3">
                            <a href="#">
                                <h1 className="text-primary mb-0">eKart</h1>
                                <p className="text-secondary mb-0">Latest Fashion</p>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mx-auto">
                                <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email"/>
                                <button type="submit" className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{top: 0, right: 0}}>Subscribe Now</button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="d-flex justify-content-end pt-3">
                                <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-outline-secondary btn-md-square rounded-circle" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-light mb-3 ">Why People Like us!</h4>
                            <p className="mb-4 text-light">typesetting, remaining essentially unchanged. It was 
                                popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex flex-column text-start footer-item">
                            <h4 className="text-light mb-3">Bottom Menu</h4>
                            <Link className="btn-link text-light"to="home">Home</Link>
                            <Link className="btn-link text-light"to="shop">Shop</Link>
                            <Link className="btn-link text-light"to="contact">Contact Us</Link>
                            <Link className="btn-link text-light"to="testimonials">Testimonials</Link>
                            <Link className="btn-link text-light"to="checkout">Check out</Link>
                            <Link className="btn-link text-light"to="cart">Cart</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex flex-column text-start footer-item">
                            <h4 className="text-light mb-3">Quick Links</h4>
                            <a className="btn-link text-light" href="">Privacy Policy</a>
                            <a className="btn-link text-light" href="">Terms & Conditions</a>
                            <a className="btn-link text-light" href="">Refund Policy</a>
                            <a className="btn-link text-light" href="">FAQ</a>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-light mb-3">Contact</h4>
                            <p className='text-white'>New Ashok Nagar Delhi</p>
                            <p className='text-white'>Email: <a target='_blank' rel='noreferrer' href="mailto:patel.61052@gmail.com" className='text-white btn-link'>patel.61052@gmail.com</a></p>
                            <p className='text-white'>Phone: <a target='_blank' rel='noreferrer' href="tel:6306618391" className="text-white btn-link">+91-630-661-8391</a></p>
                            <p className='text-white'>Whatapp:<a target='_blank' rel='noreferrer' href=" https://wa.me/6306618391" className="text-white btn-link">+91-630-661-8391</a></p>
                            <p className='text-white'>Payment Accepted</p>
                            <img src="img/payment.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* <!-- Footer End --> */}
    </>
  )
}
