import React from 'react'
import './BusinessWebsites.css'
import BG from "../../assets/White.jpg"
import NexusMockup from "../../assets/project-images/Nexus/Nexus-Mockup.png"
import GymMockup from "../../assets/project-images/Gym-Website/GymMockup.png"

const BusinessWebsites = () => {
    return (
        <div id='Business-Websites'>
            <img src={BG} alt='Business Nexus Website' className='bg-image' />
            <div className="project-1">
                <h1 className='project-1-heading'>Business Nexus Platform</h1>
                <p className='project-1-description'>The platform where entrepreneurs and investors meet, connect, and grow together.
                    BusinessNexus is a dedicated business networking hub designed to bridge the gap between visionary founders and forward-thinking investors. We make it easier than ever to find the right partner, pitch the right idea, and fund the right opportunity — all in one place.
                </p>
                <div className="project-1-details">
                    <div className="details-1-left">
                        <h2 className='project-1-subheading'>Key Features:</h2>
                        <ul className='project-1-features'>
                            <li>Comprehensive Profiles: Create detailed profiles showcasing your business, team, and vision.</li>
                            <li>Intelligent Matching: Our algorithm connects you with investors who share your industry focus and values.</li>
                            <li>Secure Communication: Engage in private messaging and video calls to build trust and rapport.</li>
                            <li>Resource Library: Access a wealth of resources, including pitch templates, market insights, and funding guides.</li>
                        </ul>
                        <div className="project-1-tech-stacks">
                            <h3 className='project-1-tech-heading'>Tech Stack:</h3>
                            <ul className='project-1-tech-list'>
                                <li>Frontend: React, Tailwind CSS</li>
                                <li>Backend: Node.js, Express</li>
                                <li>Database: MongoDB</li>
                                <li>Hosting: Vercel</li>
                            </ul>
                        </div>
                        <button className='btn live-preview' onClick={() => window.location.href='https://nexus-iota-five-five.vercel.app'}>Live Preview</button>
                        <button className='btn source-code' onClick={() => window.location.href='https://github.com/Rafay0011-oss/nexus-iota-five'}>Source Code</button>
                    </div>
s
                    <div className="details-1-right">
                        <img src={NexusMockup} alt="Nexus Mockup" />
                    </div>
                </div>
            </div>

            <div className="line"></div>

            <div className="project-2">
                <h1 className='project-2-heading'>Gym Website</h1>
                <p className='project-2-description'>
                    A sleek and modern gym website designed to attract fitness enthusiasts and provide them with all the information they need to join the gym. The website features a clean and intuitive design, showcasing the gym's facilities, classes, and membership options. With easy navigation and engaging visuals, the website aims to inspire visitors to take the first step towards a healthier lifestyle.
                </p>
                <div className="project-2-details">
                    <div className="details-2-left">
                        <img src={GymMockup} alt="Gym Mockup" />
                    </div>
                    <div className="details-2-right">
                        <h2 className='project-2-subheading'>Key Features:</h2>
                        <ul className='project-2-features'>
                            <li>Responsive Design: The website is fully responsive, ensuring a seamless experience across all devices.</li>
                            <li>Class Schedule: A dynamic class schedule that allows users to view and book classes online.</li>
                            <li>Membership Plans: Clear and concise information about membership options and pricing.</li>
                            <li>Contact Form: An easy-to-use contact form for inquiries and feedback.</li>
                        </ul>
                        <div className="project-2-tech-stacks">
                            <h3 className='project-2-tech-heading'>Tech Stack:</h3>
                            <ul className='project-2-tech-list'>
                                <li>Frontend: React, Tailwind CSS</li>
                                <li>Backend: Node.js, Express</li>
                                <li>Database: MongoDB</li>
                                <li>Hosting: Vercel</li>
                            </ul>
                        </div>
                        <button className='btn live-preview' onClick={() => window.location.href='https://gym-website-frontend-steel.vercel.app'}>Live Preview</button>
                        <button className='btn source-code' onClick={() => window.location.href='https://github.com/Rafay0011-oss/Gym-Website-Frontend'}>Source Code</button>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default BusinessWebsites