import React from 'react'
import './newsletter.css'

import {Container, Row, Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                  <div className="newsletter_content">
                    <h2>Subscribe now to get useful traveling information.</h2>
                    <div className="newsletter_input">
                        <input type="email" placeholder='enter your email' />
                        <button className='btn newsletter_btn'>Subscribe</button>
                    </div>

                    <p>Embark on a journey of endless exploration! Subscribe to our newsletter and be the first to uncover the latest travel inspirations, exclusive deals, and insider tips.
                       Join our community of wanderers and let's turn your travel dreams into reality. Simply enter your email below and let the adventure begin! 🌍✈️.</p>
                  </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter_img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter