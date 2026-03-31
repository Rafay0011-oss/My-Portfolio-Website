import React from 'react'
import "./Projects.css"
import PortfolioCard from './PortfolioCard'

const Projects = () => {
    return (
        <section id="projects">
            <div class="projects-heading">
                My Projects
            </div>
            {/* <div class="project-cards">
            <div class="card project-card-1">
                <div class="project-title">
                    Web Design
                </div>
                <div class="project-text">
                    Gym Website
                </div>
            </div>

            <div class="card project-card-2">
                <div class="project-title">
                    Graphic Design
                </div>
                <div class="project-text">
                    Poster for SE Society
                </div>
            </div>

            <div class="card project-card-3">
                <div class="project-title">
                    Game Design
                </div>
                <div class="project-text">
                    Tic Tac Toe in JS
                </div>
            </div>
        </div> */}
            <div className="project-cards">

                <PortfolioCard
                    category="App Design"
                    title="Food Delivery App"
                    desc="End-to-end UX & UI for a modern ordering experience"
                    tags={["Figma", "UX", "Prototype"]}
                    color="var(--secondary-color-yellow)"
                    textColor="#ffffff"
                    images={[
                        { src: "/screen1.png", w: 70, h: 110, rotate: -6, ty: 8, shape: "phone" },
                        { src: "/screen2.png", w: 70, h: 110, rotate: 5, ty: 0, shape: "phone" },
                    ]}
                    onClick={() => console.log("clicked")}
                />

                <PortfolioCard
                    category="App Design"
                    title="Food Delivery App"
                    desc="End-to-end UX & UI for a modern ordering experience"
                    tags={["Figma", "UX", "Prototype"]}
                    color="var(--secondary-color-green)"
                    textColor="#ffffff"
                    images={[
                        { src: "/screen1.png", w: 70, h: 110, rotate: -6, ty: 8, shape: "phone" },
                        { src: "/screen2.png", w: 70, h: 110, rotate: 5, ty: 0, shape: "phone" },
                    ]}
                    onClick={() => console.log("clicked")}
                />

                <PortfolioCard
                    category="App Design"
                    title="Food Delivery App"
                    desc="End-to-end UX & UI for a modern ordering experience"
                    tags={["Figma", "UX", "Prototype"]}
                    color="var(--secondary-color-red)"
                    textColor="#ffffff"
                    images={[
                        { src: "/screen1.png", w: 70, h: 110, rotate: -6, ty: 8, shape: "phone" },
                        { src: "/screen2.png", w: 70, h: 110, rotate: 5, ty: 0, shape: "phone" },
                    ]}
                    onClick={() => console.log("clicked")}
                />
            </div>
        </section>
    )
}

export default Projects
