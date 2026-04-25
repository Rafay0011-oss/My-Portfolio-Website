import React, { useState } from 'react';
import "./Navbar.css";
import BG from "../assets/Black.jpg"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav id="Navbar" className={isOpen ? "open" : ""}>
            <img src={BG} alt="" className='bg-image' />
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
                    <li><a href="#Skills" onClick={() => setIsOpen(false)}>ABOUT</a></li>
                    <li><a href="#Services" onClick={() => setIsOpen(false)}>SERVICES</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>PROJECTS</a></li>
                    <li><a href="#Contact" onClick={() => setIsOpen(false)}>CONTACT</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;