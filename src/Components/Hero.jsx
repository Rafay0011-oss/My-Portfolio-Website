import React, { useState } from "react";
import "./Hero.css";
import designer from "../assets/Designer.png";
import developer from "../assets/Developer.png";
import mobileHero from "../assets/mobileHero.png";
import myimage from "../assets/myimage2.png";
import linkedin from "../assets/linkedin2.png"
import github from "../assets/github.png"
import upwork from "../assets/upwork.png"
import insta from "../assets/instagram.png"
import react from "../assets/react.png"
import figma from "../assets/figma.png"
import JS from "../assets/Javascript.png"
import BG from "../assets/Black.jpg"

const Home = () => {

  return (
    <div id="Hero-Section">
      <img src={BG} alt="Background" className="bg-image" />
      <div className="Hero-Content">
        <div className="Hero-left">
          <h1 className="Hero-heading">Hi, <br /> I'm Abdur Rafay</h1>
          <p className="Hero-Subheading">I design and develop high-quality websites that perform fast, convert visitors into customers and grow your business.</p>
          <div className="Hero-left-CTA">
            <button onClick={() => {
              document.getElementById("Contact").scrollIntoView({
                behavior: "smooth"
              });
            }}>Get in Touch</button>
            <button onClick={() => {
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth"
              });
            }}>View My Work</button>
          </div>
          <div className="Hero-Social-Links">
            <a className="Hero-Linkedin" href="https://www.linkedin.com/in/abdur-rafay-4b77952b0/?skipRedirect=true" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a className="Hero-Github" href="https://github.com/Rafay0011-oss" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
            <a className="Hero-Upwork" href="https://www.upwork.com/freelancers/~014bc24c47c5777a0c" target="_blank" rel="noopener noreferrer">
              <img src={upwork} alt="Upwork" />
            </a>
            <a className="Hero-Instagram" href="https://www.instagram.com/mee.rafay/" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="Hero-Right">
          <div className="react-icon">
            <img src={react} alt="" />
          </div>
          <div className="figma-icon">
            <img src={figma} alt="" />
          </div>
          <div className="Js-icon">
            <img src={JS} alt="" />
          </div>
          <img src={myimage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home;