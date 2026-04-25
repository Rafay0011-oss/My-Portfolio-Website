import React from 'react'
import "./About.css"
import BG from "../assets/White.jpg"

import react from "../assets/react.png"
import nodejs from "../assets/nodejs.png"
import mongodb from "../assets/mongodb.png"
import javascript from "../assets/Javascript.png"
import figma from "../assets/figma.png"
import illustrator from "../assets/Illustrator.png"

const About = () => {
    return (
        <>
            <div id="Skills">
                <img src={BG} alt="" className='bg-image' />
                <div className="skills-right">
                    <div className="skills-right-heading">
                        <h1>What do I help?</h1>
                    </div>
                    <div className="skills-right-text">
                        I'm a web developer and designer passionate about creating visually engaging and highly functional digital experiences.  <br />
                        I enjoy turning ideas into impactful digital products. I’m constantly learning and improving to stay aligned with the latest trends in both design and development.
                    </div>
                    <div className="skills-right-figures">
                        <div className="skills-right-figures-head">
                            5+
                        </div>
                        <div className="skills-right-figures-text">
                            Real World <br /> Projects Completed
                        </div>
                    </div>
                </div>
                <div className="skills-left">
                    
                    <div className="skills">
                        <div className="skills-heading">
                            Skills
                        </div>
                        <div className="skills-icons">
                            <img src={react} alt="React" />
                            <img src={nodejs} alt="Node.js" />
                            <img src={mongodb} alt="MongoDB" />
                            <img src={javascript} alt="JavaScript" />
                            <img src={figma} alt="Figma" />
                            <img src={illustrator} alt="Illustrator" />
                        </div>
                    </div>
                    <div className="achievements">
                        <div className="achievemnts-heading">
                            Achievements
                        </div>
                        <ul className="achievements-list">
                            <li className="achievement-item">
                                Meta Advanced React Certificate
                            </li>
                            <li className="achievement-item">
                                Meta React Basics Certificate
                            </li>
                            <li className="achievement-item">
                                Meta Javascript Certificate
                            </li>
                            <li className="achievement-item">
                                2 month internship as a font-end developer
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
