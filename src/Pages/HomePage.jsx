import React from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Experience from '../Components/Experience'
import Projects from '../Components/Projects'
import Footer from '../Components/Footer'
import Home from '../Components/Home'
import Contact from '../Components/Contact'

const HomePage = () => {
    return (
        <div id='HomePage'>
            <Navbar />
            <Home />
            <About />
            <Experience />
            <Projects />  
            <Contact />  
            <Footer />

        </div>
    )
}

export default HomePage
