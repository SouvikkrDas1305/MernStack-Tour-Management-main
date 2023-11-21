import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.webp'
import ava02 from '../../assets/images/ava-2.webp'
import ava03 from '../../assets/images/ava-3.webp'
import ava04 from '../../assets/images/ava-4.webp'
const Testimonial = () => {
    const settings= {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
          {
             breakpoint:992,
             settings: {
                 slidesToShow:2,
                 slidesToScroll:1,
                 infinite:true,
                 dots:true,
                },
            },
            {
                breakpoint:576,
                settings: {
                  slidesToShow:1,
                  slidesToScroll:1,
                  infinite:true,
                  dots:true,
                },
            }
        ]
    }
  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
           <p>Smooth sailing from start to finish! This travel website nails it with simplicity and reliability. Ready for my next adventure already! ⛵🌍 #TravelWin</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src= {ava01} className='w-25 h-25 rounded-2'alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Souvik Kumar Das</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
           <p>Effortless bookings, endless adventures. 
            This travel website is a game-changer! ⚡✈️ #TravelJoy</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src= {ava02} className='w-25 h-25 rounded-2'alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Arpan Mukherjee</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
           <p>Simplified travel at its finest! Quick, easy, and reliable. 10/10 recommend! ⚡🌐 #TravelEase</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src= {ava03} className='w-25 h-25 rounded-2'alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Subhankar Samanta</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
           <p>Top-notch service! Effortless planning, instant bookings. A traveler's dream come true! ⭐✈️ #TravelPerfection</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src= {ava04} className='w-25 h-25 rounded-2'alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Arghadip Jana</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonial