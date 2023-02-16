import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'
// import tick from '../../assets/tick.svg'
import tickgif from '../../assets/tick-loop-unscreen.gif'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Modal = ({closeModal}) => {
   
  return ReactDOM.createPortal (
    <div className='overlay' id='popupScreen' onClick={closeModal}>
        <div data-aos="zoom-in" data-aos-duration="500" className="modal flex-column">
           
            <span><img src={tickgif} alt="congratulations"/></span>
            
            <div >
                <h3>Congratulations</h3>
                <p>Great move! You're one step closer to getting your hands on the product. Please check your mail for more information.</p>
            </div>
        </div>
    </div>, 
    document.getElementById('popupScreen')
  )
}

export default Modal