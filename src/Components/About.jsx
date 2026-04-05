import React from 'react'
import "./About.css"
import WDimg from "../assets/imac.png"
import GDimg from "../assets/graphic-design.png"
import ADimg from "../assets/cell-phone.png"

const About = () => {
    return (

        <div id="Skills">
            <div className="skills-heading">
                My Services
            </div>
            <div className="skills-content">
                <div class="skills-left">
                    <div class="skills-card card-1">
                        <div class="skills-card-img">
                            <img src={WDimg} />
                        </div>
                        <div class="skills-card-content">
                            <div class="skills-card-content-heading">
                                Web Development
                            </div>
                            <div class="skills-card-content-text">
                                Front End Developer
                            </div>
                        </div>
                    </div>
                    <div class="skills-card card-2">
                        <div class="skills-card-img">
                            <img src={GDimg} />
                        </div>
                        <div class="skills-card-content">
                            <div class="skills-card-content-heading">
                                Graphic Designing
                            </div>
                            <div class="skills-card-content-text">
                                Social Media Designer
                            </div>
                        </div>
                    </div>
                    <div class="skills-card card-3">
                        <div class="skills-card-img">
                            <img src={ADimg} />
                        </div>
                        <div class="skills-card-content">
                            <div class="skills-card-content-heading">
                                AI Development
                            </div>
                            <div class="skills-card-content-text">
                                Agentic AI Developer
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skills-right">
                    <div class="skills-right-heading">
                        <h1>What do I help?</h1>
                    </div>
                    <div class="skills-right-text">
                        I’m a web developer and designer passionate about creating visually engaging and highly functional digital experiences.  <br />
                        I enjoy turning ideas into impactful digital products. I’m constantly learning and improving to stay aligned with the latest trends in both design and development.
                    </div>
                    <div class="skills-right-figures">
                        <div class="skills-right-figures-head">
                            50+
                        </div>
                        <div class="skills-right-figures-text">
                            Projcts Completed
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
