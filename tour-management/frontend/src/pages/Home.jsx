import React from 'react'
import '../styles/home.css'

import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.webp';
import heroImg02 from '../assets/images/hero-img02.webp';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.webp';
import experienceImg from '../assets/images/experience.png';


import Subtitle from './../shared/Subtitle';


import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../component/Fetured-tours/FeaturedTourList';
import MasonryImagesGallery from '../component/image-gallery/MasonryImagesGallery';
import Testimonial from '../component/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>
    {/* ===hero section start=== */}
    <section>
      <Container>
       <Row>
        <Col lg='6'>
          <div className="hero_content">
           <div className="hero_subtitle d-flex align-items-center">
            <Subtitle subtitle={'Know Before You Go'}/>
            <img src={worldImg} alt="" />
           </div>
           <h1>Traveling opens the door to creating{" "}
           <span className="highlight">memories</span>
           </h1>

           <p>
           Wishing you moments that sparkle with joy, adventures that leave you breathless, and memories that last a lifetime. 
           May each day bring new discoveries and the kind of happiness that only travel can bring.
           </p>

          </div>
        </Col>


        <Col lg='2'>
          <div className="hero_img-box">
            <img src={heroImg} alt="" />
          </div>
        </Col>

        <Col lg='2'>
          <div className="hero_img-box mt-4">
            <video src={heroVideo} alt="" muted autoPlay loop  />
          </div>
        </Col>

        <Col lg='2'>
          <div className="hero_img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
        </Col>

        <SearchBar/>
       </Row>
      </Container>
    </section>
    {/* hero section end */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services_subtitle">What we serve</h5>
            <h2 className='services_title'>We offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>



    {/* =========featured tour section start=============*/}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'} />
            <h2 className="featured_tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>
    {/* =========featured tour section end=============*/}

    {/* ===============experience section start=========== */}

     <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience_content">
              <Subtitle subtitle={'Experience'}/>

              <h2>With our all experience <br />We will sereve you</h2>
              <p>
              Embark on a seamless journey with our travel website - where wanderlust meets convenience. <br/>
              
              Your adventure begins with just a click. 🌍✈️ #TravelUnbound
              </p>
            </div>
            
            <div className="counter_wrapper d-flex align-items-center gap-5">
              <div className="counter_box">
                <span>12k+</span>
                <h6>Sucessful Trip</h6>
              </div>

              <div className="counter_box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>

              <div className="counter_box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>

          <Col lg='6'>
             <div className="experience_img">
              <img src={experienceImg} alt="" />
             </div>
          </Col>
        </Row>
      </Container>
     </section>

    {/* ===============experience section end=========== */}

    {/* ============== gallery section start==========*/}

    <section>
      <Container>
        <Row>
          <Col lg='12'>
           <Subtitle subtitle={'Gallery'}/>
           <h2 className='gallery_title'>
            Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>

    {/* ============== gallery section end==========*/}

    {/* ============testimonial section start=========== */}
     
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'}/>
            <h2 className='testimonial_title'>What our fan say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonial />
          </Col>
        </Row>
      </Container>
    </section>

    {/* ============testimonial section end=========== */}

    <Newsletter />
    </>
  )
}

export default Home