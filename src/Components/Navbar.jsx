import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav id="Navbar">
            <div class="left">
                Abdur Rafay
            </div>
            <div class="mid">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="#Skills">SERVICES</a></li>
                    <li><a href="#Experience">CREDENTIALS</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                </ul>
            </div>
            <div className="right"> 
                    <button onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })}>
                        GET IN TOUCH
                    </button>
            </div>
        </nav>
    )
}

export default Navbar
