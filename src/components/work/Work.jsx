import React from 'react'
import "./work.css"
import WorkBaju from "../../assets/imgs/workbaju.png"

const Work = () => {
  return (
    <section id='work'>
        <div className="rules">
            <div className="rulesTxt">
                <span>- Rules -</span>
            </div>
            <div className="rulesB">
                <div className="rulesC">
                    <h5>General Rules</h5>
                    <p className='txtSatu'>
                        Mic is required to enter the New World server
                    </p>
                    <span>
                        Everyone has a different RP mindset. 
                        Don't dictate how others should roleplay
                    </span>
                    <p>
                        It is forbidden to make other server ads, respect the server you play on
                    </p>
                </div>
                <div className="rulesC">
                    <h5>OOC Rules</h5>
                    <p>
                        It is NOT allowed to discuss OOC (Out of Character) 
                        discussion of your character for any REASON
                    </p>
                    <span>
                        If you need help, please go straight to our Discord and create a ticket for support/assistance.
                    </span>
                </div>
                <div className="rulesC">
                    <h5>Character Creation</h5>
                    <p className='txtSatu'>
                        Your character name must be realistic, not offensive, vulgar, or racist
                    </p>
                    <span>
                        It is forbidden to create characters with artist/figure names with the same background
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work