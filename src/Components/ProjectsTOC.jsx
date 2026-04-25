import React, { useRef, useState } from 'react';
import "./ProjectsTOC.css"
import BG from "../assets/White.jpg"

const ProjectsTOC = () => {
  
    return (
        <section id="projects">
            <img src={BG} alt="BG" className='bg-image' />

            <div className="projects-heading">
                My Work
            </div>

            <div className="projects-text">
                Some of My Recent Projects
            </div>

            <div className="projects-names">
                <a href="#Business-Websites" className="project">
                    <div className="project-number">01</div>
                    <div className="project-title">Buiness Websites</div>
                </a>
                <a href="#Entertainment-Projects" className="project">
                    <div className="project-number">02</div>
                    <div className="project-title">Entertainment Website</div>
                </a>
                <a href="#UI-UX-Projects" className="project">
                    <div className="project-number">03</div>
                    <div className="project-title">UI/UX Design</div>
                </a>
            </div>
         
        </section>
    )
}

export default ProjectsTOC;