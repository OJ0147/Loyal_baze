import React, { useState } from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {CgProfile} from 'react-icons/cg'
import './RegisterForm.css'
import Modal from '../modal/Modal'


const RegisterForm = () => {
    const [ismodal, setIsModal]=useState(false);
    const closeModal=()=>setIsModal(false);
    const handleSubmit=(e)=>{
        e.preventDefault()
        setIsModal(true)
        
        console.log(ismodal)
    }
  return (
   <>
    {ismodal && <Modal closeModal={closeModal} />}
    <div className='form-wrapper'>
        <form className='flex-column'>
            <div className="form-control">
 
                <input type="text" placeholder='Tell us your name'/>

                <span className='icon'> <CgProfile size={20}/></span>
            </div>

            <div className="form-control">
                <input type="email"  placeholder='Enter your email address' />

                <span className='icon'> <HiOutlineMail size={20}/> </span>
            </div>


            <button type='submit' className='btn' onClick={handleSubmit}>Get early access</button>
            {/* {modal? null : <Modal closeModal={closeModal}/> } */}
        </form>
        <div className="user-wrapper flex-row">
            <div className="user-container flex-row">
                <span>G</span>
                <span>O</span>
                <span>U</span>
                <span>M</span>
            </div>
            <div className="counter">
                <span>+{57} <small>Joined</small> </span>
            </div>
        </div>

    </div>
    </>
  )
}

export default RegisterForm