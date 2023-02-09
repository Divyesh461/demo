import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from './Footer'

function Aboutus() {
  return (
    <>
      <Header/>

      <section className='breadcrumb-area section-ptb'>
        <div className='container'>
          <div className='in-breadcrumb'>
            <div className='row'>
              <div className='col text-center'>
                <h2>About Us</h2>
                <ul className='breadcrumb-list d-inline-flex'>
                  <li className='breadcrumb-item'><Link to='/'>Home</Link></li>
                  <li className='breadcrumb-item'><Link to='/aboutus'>About Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Aboutus