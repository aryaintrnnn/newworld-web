import {useState} from 'react'
import "./navbar.css"

const Navbar = () => {
    const [icon, setIcon] = useState("#home")
  return (
    <nav>
        <div className="navUtama">
            <span>Welcome to</span>
            <span>Arya Intaran Website</span>
        </div>        
        <div className="containerNav">
            <div className="navMenuKanan">
                <a href="#home" onClick={() => setIcon("#home")} className={icon == "#home" ? "iconAktif" : ""} >
                    <i class="uil uil-house-user navIcon"></i>
                    <span className='navText'>Home</span>
                </a>
                <a href="#about" onClick={() => setIcon("#about")} className={icon == "#about" ? "iconAktif" : ""} >
                    <i class="uil uil-cloud-info navIcon"></i>
                    <span className='navText'>About</span> 
                </a>
                <a href="#work" onClick={() => setIcon("#work")} className={icon == "#work" ? "iconAktif" : ""} >
                    <i class="uil uil-archive navIcon"></i>    
                    <span className='navText'>Work</span> 
                </a>
            </div>
            <div className="navMenuBawah">
                <a href="#service" onClick={() => setIcon("#service")} className={icon == "#service" ? "iconAktif" : ""} >
                    <i class="uil uil-apps navIcon"></i>
                    <span className='navText'>Service</span> 
                </a>
                <a href="#contact" onClick={() => setIcon("#contact")} className={icon == "#contact" ? "iconAktif" : ""} >
                    <i class="uil uil-mobile-android navIcon"></i>
                    <span className='navText'>Contact</span> 
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar