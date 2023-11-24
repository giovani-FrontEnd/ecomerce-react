import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo/logo.png';
import { FaInfoCircle } from "react-icons/fa";


const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    window.addEventListener('scroll', () => {
        if(scrollY > 200) {
            setHeaderFixed(true)
        } else {
            setHeaderFixed(false)
        }
    })

  return (
    <header className={`header-section style-4 ${headerFixed ? 'header-fixed fadeInIp' : ''}`}>
        {/* header top start  */}
        <div className={`header-top d-md-none ${socialToggle ? 'open' : ''}`}>
            <div className='container'>
                <div className="header-top-area">
                    <Link to='/signup' className='lab-btn me-1'><span>Create Account</span></Link>
                    <Link to='/login'>Log in</Link>
                </div>
            </div>
        </div>

        {/* header bottom */}
        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
                    {/* logo */}
                    <div className="logo-search-acte">
                        <div className="logo">
                            <Link to={'/'}>
                                <img src={Logo} />
                            </Link>
                        </div>
                    </div>

                    {/* menu area  */}
                    <div className="menu-area">
                        <div className="menu">
                            <ul className={`lab-ul ${menuToggle ? 'active' : ''}`}>
                                <li>
                                    <Link to='/'>Home</Link>
                                    <Link to='/shop'>Shop</Link>
                                    <Link to='/blog'>Blog</Link>
                                    <Link to='/about'>About</Link>
                                    <Link to='/contact'>Contact</Link>
                                </li>
                            </ul>
                        </div>

                        {/* sign in & log in  */}
                        <Link to='/sign-up' className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                        <Link to='/login' className='d-none d-md-block'>Log in</Link>

                        {/* menu toggler  */}
                        <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        {/* social toggle */}
                        <div onClick={() => setSocialToggle(!socialToggle)} className='ellepsis-bar d-md-none'>
                            <FaInfoCircle />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </header>
  )
}

export default NavItems
