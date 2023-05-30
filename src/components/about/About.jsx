import React from 'react'
import "./about.css"

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="aboutText">
        <span className="aboutMeText">about me</span>
        <span className="aboutMeText">about me</span>
        <span className="aboutMeText">about me</span>
      </div>
      <div className="aboutIsi">
        <h1 className="abtIsi">Hello, my name is Arya Ngurah Intaran, I like to create various kinds of websites, currently I am studying for an undergraduate degree at ITB Stikom Bali</h1>
        <a className='btnAbout' href="#">Read More <i class="uil uil-arrow-up-right"></i></a>
      </div>
    </section>
  )
};

export default About