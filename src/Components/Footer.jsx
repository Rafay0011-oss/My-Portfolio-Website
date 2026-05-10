import React from 'react'
import "./Footer.css"
import UA from "../assets/up-arrow.png"
import linkedin from "../assets/linkedin2.png"
import github from "../assets/github.png"
import upwork from "../assets/upwork.png"
import insta from "../assets/instagram.png"
import BG from "../assets/White.jpg"
import useScrollAnimation from "../hooks/useScrollAnimation"

const Footer = () => {
    const [contactRef, contactVisible] = useScrollAnimation({ threshold: 0.2 });
    const [footerRef, footerVisible] = useScrollAnimation({ threshold: 0.3 });

    return (
        <section id="contact-and-footer">
            <img src={BG} alt="" className='bg-image'/>
            <div 
                id="contact"
                ref={contactRef}
            >
                <div className={`contact-left ${contactVisible ? 'animate-fadeInLeft' : 'animate-hidden'}`}>
                    <div className="contact-heading">
                        Abdur Rafay
                    </div>
                    <div className="contact-text">
                        I design beautifully simple things.<br />And I love what I do.
                    </div>
                    <p className="links-label">FIND ME ON</p>
                    <div className="Social-Links">
                        <a className="Linkedin" href="https://www.linkedin.com/in/abdur-rafay-4b77952b0/?skipRedirect=true" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                        <a className="Github" href="https://github.com/Rafay0011-oss" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" />
                        </a>
                        <a className="Upwork" href="https://www.upwork.com/freelancers/~014bc24c47c5777a0c" target="_blank" rel="noopener noreferrer">
                            <img src={upwork} alt="Upwork" />
                        </a>
                        <a className="Instagram" href="https://www.instagram.com/mee.rafay/" rel="noopener noreferrer">
                            <img src={insta} alt="Instagram" />
                        </a>
                    </div>
                </div>
                <div className={`contact-right ${contactVisible ? 'animate-fadeInRight' : 'animate-hidden'}`}>
                    <div className="Hire-Btn">
                        <div>Hire me </div>
                        <img src={UA} alt="Up Arrow" />
                    </div>

                    <div className="contact-accounts">
                        <div className="contact-linkedin social">
                            <div className="contact-link">
                                <a href="#Skills">About</a>
                            </div>
                        </div>

                        <div className="contact-facebook social">
                            <div className="contact-link">
                                <a href="#Services">Services</a>
                            </div>
                        </div>

                        <div className="contact-instagram social">
                            <div className="contact-link">
                                <a href="#projects">Projects</a>
                            </div>
                        </div>

                        <div className="contact-x social">
                            <div className="contact-link">
                                <a href="#Contact">Contact</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <hr />
            <div 
                id="footer"
                ref={footerRef}
                className={footerVisible ? 'animate-fadeInUp' : 'animate-hidden'}
            >
                <div className="footer-left">
                    &copy; 2026 \\ YourWebsiteName. All rights reserved.
                </div>
                <div className="footer-right">
                    Designed by <span style={{ color: "var(--secondary-color-green)", fontWeight: "600" }}>Abdur Rafay</span>
                </div>
            </div>

        </section>
    )
}

export default Footer;
