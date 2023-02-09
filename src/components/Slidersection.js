import React from 'react'
import Slider from 'react-slick';

import brand1 from '../asset/img/brand1.webp'
import brand2 from '../asset/img/brand2.webp'
import brand4 from '../asset/img/brand4.webp'
import brand5 from '../asset/img/brand5.webp'

import brand1lg from '../asset/img/brand1-lg.webp'
import brand2lg from '../asset/img/brand2-lg.webp'
import brand4lg from '../asset/img/brand4-lg.webp'


function Slidersection(props) {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        // arrows: true
    };

    const settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

    };

    const cSlider = [{
        img: brand1,
    },
    {
        img: brand2,
    },
    {
        img: brand1,
    },
    {
        img: brand4,
    },
    {
        img: brand5,
    },
    {
        img: brand4,
    },
    {
        img: brand2,
    },
    {
        img: brand1,
    },
    {
        img: brand4,
    },
    {
        img: brand2,
    }]

    const cSlider2 = [{
        img2: brand1lg,
    },
    {
        img2: brand2lg,
    },
    {
        img2: brand1lg,
    },
    {
        img2: brand4lg,
    },
    {
        img2: brand2lg,
    }]

    return (
        <>

            <section className='slider section-ptb'>
                <div className='container text-center'>
                    <div className='section-title text-center d-flex'>
                        <h2>{props.sliderheading}</h2>
                        <p className='w-50'>{props.sliderdescription}</p>
                    </div>
                    <div className='row mb--100 text-center'>
                        <Slider {...settings}>
                            {
                                cSlider.map((piece, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={piece.img} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                    <div className='slider2 partner-brand row'>
                        <Slider {...settings2}>
                            {
                                cSlider2.map((piece2, index2) => {
                                    return (
                                        <div key={index2}>
                                            <img src={piece2.img2} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Slidersection