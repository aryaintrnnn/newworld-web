import React from 'react'
import Aboutuspic from '../../assets/imgs/contactus.jpg'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
        <div className="footerTxt">
            <img src={Aboutuspic} alt="" />
            <span>Contact Me!</span>
        </div>
        <div className="footerLink">
            <a href="#"><i class="uil uil-envelope-edit"></i> aryaintaran24@gmail.com</a>
            <a href="https://wa.me/628113809061"><i class="uil uil-whatsapp"></i> +62 811 380 9061</a>
        </div>
        <div className="footerSosmed">
            <a href="https://instagram.com/aryaintrn_">Instagram</a>
            <a href="https://www.youtube.com/channel/UCjI_QF-54CK3t1byVPDGVHQ">Youtube</a>
            <a href="https://www.tiktok.com/@aryaintrn?_t=8cfbjM4PDUH&_r=1">Tiktok</a>
        </div>
    </section>
  )
}

export default Contact