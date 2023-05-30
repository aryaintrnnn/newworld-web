import React from 'react'
import "./work.css"
import WorkBaju from "../../assets/imgs/workbaju.png"

const Work = () => {
  return (
    <section id='work'>
        <div className="kerjaLayout">
            <div className="kerjaTypo">
                <span>Portofolio</span>
                <span>Portofolio</span>
                <span>Portofolio</span>
                <span>Portofolio</span>
            </div>
            <span className="kerjaBuka">Featured Project</span>
        </div>
        <div className="containerKerja">
            <div className="kerja">
                <img src={WorkBaju} alt="" className="kerjaImg" />
                <div className="kerjaTxt">
                    <span className="jmlhKerja">01.</span>
                    <div className="judulKerja">
                        <span>Groovey Clothing Brand</span>
                        <span>Website catalog for a local clothing brand</span>
                    </div>
                </div>
            </div>
            <div className="kerjaLink">
                <a href="" className="linkKerja"><i class="uil uil-arrow-up-left"></i><span>Check Out My Work </span></a>
            </div>
        </div>
    </section>
  )
}

export default Work