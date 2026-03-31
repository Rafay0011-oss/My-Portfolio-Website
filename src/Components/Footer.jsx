import React from 'react'
import "./Footer.css"
import UA from "../assets/up-arrow.png"
import linkedin from "../assets/linkedin2.png"
import github from "../assets/github.png"
import upwork from "../assets/upwork.png"
import insta from "../assets/instagram.png"

const Footer = () => {
    return (
        <section id="contact-and-footer">
            <div id="contact">
                <div className="contact-left">
                    <div class="contact-heading">
                        Abdur Rafay
                    </div>
                    <div class="contact-text">
                        I design beautifully simple things.<br />And I love what I do.
                    </div>
                    <p className="links-label">FIND ME ON</p>
                    <div className="Social-Links">
                        <a className="Linkedin" href="https://www.linkedin.com/in/abdur-rafay" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                        <a className="Github" href="https://github.com/rafay0011-oss" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" />
                        </a>
                        <a className="Upwork" href="https://www.upwork.com/freelancers/~01d1978d1503cbb4cd" target="_blank" rel="noopener noreferrer">
                            <img src={upwork} alt="Upwork" />
                        </a>
                        <a className="Instagram" href="https://www.instagram.com/mee.rafay/" rel="noopener noreferrer">
                            <img src={insta} alt="Instagram" />
                        </a>
                    </div>
                </div>
                <div class="contact-right">
                    <div class="Hire-Btn">
                        <div>Hire me </div>
                        <img src={UA} alt="Up Arrow" />
                    </div>
                 
                    <div class="contact-accounts">
                        <div class="contact-linkedin social">
                            <div class="contact-link">
                                <a href="#Skills">Services</a>
                            </div>
                        </div>
            
                        <div class="contact-facebook social">
                            <div class="contact-link">
                                <a href="#Experience">Crediantials</a>
                            </div>
                        </div>

                        <div class="contact-instagram social">
                            <div class="contact-link">
                                <a href="#projects">Projects</a>
                            </div>
                        </div>

                        <div class="contact-x social">
                            <div class="contact-link">
                                <a href="#Contact">Contact</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <hr />
            <div id="footer">
                <div className="footer-left">
                    &copy; 2025 YourWebsiteName. All rights reserved.
                </div>
                <div className="footer-right">
                    Designed by <span style={{ color: "var(--secondary-color-green)", fontWeight: "600" }}>Abdur Rafay</span>
                </div>
            </div>

        </section>
    )
}

export default Footer;
