import React from 'react'
import BG from "../../assets/White.jpg"
import GammingMockup1 from "../../assets/project-images/Gamming-Community-Website/Mockup1.png"
import GammingMockup2 from "../../assets/project-images/Gamming-Community-Website/Mockup2.png"
import "./EntertainmentWebsites.css"


const EntertainmentWebsites = () => {
    return (
        <div id='Entertainment-Projects'>
            <img src={BG} alt="" className="bg-image" />
            <div className="Entertainment-project-1">
                <h1 className='project-1-heading'>Gaming Community Websites</h1>
                <p className='project-1-description'>As a passionate gamer, I have always been fascinated by the vibrant and dynamic world of gaming communities. Over the years, I have had the opportunity to create several gaming community websites that serve as hubs for gamers to connect, share their experiences, and stay updated on the latest gaming news and trends.</p>
                <div className="project-1-mockups">
                    <img src={GammingMockup1} alt="Gaming Community Website Mockup 1" className='mockup-1' />
                    <img src={GammingMockup2} alt="Gaming Community Website Mockup 2" className='mockup-2' />
                </div>
                <div className="game-project-1-details">
                    <ul className='game-project-1-features'>
                        <h2 className='game-project-1-title'>Key Features</h2>
                        <li>Community Forums: A dedicated space for gamers to discuss their favorite games, share tips and tricks, and connect with like-minded individuals.</li>
                        <li>News and Updates: Regularly updated content featuring the latest gaming news, reviews, and upcoming releases to keep the community informed.</li>
                        <li>Event Calendar: A calendar of gaming events, tournaments, and meetups to encourage community engagement and participation.</li>
                        <li>User Profiles: Personalized profiles for community members to showcase their gaming achievements, favorite games, and connect with others.</li>
                    </ul>
                    <ul className='game-project-1-stacks-list'>
                        <h2 className='game-project-1-stacks'>Technologies Used</h2>
                        <li>React: For building the user interface and creating a responsive and interactive experience.</li>
                        <li>Node.js: For handling server-side logic and managing user authentication and data storage.</li>
                        <li>MongoDB: For storing user profiles, forum posts, and other community-related data.</li>
                        <li>Express.js: For creating RESTful APIs to facilitate communication between the frontend and backend.</li>
                    </ul>
                </div>
                <button className='btn live-preview' onClick={() => window.location.href='https://gaming-community-website.vercel.app'}>Live Preview</button>
                <button className='btn source-code' onClick={() => window.location.href='https://github.com/Rafay0011-oss/Gaming-Community-Website'}>Source Code</button>
            </div>

        </div>
    )
}

export default EntertainmentWebsites
