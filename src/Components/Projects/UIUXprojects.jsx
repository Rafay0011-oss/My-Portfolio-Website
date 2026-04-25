import React from 'react'
import BG from "../../assets/White.jpg"
import HomeDecor1 from "../../assets/project-images/Home-Decor-UI/Home-Decor-Mockup.png"
import HomeDecor2 from "../../assets/project-images/Home-Decor-UI/Home-Decor-Mockup2.png"
import "./UIUXprojects.css"

const UIUXprojects = () => {
  return (
    <div id='UI-UX-Projects'>
      <img src={BG} alt="UI/UX Design" className='bg-image' />
      <div className="UI-UX-project-1">
        <h2>Home Decor Items Website UI Design</h2>
        <p>Designed a visually appealing and user-friendly website for a home decor items business, showcasing products with an intuitive layout and seamless navigation.</p>
        <div className="UI-UX-project-1-mockups">
          <img src={HomeDecor1} alt="Home Decor UI Design" className='Mockup-img' />
          <img src={HomeDecor2} alt="Home Decor UI Design" className='Mockup-img' />
        </div>
        <div className="UI-UX-project-1-details">
          <ul className='UI-UX-project-1-features'>
            <h3>Key Features</h3>
            <li>Clean and Modern Design: A visually appealing design that highlights the beauty of home decor items while maintaining a clean and modern aesthetic.</li>
            <li>Intuitive Navigation: A user-friendly navigation system that allows visitors to easily explore different product categories and find what they are looking for.</li>
            <li>Responsive Layout: A responsive design that ensures the website looks great and functions well on various devices, including desktops, tablets, and smartphones.</li>
            <li>Product Showcase: A visually engaging product showcase that highlights the unique features and details of each home decor item.</li>
            <button className='btn source-code' onClick={() => window.location.href='https://www.figma.com/proto/0JbbivwsvDsI0W2z8EInHs/Hone-Decor?node-id=1-1105&p=f&t=BOYtqqwufau9xZtL-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'}>Live Preview</button>
            <button className='btn live-preview' onClick={() => window.location.href='https://www.figma.com/design/0JbbivwsvDsI0W2z8EInHs/Hone-Decor?node-id=0-1&t=XOVfGz8XbXSCXOdP-1'}>View In Figma</button>
          </ul>
          <ul className='UI-UX-project-1-stacks-list'>
            <h3>Technologies Used</h3>
            <li>Adobe XD: For creating wireframes, prototypes, and high-fidelity designs of the website.</li>
            <li>Figma: For collaborative design work and creating interactive prototypes to demonstrate user flows and interactions.</li>
            <li>HTML/CSS: For implementing the visual design and ensuring a responsive layout across different devices.</li>
            <li>JavaScript: For adding interactivity and enhancing the user experience with features such as animations and dynamic content.</li>
          </ul>
        </div>


      </div>

    </div>
  )
}

export default UIUXprojects
