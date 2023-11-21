import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Empowering You with Precision: Explore the Latest Weather Updates on Our Website.🌐🌤️",
       },
       {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Embark on a journey of discovery with our expert tour guides. Let the adventure begin! 🗺️✨ ",
       },
       {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Tailoring experiences to match your unique style. Elevate your moments with our unparalleled customization services. ✨🎨 ",
    },
    
]

const ServiceList = () => {
  return (
  <>
     {servicesData.map((item,index)=> (
       <Col lg='3' key={index}>
          <ServiceCard item={item}/>
       </Col>
      ))}
  </>
  );
};

export default ServiceList