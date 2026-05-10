import React from 'react'
import BG from "../../assets/Black.jpg"
import Js from "../../assets/Javascript.png"
import react from "../../assets/react.png"
import "./ProjectsHeader.css"
import useScrollAnimation from "../../hooks/useScrollAnimation"

const ProjectsHeader = ({props, icon1, icon2
}) => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div id='Project-header' ref={headerRef}>
        <img src={BG} alt="" className='bg-image'/>
        <div className={`header-content ${headerVisible ? 'animate-scaleIn' : 'animate-hidden'}`}>
            <div className="header-title">{props.title}</div>
            <div className="header-description">{props.description}</div>
        </div>
        <img src={icon1} alt="" className={`icon-1 ${headerVisible ? 'icon-float-1' : 'animate-hidden'}`}/>
        <img src={icon2} alt="" className={`icon-2 ${headerVisible ? 'icon-float-2' : 'animate-hidden'}`}/>
    </div>
  )
}

export default ProjectsHeader
