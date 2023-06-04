import React from 'react';
import Slider from 'react-slick';
import styles from '../styles/Service.module.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ServiceSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: dots => (
      <ul style={{ backgroundColor: 'transparent', bottom: '-25px' }}>{dots}</ul>
    ),
    customPaging: () => (
      <div
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          margin: '0 8px',
        }}
      />
    ),
  };

  return (
    <div className={styles.services}>
      <Slider {...settings}>
        
        <div className={styles.slide}>
          <div className={styles.slide_inner}>
          <div className={styles.imgCon}>
              <img src="/custom1.png" alt="custom website" />
            </div>
          <div  className={styles.details} >
            <h3>Custom Built Website</h3>
            <p> With expertise in React, Node.js, and JavaScript, I specialize in developing custom websites tailored to your unique vision. From intuitive user interfaces to seamless functionality, I build dynamic 
                websites that captivate your audience and drive results</p>
          </div>  
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.slide_inner}>
          <div className={styles.imgCon}>
              <img src="/design.png" alt="web design" />
            </div>
          <div  className={styles.details} >
            <h3>CMS Web Design and Developement</h3>
            <p>Let me handle your website design and development needs on CMS platforms like Wix, Shopify, and Squarespace. I bring your brand to life, creating stunning websites with streamlined navigation, visually appealing designs, and optimized
                 performance to help you stand out in the digital landscape</p>
          </div>  
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.slide_inner}>
          <div className={styles.imgCon}>
              <img src="/gpt.png" alt="GPT chatbot" />
            </div>
          <div  className={styles.details} >
            <h3>GPT ChatBot Integration</h3>
            <p>Enhance your website&apos;s interactivity and customer support 
                with intelligent GPT-powered chatbots. As a skilled developer, I can seamlessly integrate chatbot technology into your website, providing personalized experiences, automating conversations,
                 and ensuring round-the-clock assistance for your users.</p>
          </div>  
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.slide_inner}>
          <div className={styles.imgCon}>
              <img src="/social.jpg" alt="SM bot" />
            </div>
          <div  className={styles.details} >
            <h3>Social Media Bot Development</h3>
            <p>Amplify your social media presence through bespoke bot
                 development. As a solo professional, I specialize in creating smart social media bots that automate tasks, generate targeted content, and engage your audience. Boost efficiency,
                 expand your reach, and create a vibrant online community</p>
          </div>  
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ServiceSection;
