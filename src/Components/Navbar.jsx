import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav id="Navbar" className={isOpen ? "open" : ""}>
            <div className="left">
                Abdur Rafay
            </div>

            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>

            <div className="mid">
                <ul>
                    <li><a href="/" onClick={() => setIsOpen(false)}>HOME</a></li>
                    <li><a href="#Skills" onClick={() => setIsOpen(false)}>SERVICES</a></li>
                    <li><a href="#Credentials" onClick={() => setIsOpen(false)}>CREDENTIALS</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>PROJECTS</a></li>
                </ul>
            </div>
            
            <div className="right"> 
                <button onClick={() => {
                    document.getElementById('Contact').scrollIntoView({behavior:'smooth' });
                    setIsOpen(false); // Close menu when button is clicked
                }}>
                    GET IN TOUCH
                </button>
            </div>
        </nav>
    );
}

export default Navbar;