import React, { useEffect } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import './Header.css'
import RegisterForm from '../register/RegisterForm'
import eclipse from '../../assets/Eclipse.svg'
import eclipseBlur from '../../assets/Eclipse-blur-full.svg'
import twinkleStar from '../../assets/twinkling-star.svg'
import curlyArrow from '../../assets/arrow.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Header = () => {
    useEffect(()=>{
        AOS.init({duration:500})
    
    },[])
  return (
    <header className='header'>
        <nav className='flex-row center-container'>
            <div className="logo-wrapper">
                <img src={logo} alt="loyalbase" />
            </div>

            <Link className="nav-btn" to='main'spy={true} smooth={true} offset={-100} duration={500}> Get Priority Access </Link>
            
        </nav>
        <section className="header-content center-container">
            <div className="header-text center-text" >
                <h1 data-aos="fade-down">Turn your best customers into <span> Loyal fans </span> </h1>

                <p data-aos="fade-right"> Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers. With our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business. Sign up now to get early access.</p>
            </div>

            <div data-aos="fade-up" className="register-form">
                <RegisterForm/>
            </div>
        </section>

        <div data-aos="zoom-in" data-aos-duration="5000" className="background-asset eclipse-blur">
            <img src={eclipseBlur} alt="eclipse" />
        </div>
        <div data-aos="zoom-out" data-aos-duration="3000" className="background-asset eclipse-medium">
            <img src={eclipse} alt="eclipse" />
        </div>
        <div  data-aos="fade-left" data-aos-duration="1000"className="background-asset eclipse-small">
            <img src={eclipse} alt="eclipse" />
        </div>
        <span data-aos="fade-up" data-aos-duration="500" className="background-asset twinkling-star1">
            <img src={twinkleStar} alt="Twinkle star" />
        </span>
        <span className="background-asset twinkling-star2">
            <img src={twinkleStar} alt="Twinkle star" />
        </span>
        <span className="background-asset twinkling-star3">
            <img src={twinkleStar} alt="Twinkle star" />
        </span>
        <span className="background-asset twinkling-star4">
            <img src={twinkleStar} alt="Twinkle star" />
        </span>
        <div className="background-asset arrow">
            <img src={curlyArrow} alt="" />
        </div>

    </header>
  )
}

export default Header