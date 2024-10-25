import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/images/logo/logo.png"
import Cart from '../Shop/Cart';
import { FaCartArrowDown } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    //Addevent listener
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 200){
            setHeaderFixed(true);
        }else{
            setHeaderFixed(false)
        }
    })
  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
        {/* header Top Start */}
        <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
            <div className="container">
                <div className="header-top-area">
                    <Link to='/signup' className='lab-btn me-3'><span>Create Account</span></Link>
                    <Link to="/login">Log in</Link>
                    <Link to="/cart-page"><FontAwesomeIcon icon={faShoppingCart}/></Link>
                </div>
            </div>
        </div>

        {/* Header Bottom */}
        <div className='header-bottom'>
               <div className="container">
                <div className="header-wrapper">
                    {/* Logo */}
                    <div className='logo-search-acte'>
                     <div className='logo'>
                          <Link to={"/"}>
                          <img src={logo} alt="" />
                          </Link>
                     </div>
                    </div>

                    {/* Menu Area */}
                    <div className="menu-area">
                        <div className="menu">
                            <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        
                            {/* Sign-in & Login */}
                        <Link to="sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                        <Link to="/login" className='d-none d-md-block'>Log In</Link>
                        {/* <Link to="/cart-page" className='d-none d-md-block'>{faShoppingCart}</Link> */}
                        <Link to="/cart-page" className='d-none d-md-block cart-icon'><FontAwesomeIcon icon={faShoppingCart}/></Link>

                        
                        
                        
                        
                        

                        {/* Menu-Toggler */}
                        <div onClick={()=> setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        {/* Social Toggler */}
                        <div className='ellepsis-bar d-md-none'
                        onClick={()=> setSocialToggle(!socialToggle)}
                        >
                        <i className="icofont-info-square"></i>
                        </div>
                    </div>
                </div>
               </div>
        </div>
    </header>
  )
}

export default NavItems