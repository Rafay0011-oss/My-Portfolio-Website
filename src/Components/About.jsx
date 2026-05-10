import React from 'react'
import "./About.css"
import BG from "../assets/White.jpg"
import useScrollAnimation from "../hooks/useScrollAnimation"

import react from "../assets/react.png"
import nodejs from "../assets/nodejs.png"
import mongodb from "../assets/mongodb.png"
import javascript from "../assets/Javascript.png"
import figma from "../assets/figma.png"
import illustrator from "../assets/Illustrator.png"

const About = () => {
    const [rightRef, rightVisible] = useScrollAnimation({ threshold: 0.2 });
    const [skillsRef, skillsVisible] = useScrollAnimation({ threshold: 0.2 });
    const [achievementsRef, achievementsVisible] = useScrollAnimation({ threshold: 0.2 });

    return (
        <>
            <div id="Skills">
                <img src={BG} alt="" className='bg-image' />
                <div 
                    ref={rightRef}
                    className={`skills-right ${rightVisible ? 'animate-fadeInLeft' : 'animate-hidden'}`}
                >
                    <div className="skills-right-heading">
                        <h1>What do I help?</h1>
                    </div>
                    <div className="skills-right-text">
                        I'm a web developer and designer passionate about creating visually engaging and highly functional digital experiences.  <br />
                        I enjoy turning ideas into impactful digital products. I'm constantly learning and improving to stay aligned with the latest trends in both design and development.
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
                    
                    <div 
                        ref={skillsRef}
                        className={`skills ${skillsVisible ? 'animate-fadeInRight' : 'animate-hidden'}`}
                    >
                        <div className="skills-heading">
                            Skills
                        </div>
                        <div className="skills-icons">
                            <img src={react} alt="React" className={skillsVisible ? 'skill-icon-animate' : ''} style={{ animationDelay: '0.1s' }} />
                            <img src={nodejs} alt="Node.js" className={skillsVisible ? 'skill-icon-animate' : ''} style={{ animationDelay: '0.2s' }} />
                            <img src={mongodb} alt="MongoDB" className={skillsVisible ? 'skill-icon-animate' : ''} style={{ animationDelay: '0.3s' }} />
                            <img src={javascript} alt="JavaScript" className={skillsVisible ? 'skill-icon-animate' : ''} style={{ animationDelay: '0.4s' }} />
                            <img src={figma} alt="Figma" className={skillsVisible ? 'skill-icon-animate' : ''} style={{ animationDelay: '0.5s' }} />
                            <img src={illustrator} alt="Illustrator" className={skillsVisible ? 'skill-icon-animate' : ''} style={{ animationDelay: '0.6s' }} />
                        </div>
                    </div>
                    <div 
                        ref={achievementsRef}
                        className={`achievements ${achievementsVisible ? 'animate-fadeInUp' : 'animate-hidden'}`}
                        style={{ animationDelay: '0.2s' }}
                    >
                        <div className="achievemnts-heading">
                            Achievements
                        </div>
                        <ul className="achievements-list">
                            <li className={`achievement-item ${achievementsVisible ? 'achievement-animate' : ''}`} style={{ animationDelay: '0.3s' }}>
                                Meta Advanced React Certificate
                            </li>
                            <li className={`achievement-item ${achievementsVisible ? 'achievement-animate' : ''}`} style={{ animationDelay: '0.4s' }}>
                                Meta React Basics Certificate
                            </li>
                            <li className={`achievement-item ${achievementsVisible ? 'achievement-animate' : ''}`} style={{ animationDelay: '0.5s' }}>
                                Meta Javascript Certificate
                            </li>
                            <li className={`achievement-item ${achievementsVisible ? 'achievement-animate' : ''}`} style={{ animationDelay: '0.6s' }}>
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
