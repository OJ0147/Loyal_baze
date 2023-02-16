import React from 'react'
import './Footer.css'
import {HiBuildingLibrary} from 'react-icons/hi2'
import {CgPhone} from 'react-icons/cg'


const Footer = () => {
  return (
    <footer>
        <div className='footer-wrapper flex-row'>
            <div className="contact">
                <span>
                    <HiBuildingLibrary/>
                </span>
                <small>
                2nd Floor, The Garnet Building, KM14<br />Lekki Epe Expressway, Lagos, Nigeria.
                </small>
            </div>

            <p>Loyalbaze is almost here.</p>

            <div className="contact">
                <span>
                    <CgPhone/>
                </span>
                <small>
                +234 903 618 9485
                </small>
            </div>

        </div>
    </footer>
  )
}

export default Footer