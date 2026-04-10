import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    // State to track if the mobile menu is open or closed
    const [isOpen, setIsOpen] = useState(false);

    return (
        // Add the 'open' class conditionally based on state
        <nav id="Navbar" className={isOpen ? "open" : ""}>
            <div className="left">
                Abdur Rafay
            </div>

            {/* Hamburger Icon (3 lines) */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>

            <div className="mid">
                <ul>
                    {/* Close the menu when a link is clicked */}
                    <li><a href="/" onClick={() => setIsOpen(false)}>HOME</a></li>
                    <li><a href="#Skills" onClick={() => setIsOpen(false)}>SERVICES</a></li>
                    <li><a href="#Experience" onClick={() => setIsOpen(false)}>CREDENTIALS</a></li>
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