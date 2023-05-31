import React from 'react'
import Aboutuspic from '../../assets/imgs/logo.png'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
        <div className="footerTxt">
            <img src={Aboutuspic} alt="" />
            <span>Find Us!</span>
        </div>
        <div className="footerLink">
            <a href="https://www.tiktok.com/@newworldindo_roleplay"><i class="uil uil-video"></i>Tiktok</a>
            <a href="https://www.instagram.com/newworld_roleplay/"><i class="uil uil-instagram"></i>Instagram</a>
        </div>
        <div className="footerSosmed">
            <a href="https://instagram.com/aryaintrn_">© Copyright </a>
            <a className='namaWeb' href="https://www.youtube.com/channel/UCjI_QF-54CK3t1byVPDGVHQ">INTRN.</a>
            <a href="https://www.tiktok.com/@aryaintrn?_t=8cfbjM4PDUH&_r=1">All Rights Reserved</a>
        </div>
    </section>
  )
}

export default Contact