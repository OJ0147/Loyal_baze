import React, { useEffect } from 'react'
import './Main.css'
import ConsultForm from '../consult/ConsultForm'
import lines from '../../assets/Line.svg'
import twinkleStar from '../../assets/twinkling-star.svg'
import bluestar from '../../assets/blue-star.svg'
import eclipse from '../../assets/Eclipse.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Main = () => {
  useEffect(()=>{
    AOS.init({duration: 500})
  },[])
  return (
    <div className='main-container'>
    <div id='main'className='flex-row-center'>
      <section className="main-text">
        <div data-aos="fade-down" className="header">
          <h1>Priority Access</h1>
        </div>

        <div className="lines">
          <img src={lines} alt="lines" />
        </div>

        <p data-aos="fade-right">Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze. Skip the waitlist and get exclusive priority access to LoyalBaze. Limited slots available. Please tell us a bit about your business and needs and of our consultants will be in touch Immediately!</p>
  
      </section>
      <div data-aos="zoom-in" className="consultForm-container ">
          <ConsultForm />
      </div>
    <div data-aos="zoom-out" data-aos-duration="2000" className="eclipse">
      <img src={eclipse} alt="eclipse" />
    </div>

    <span data-aos="zoom-down" data-aos-duration="1000" className="stars twinkle-star1">
      <img src={twinkleStar} alt="Twinkle star" />
    </span>

    <span className="stars twinkle-star2">
      <img src={twinkleStar} alt="Twinkle star" />
    </span>

    <span className="stars twinkle-star3">
      <img src={twinkleStar} alt="Twinkle star" />
    </span>

    <span className="stars star1">
      <img src={bluestar} alt="star" />
    </span>
    
    <span className="stars star2">
      <img src={bluestar} alt="star" />
    </span>
    </div>

    </div>
  )
}

export default Main