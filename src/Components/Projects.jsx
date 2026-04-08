import React, { useRef, useState } from 'react';
import "./Projects.css"
import Gymlaptopimg from "../assets/project-images/Gymlaptopimg.png"
import GymPhoneimg from "../assets/project-images/GymPhoneimg.png"
import GamingCommunityHome from "../assets/project-images/GamingCommunityHome.png"
import GamingCommunityAbout from "../assets/project-images/GamingCommunityAbout.png"
import GamingCommunityFeedback from "../assets/project-images/GamingCommunityFeedback.png"
import Mealo2 from "../assets/project-images/Mealo/Mealo-2.jpeg"
import Mealo3 from "../assets/project-images/Mealo/Mealo-3.jpeg"
import Mealo4 from "../assets/project-images/Mealo/Mealo-4.jpeg"
import HD1 from "../assets/project-images/Home-Decore-UI/Home-page.jpg"
import HD2 from "../assets/project-images/Home-Decore-UI/Product-Detail.jpg"
import HD3 from "../assets/project-images/Home-Decore-UI/Shopping-Cart.jpg"
import N2 from "../assets/project-images/Nexus/Nexus2.png"
import N3 from "../assets/project-images/Nexus/Nexus3.png"
import PortfolioCard from './PortfolioCard'

const Projects = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const handleScroll = () => {
        if (!containerRef.current || containerRef.current.children.length === 0) return;

        const container = containerRef.current;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.children[0].offsetWidth + 20;

        const newIndex = Math.round(scrollLeft / cardWidth);
        setActiveIndex(newIndex);
    };

    const scrollToCard = (index) => {
        if (!containerRef.current || containerRef.current.children.length === 0) return;

        const container = containerRef.current;
        const cardWidth = container.children[0].offsetWidth + 20;

        container.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth'
        });
        setActiveIndex(index);
    };

    const openModal = (data) => {
        setModalData(data);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; 
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalData(null);
        document.body.style.overflow = 'unset'; 
    };

    const totalCards = 5; 

    return (
        <section id="projects">
            <div className="projects-heading">
                My Projects
            </div>

            <div
                className="project-cards"
                ref={containerRef}
                onScroll={handleScroll}
            >
                <div className="card-wrapper" onClick={() => openModal({
                    title: 'Web Project',
                    subtitle: 'Gaming Community Website',
                    description: 'A dedicated platform for gamers to connect, share feedback, and discover local businesses. Built with React and optimized for performance.',
                    techStack: 'React, Node.js, CSS Modules',
                    liveLink: '#',
                    githubLink: '#'
                })}>
                    <PortfolioCard
                        className="card"
                        title='Web Project'
                        subtitle='Gaming Community Website'
                        backgroundColor="var(--secondary-color-red)"
                        imageContainerStyle={{ bottom: "11px", right: "3px", gap: "14px" }}
                        images={[
                            { src: GamingCommunityHome, width: "118px", rotate: -10 },
                            { src: GamingCommunityAbout, width: "118px", rotate: -10, marginBottom: "-10px" },
                            { src: GamingCommunityFeedback, width: "118px", rotate: -10, marginBottom: "-1px" },
                        ]}
                    />
                </div>

                <div className="card-wrapper" onClick={() => openModal({
                    title: 'UI Design Project',
                    subtitle: 'Home Decor Items Website UI Design',
                    description: 'A modern, clean e-commerce UI design focused on providing a seamless user experience for purchasing home decor items.',
                    techStack: 'Figma, Adobe Illustrator',
                    liveLink: '#', 
                    githubLink: null 
                })}>
                    <PortfolioCard
                        className="card"
                        title='UI Design Project'
                        subtitle='Home Decor Items Website UI Design'
                        backgroundColor="var(--secondary-color-green)"
                        imageContainerStyle={{ bottom: "-100px", right: "20px", gap: "11px" }}
                        images={[
                            { src: HD1, width: "100px", rotate: -12 },
                            { src: HD2, width: "100px", rotate: -12, marginBottom: "66px" },
                            { src: HD3, width: "100px", rotate: -12, marginBottom: "132px" },
                        ]}
                    />
                </div>

                <div className="card-wrapper" onClick={() => openModal({
                    title: 'Web Project',
                    subtitle: 'Gym Website',
                    description: 'A responsive landing page and membership portal for a local fitness center. Features include class schedules and trainer bios.',
                    techStack: 'React, Tailwind CSS',
                    liveLink: '#',
                    githubLink: '#'
                })}>
                    <PortfolioCard
                        className="card"
                        title='Web Project'
                        subtitle='Gym Website'
                        backgroundColor="var(--secondary-color-yellow)"
                        imageContainerStyle={{ bottom: "-236px", right: "3px", gap: "20px" }}
                        images={[
                            { src: Gymlaptopimg, width: "185px", rotate: -18 },
                            { src: GymPhoneimg, width: "92px", rotate: -18, marginBottom: "-10px" }
                        ]}
                    />
                </div>
                
                <div className="card-wrapper" onClick={() => openModal({
                    title: 'App Project',
                    subtitle: 'Food Delivery App',
                    description: 'A mobile application designed to streamline the food ordering process, featuring real-time order tracking and secure payment gateways.',
                    techStack: 'React Native, Firebase',
                    liveLink: '#',
                    githubLink: '#'
                })}>
                    <PortfolioCard
                        className="card"
                        title='App Project'
                        subtitle='Food Delivery App'
                        backgroundColor="#17a0d6"
                        imageContainerStyle={{ bottom: "-11px", right: "30px", gap: "11px" }}
                        images={[
                            { src: Mealo4, width: "100px", rotate: -5 },
                            { src: Mealo2, width: "100px", rotate: -5 },
                            { src: Mealo3, width: "100px", rotate: -5 },
                        ]}
                    />
                </div>

                <div className="card-wrapper" onClick={() => openModal({
                    title: 'Web Project',
                    subtitle: 'Nexus App',
                    description: 'A sophisticated web application aimed at enhancing productivity and team collaboration.',
                    techStack: 'MERN Stack (MongoDB, Express, React, Node.js)',
                    liveLink: '#',
                    githubLink: '#'
                })}>
                    <PortfolioCard
                        className="card"
                        title='Web Project'
                        subtitle='Nexus App'
                        backgroundColor="#52da40"
                        imageContainerStyle={{ bottom: "35px", right: "35px", gap: "0px" }}
                        images={[
                            { src: N3, width: "170px", rotate: 10 },
                            { src: N2, width: "145px", rotate: -5 },
                        ]}
                    />
                </div>
            </div>

            <div className="slider-dots">
                {Array.from({ length: totalCards }).map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => scrollToCard(index)}
                    ></div>
                ))}
            </div>

            {isModalOpen && modalData && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeModal}>&times;</button>
                        
                        <div className="modal-header">
                            <h2>{modalData.subtitle}</h2>
                            <span className="modal-category">{modalData.title}</span>
                        </div>
                        
                        <p className="modal-description">{modalData.description}</p>
                        
                        <div className="modal-tech">
                            <strong>Technologies used:</strong> {modalData.techStack}
                        </div>

                        <div className="modal-links">
                            {modalData.liveLink && (
                                <a href={modalData.liveLink} target="_blank" rel="noreferrer" className="modal-btn primary">
                                    View Live
                                </a>
                            )}
                            {modalData.githubLink && (
                                <a href={modalData.githubLink} target="_blank" rel="noreferrer" className="modal-btn secondary">
                                    Source Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects;