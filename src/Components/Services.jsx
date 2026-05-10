import React from 'react'
import "./Services.css"
import BG from "../assets/Black.jpg"
import WDimg from "../assets/imac.png"
import GDimg from "../assets/graphic-design.png"
import ADimg from "../assets/cell-phone.png"
import useScrollAnimation from "../hooks/useScrollAnimation"

const Services = () => {
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.3 });
  const [card1Ref, card1Visible] = useScrollAnimation({ threshold: 0.2 });
  const [card2Ref, card2Visible] = useScrollAnimation({ threshold: 0.2 });
  const [card3Ref, card3Visible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="Services">
      <img src={BG} alt="BG" className='bg-image' />
      <div 
        ref={headingRef}
        className={`Services-heading ${headingVisible ? 'animate-fadeInDown' : 'animate-hidden'}`}
      >
        My Services
      </div>
      <div className={`services-text ${headingVisible ? 'animate-fadeInUp' : 'animate-hidden'}`} style={{ animationDelay: '0.2s' }}>
        What I build
      </div>
      <div className="Services-cards">
        <div 
          ref={card1Ref}
          className={`Services-card card-1 ${card1Visible ? 'animate-fadeInUp' : 'animate-hidden'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <div className="card-title">
            <div className="Services-card-content-heading">
              Business Websites
            </div>
            <div className="Services-card-img">
              <img src={WDimg} />
            </div>
          </div>

          <div className="Services-card-content">
            - Modern, brand-focused Website. <br />
            - Optimized for high performance and fast load speeds. <br />
            - SEO-ready architecture to drive organic traffic. <br />
            - Fully responsive layout for seamless cross-device usage. <br />
            - Strategic lead-generation forms and clear call-to-action sections.
          </div>
        </div>
        <div 
          ref={card2Ref}
          className={`Services-card card-2 ${card2Visible ? 'animate-fadeInUp' : 'animate-hidden'}`}
          style={{ animationDelay: '0.25s' }}
        >
          <div className="card-title">
            <div className="Services-card-content-heading">
              Portfolio Websites
            </div>
            <div className="Services-card-img">
              <img src={GDimg} />
            </div>
          </div>

          <div className="Services-card-content">
            - Seamless integration for resumes and professional contact links. <br />
            - Clean, aesthetic layouts tailored to your creative work. <br />
            - High-impact design to capture recruiter and client attention. <br />
            - Fluid user experience built to showcase your personal brand. <br />
            - Custom-coded, unique interactive elements and animations.
          </div>
        </div>
        <div 
          ref={card3Ref}
          className={`Services-card card-3 ${card3Visible ? 'animate-fadeInUp' : 'animate-hidden'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="card-title">
            <div className="Services-card-content-heading">
              Ecommerce Websites
            </div>
            <div className="Services-card-img">
              <img src={ADimg} />
            </div>
          </div>

          <div className="Services-card-content">
            - Mobile-first design to ensure a smooth on-the-go shopping experience. <br />  
            - Organized, high-performance product grids for better browsing. <br />
            - Secure and reliable payment gateway integration. <br /> 
            - Frictionless checkout flows designed to maximize conversions. <br />
            - Scalable database management for your product catalogs. <br />  
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
