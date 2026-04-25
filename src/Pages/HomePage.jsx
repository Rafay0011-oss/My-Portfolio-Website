import React from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Services from '../Components/Services'
import Projects from '../Components/ProjectsTOC'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Contact from '../Components/Contact'
import ProjectsHeader from '../Components/Projects/ProjectsHeader'
import BusinessWebsites from '../Components/Projects/BusinessWebsites'
import EntertainmentWebsites from '../Components/Projects/EntertainmentWebsites'
import UIUXprojects from '../Components/Projects/UIUXprojects'
import Js from "../assets/javascript.png"
import react from "../assets/react.png"
import figma from "../assets/figma.png"
import illustrator from "../assets/illustrator.png"
import html from "../assets/html.png"
import css from "../assets/css.png"

const HomePage = () => {
    return (
        <div id='HomePage'>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Projects />

            <ProjectsHeader props={{ title: "Business Websites", description: "A showcase of my work and accomplishments in the field of software development, design, and innovation." }} icon1={Js} icon2={react} />
            <BusinessWebsites />   
            <ProjectsHeader props={{ title: "Entertainment Websites", description: "A collection of creative projects in the entertainment industry." }} icon1={css} icon2={html} />
            <EntertainmentWebsites />
            <ProjectsHeader props={{ title: "UI/UX Designs", description: "A showcase of my UI/UX design work and creative solutions." }} icon1={illustrator} icon2={figma} />
            <UIUXprojects />

            <Contact />  
            <Footer />
        </div>
    )
}

export default HomePage
