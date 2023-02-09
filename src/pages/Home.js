import React from 'react'
import Header from '../components/Header'
import inner from '../asset/img/inner.webp'
import { Link } from 'react-router-dom';

// import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

import world_icon from '../asset/img/world_icon.webp'
import scale_icon from '../asset/img/scale_icon.webp'
import rocket_icon from '../asset/img/rocket_icon.webp'
import mockup1 from '../asset/img/mokup-01.webp'
import mockup2 from '../asset/img/mokup-02.webp'
import mockup3 from '../asset/img/mokup-03.webp'
import mockup4 from '../asset/img/mokup-04.webp'
import mockup5 from '../asset/img/mokup-05.webp'
import mockup6 from '../asset/img/mokup-06.webp'
// import brand1 from '../asset/img/brand1.webp'
// import brand2 from '../asset/img/brand2.webp'
// import brand4 from '../asset/img/brand4.webp'
// import brand5 from '../asset/img/brand5.webp'
// import brand6 from '../asset/img/brand6.webp'

// import brand1lg from '../asset/img/brand1-lg.webp'
// import brand2lg from '../asset/img/brand2-lg.webp'
// import brand4lg from '../asset/img/brand4-lg.webp'
import Footer from './Footer';

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Videobanner from '../components/Videobanner';
import Slidersection from '../components/Slidersection';





function Home() {

    const Features = [{
        img: world_icon,
        heading: "Global Infrastructure",
        description: "nostruexercitation ullamco laboris nisi ut pariatur. Excepteur sint occaecdi tempora incidunt .",
    },
    {
        img: scale_icon,
        heading: "Scalability",
        description: "nostruexercitation ullamco laboris nisi ut pariatur. Excepteur sint occaecdi tempora incidunt .",
    },
    {
        img: rocket_icon,
        heading: "Streaming Expertise",
        description: "nostruexercitation ullamco laboris nisi ut pariatur. Excepteur sint occaecdi tempora incidunt .",
    }]


    console.log(Features);

    return (
        <>
            <Header />
            <main>
                <section className='hero'>
                    <div className='hero-slider'>
                        <div className='single-slide-1 bg-image'>
                            <div className='hero-content-one container'>
                                <div className='row'>
                                    <div className='col-lg-9 m-auto'>
                                        <div className="slider-text-info text-center slider-mt-200">
                                            <h3>WELCOME TO STREAMED</h3>
                                            <h1>Best Streaming Site</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                        </div>
                                        <div className='slider-button text-center'>
                                            <Link to='/' className='default-btn gradient-btn mr--10'>Learn More</Link>
                                            <Link to='/' className='primary-btn hover-gradient-btn ml--10'>Try Free Trial</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='slider-screenshort'>
                    <div className="container">
                        <div className="row">
                            <div className='col-xl-10 col-lg-10 col-md-10 m-auto'>
                                <div className='slier-inner-image text-center'>
                                    <img src={inner} alt="no found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className='feature-area section-pb section-pt-90'>
                    <div className="container">
                        <div className="row">
                            {
                                Features.map((items, index) => {
                                    return (
                                        <div key={index} className="col-lg-4 col-md-6">
                                            <div className='single-feature text-center mt--30'>
                                                <div className='single-feature-icons border-b-one'>
                                                    <span><img src={items.img} alt="" /></span>
                                                </div>
                                                <div className='single-feature-contents'>
                                                    <h4>{items.heading}</h4>
                                                    <p>{items.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

                <section className='why-choose-area section-ptb bg-light-grey section-bg-shape'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 m-auto'>
                                <div className='section-title text-center'>
                                    <h2>Why Choose Us</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos quo quidem quos sed, molestias excepturi tempora alias!</p>
                                </div>
                            </div>
                        </div>
                        <div className='row choose-main-area align-items-center'>
                            <div className='col-lg-6 col-md-7 order-md-1 order-2'>
                                <div className='choose-contents-wrap s--mt--30 '>
                                    <div className='section-title-two'>
                                        <h2>get started with trial</h2>
                                        <p>eiusmod tempor incididunt ut laqua. Ut enim ad minim vniam, quis nostrud exercitation ullamco la aliquipLorem ipsum dolor sit amet, consectetur .</p>
                                        <p>eiusmod tempor incididunt ut laqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipLorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                                    </div>
                                    <div className='choose-button'>
                                        <Link to='/' className='default-btn gradient-btn mr--10 m-0'>Learn More</Link>
                                        <Link to='/' className='primary-btn hover-gradient-btn ml--10'>Try Free Trial</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-7 order-md-1 order-2'>
                                <img src={mockup1} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='feature-list-area section-ptb'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-lg-5'>
                                <div className='choose-contents-wrap'>
                                    <div className='section-title-two'>
                                        <h2>Get Started With Trial</h2>
                                    </div>
                                    <p> eiusmod tempor incididunt ut laqua. Ut enim ad minim vniam, quis nostrud exercitation ullamco           laaliquipLorem ipsum dolor sit amet, consectetur .</p>
                                    <ul>
                                        <li> Mod tempor incididunt ut laqua.</li>
                                        <li> Ut enim ad minim quis nostr.</li>
                                        <li> Nostrud exercitation ullamco</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                <img src={mockup2} alt="" />
                            </div>
                        </div>

                        <div className='row align-items-center feature-list-two mt--60'>
                            <div className='col-lg-6 col-md-12 order-lg-1 order-2'>
                                <div className='choose-image-wrap'>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-6 mt--30 '>
                                            <img src={mockup3} alt="" />
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-6 mt--30 '>
                                            <img src={mockup4} alt="" />
                                        </div>
                                    </div>
                                    <div className='col-lg-12 col-md-12 col-sm-12 mt--30 '>
                                        <img src={mockup5} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 order-lg-1 order-2'>
                                <div className='choose-contents-wrap ml--35'>
                                    <div className='section-title-two'>
                                        <h2>Easy & Customizable</h2>
                                    </div>
                                    <p> eiusmod tempor incididunt ut laqua. Ut enim ad minim vniam, quis nostrud exercitation ullamco laaliquipLorem ipsum dolor sit amet, consectetur .</p>
                                    <ul>
                                        <li>Mod tempor incididunt ut laqua.</li>
                                        <li>Ut enim ad minim quis nostr.</li>
                                        <li>Nostrud exercitation ullamco</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* VIDEO SECTION START */}
                <Videobanner videoheading={'See Videos How It Works'}
                    videodescription={'Adminim veniam, quis nostrud exercitation ullamco laboris nisi ut pariatur. Excepteur t labore et dolore magnam aliquam quaerat'}
                    videoimg={mockup6} />
                {/* VIDEO SECTION END */}


                <Slidersection sliderheading={'Our Sponsor & Partner'}
                    sliderdescription={'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laqua. Ut enim ad minim veniam, quis'} />

                <Footer />

            </main>
        </>
    )
}

export default Home