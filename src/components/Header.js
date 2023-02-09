import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../asset/img/logo.webp'
function Header() {



    return (
        <>
            {/* <Link to='/' className='btn m-2 btn-primary'>Home</Link>
           <Link to='/aboutus' className='btn m-2 btn-primary'>About Us</Link>
           <Link to='/contactus' className='btn m-2 btn-primary'>Contact Us</Link> */}

            <header className='header inner-header'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link to='/' className=''><img src={logo} alt="" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse menubar" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to='/' className=''>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/aboutus' className=''>About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/howitworks' className=''>How It Works</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/pricing' className=''>Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/contact' className=''>Contact</Link>
                                </li>
                            </ul>
                            <div className='login'>
                                <Link to='' className='btn_login'>Log in</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header