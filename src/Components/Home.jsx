import React, { useState } from "react";
import "./Home.css";
import designer from "../assets/Designer.png";
import developer from "../assets/Developer.png";
import mobileHero from "../assets/mobileHero.png"; 

const Home = () => {
  const [offset, setOffset] = useState(0);

  const handleMouseMove = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const percentage = (x / width) * 100 - 50;
    setOffset(percentage);
  };

  const handleMouseLeave = () => {
    setOffset(0);
  };

  return (
    <div
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image-wrapper">
        {/* Desktop split images */}
        <div
          className="image left"
          style={{ width: `calc(50% - ${offset}%)` }}
        >
          <img
            src={designer}
            alt="designer"
            style={{ transform: `translateX(${offset * -0.8}px)` }}
          />
        </div>

        <div
          className="image right"
          style={{ width: `calc(50% + ${offset}%)` }}
        >
          <img
            src={developer}
            alt="developer"
            style={{ transform: `translateX(${offset * -0.8}px)` }}
          />
        </div>

        {/* Mobile single image */}
        <div className="image mobile-single">
          <img src={mobileHero} alt="designer and developer" />
        </div>
      </div>

      <div
        className="text left-text"
        style={{
          opacity: 1 - offset / 50,
          transform: `translateY(-50%) translateX(${offset * 0.3}px)`,
        }}
      >
        <h1>designer</h1>
        <p>Product designer specialising in UI design and design systems.</p>
      </div>

      <div
        className="text right-text"
        style={{
          opacity: 1 + offset / 50,
          transform: `translateY(-50%) translateX(${offset * 0.3}px)`,
        }}
      >
        <h1>&lt;coder&gt;</h1>
        <p>Frontend developer who writes clean, elegant and efficient code.</p>
      </div>
    </div>
  );
};

export default Home;