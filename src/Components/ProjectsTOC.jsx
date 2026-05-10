import React from 'react';
import "./ProjectsTOC.css"
import BG from "../assets/White.jpg"
import useScrollAnimation from "../hooks/useScrollAnimation"

const ProjectsTOC = () => {
    const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.3 });
    const [project1Ref, project1Visible] = useScrollAnimation({ threshold: 0.2 });
    const [project2Ref, project2Visible] = useScrollAnimation({ threshold: 0.2 });
    const [project3Ref, project3Visible] = useScrollAnimation({ threshold: 0.2 });

    return (
        <section id="projects">
            <img src={BG} alt="BG" className='bg-image' />

            <div 
                ref={headingRef}
                className={`projects-heading ${headingVisible ? 'animate-fadeInDown' : 'animate-hidden'}`}
            >
                My Work
            </div>

            <div className={`projects-text ${headingVisible ? 'animate-fadeInUp' : 'animate-hidden'}`} style={{ animationDelay: '0.2s' }}>
                Some of My Recent Projects
            </div>

            <div className="projects-names">
                <a 
                    ref={project1Ref}
                    href="#Business-Websites" 
                    className={`project ${project1Visible ? 'animate-fadeInUp' : 'animate-hidden'}`}
                    style={{ animationDelay: '0.1s' }}
                >
                    <div className="project-number">01</div>
                    <div className="project-title">Buiness Websites</div>
                </a>
                <a 
                    ref={project2Ref}
                    href="#Entertainment-Projects" 
                    className={`project ${project2Visible ? 'animate-fadeInUp' : 'animate-hidden'}`}
                    style={{ animationDelay: '0.3s' }}
                >
                    <div className="project-number">02</div>
                    <div className="project-title">Entertainment Website</div>
                </a>
                <a 
                    ref={project3Ref}
                    href="#UI-UX-Projects" 
                    className={`project ${project3Visible ? 'animate-fadeInUp' : 'animate-hidden'}`}
                    style={{ animationDelay: '0.5s' }}
                >
                    <div className="project-number">03</div>
                    <div className="project-title">UI/UX Design</div>
                </a>
            </div>
         
        </section>
    )
}

export default ProjectsTOC;