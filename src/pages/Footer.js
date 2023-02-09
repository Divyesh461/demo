import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className='footer-area'>
                <div className='footer-bg'>
                    <div className="container">
                        <div className="row">
                            <div className='col-3 grid1  pt--50'>
                                <div className='footer-title'>
                                    <h4>About Streamo</h4>
                                </div>
                                <div className='footer-content'>
                                    <p>Eiusmod tempor incididunt ut la abore et minim ven exerc itation ulla mco lboris naliquip ex ea comm.</p>
                                    <ul className='d-flex footer-social'>
                                        <li>s</li>
                                        <li>s</li>
                                        <li>s</li>
                                        <li>s</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-3 pt--50 custom-col'>
                                <div className='footer-title'>
                                    <h4>company</h4>
                                </div>
                                <div className='footer-content'>
                                    <ul>
                                        <li><Link to='/'>Home</Link></li>
                                        <li><Link to='/'>about</Link></li>
                                        <li><Link to='/'>service</Link></li>
                                        <li><Link to='/'>contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-3 pt--50 custom-col'>
                                <div className='footer-title'>
                                    <h4>service</h4>
                                </div>
                                <div className='footer-content'>
                                    <ul>
                                        <li><Link to='/'>Video</Link></li>
                                        <li><Link to='/'>Movie</Link></li>
                                        <li><Link to='/'>Tv Series</Link></li>
                                        <li><Link to='/'>Live</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-3 pt--50 custom-col'>
                                <div className='footer-title'>
                                    <h4>contact</h4>
                                </div>
                                <div className='footer-content'>
                                    <ul className='contact-list'>
                                        <li>
                                            <i className="fa-solid fa-phone"></i>
                                            <span>+2211336655</span>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-house"></i>
                                            <span>Queen meri street abc/23 Bangladesh</span>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-envelope"></i>
                                            <span>demo@gmail.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 footer-txt'>
                                <p>Copyright © 2022 All right reserve</p>
                            </div>
                            <div className='col-lg-6 col-md-6 footer-pg'>
                                <div className='bottom-list'>
                                    <ul className='d-inline-flex'>
                                        <li><Link to='/'>Home</Link></li>
                                        <li><Link to='/'>About</Link></li>
                                        <li><Link to='/'>support</Link></li>
                                        <li><Link to='/'>contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer