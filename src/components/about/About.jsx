import React from 'react'
import "./about.css"

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="fitur">
        <div className="tittleBar">
          <span>- Our Features -</span>
        </div>
        <div className="box">
          <div className="kartu">
            <h5><i class="uil uil-microphone"></i>Voice In-Game</h5>
          </div>
          <div className="kartu">
            <h5><i class="uil uil-university"></i>Robbery System</h5>
          </div>
          <div className="kartu">
            <h5><i class="uil uil-bag"></i>Whitelist Jobs</h5>
          </div>
        </div>
        <div className="box">
          <div className="kartu">
            <h5><i class="uil uil-suitcase"></i>Non Whitelist Jobs</h5>
          </div>
          <div className="kartu">
            <h5><i class="uil uil-ankh"></i>Custom Peds</h5>
          </div>
          <div className="kartu">
            <h5><i class="uil uil-setting"></i>Optimize FPS</h5>
          </div>
        </div>
        <div className="box">
          <div className="kartu">
            <h5><i class="uil uil-signal"></i>Low Ping And PL</h5>
          </div>
          <div className="kartu">
            <h5><i class="uil uil-layer-group"></i>Max 100 Player</h5>
          </div>
          <div className="kartu">
            <h5><i class="uil uil-apps"></i>Many Features</h5>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About