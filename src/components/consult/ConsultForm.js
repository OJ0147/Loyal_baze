import React from 'react'
import './ConsultForm.css'
import SelectCountry from '../selectCountry/SelectCountry'


const ConsultForm = () => {
  
  return (
    
    <div className='consultForm-wrapper'>
        <p>Book a Consultation with us</p>
        <form action="">
            <div className="control">
                <input type="text" placeholder='Enter your full name' />
            </div>
            <div className="control">
                <input type="text" placeholder='Enter your work email' />
            </div>
            <div className="control">
                <input type="text" placeholder='Mobile number' />
            </div>
            <div className="control">
                <input type="text" placeholder='Company Name'/>
            </div>
            <div className="control">
                <SelectCountry/>
            </div>
        
            <div className="message-control">
                <textarea name="" id="" cols="30" rows="10" placeholder='Drop a message...'></textarea>
            </div>

            <button className="btn">Send Request</button>
            

        </form>

    </div>
  )
}

export default ConsultForm