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
import AWS1 from "../assets/project-images/Artboard1.png"
import AWS2 from "../assets/project-images/Artboard2.png"
import HD1 from "../assets/project-images/Home-Decore-UI/Home-page.jpg"
import HD2 from "../assets/project-images/Home-Decore-UI/Product-Detail.jpg"
import HD3 from "../assets/project-images/Home-Decore-UI/Shopping-Cart.jpg"
import N1 from "../assets/project-images/Nexus/Nexus1.png"
import N2 from "../assets/project-images/Nexus/Nexus2.png"
import N3 from "../assets/project-images/Nexus/Nexus3.png"
import PortfolioCard from './PortfolioCard'

const Projects = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

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

    const totalCards = 2;

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
                <PortfolioCard
                    className="card"
                    title='Web Project'
                    subtitle='Gaming Community Website'
                    backgroundColor="var(--secondary-color-red)"
                    imageContainerStyle={{
                        bottom: "11px",
                        right: "3px",
                        gap: "14px"
                    }}
                    images={[
                        { src: GamingCommunityHome, width: "118px", rotate: -10 },
                        { src: GamingCommunityAbout, width: "118px", rotate: -10, marginBottom: "-10px" },
                        { src: GamingCommunityFeedback, width: "118px", rotate: -10, marginBottom: "-1px" },
                    ]}
                />
            
                <PortfolioCard
                    className="card"
                    title='UI Design Project'
                    subtitle='Home Decor Items Website UI Design'
                    backgroundColor="var(--secondary-color-green)"
                    imageContainerStyle={{
                        bottom: "-100px",
                        right: "20px",
                        gap: "11px"
                    }}
                    images={[
                        { src: HD1, width: "100px", rotate: -12 },
                        { src: HD2, width: "100px", rotate: -12, marginBottom: "66px" },
                        { src: HD3, width: "100px", rotate: -12, marginBottom: "132px" },
                    ]}
                />

                <PortfolioCard
                    className="card"
                    title='Web Project'
                    subtitle='Gym Website'
                    backgroundColor="var(--secondary-color-yellow)"
                    imageContainerStyle={{
                        bottom: "-236px",
                        right: "3px",
                        gap: "20px"
                    }}
                    images={[
                        { src: Gymlaptopimg, width: "185px", rotate: -18 },
                        { src: GymPhoneimg, width: "92px", rotate: -18, marginBottom: "-10px" }
                    ]}
                />
                
                <PortfolioCard
                    className="card"
                    title='App Project'
                    subtitle='Food Delivery App'
                    backgroundColor="#17a0d6"
                    imageContainerStyle={{
                        bottom: "-11px",
                        right: "30px",
                        gap: "11px"
                    }}
                    images={[
                        { src: Mealo4, width: "100px", rotate: -5 },
                        { src: Mealo2, width: "100px", rotate: -5 },
                        { src: Mealo3, width: "100px", rotate: -5 },
                    ]}
                />

                <PortfolioCard
                    className="card"
                    title='Web Project'
                    subtitle='Nexus App'
                    backgroundColor="#52da40"
                    imageContainerStyle={{
                        bottom: "35px",
                        right: "35px",
                        gap: "0px"
                    }}
                    images={[
                        { src: N3, width: "170px", rotate: 10 },
                        { src: N2, width: "145px", rotate: -5 },
                    ]}
                />

                
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
        </section>
    )
}

export default Projects