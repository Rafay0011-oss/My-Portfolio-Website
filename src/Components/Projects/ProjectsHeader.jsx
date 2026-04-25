import React from 'react'
import BG from "../../assets/Black.jpg"
import Js from "../../assets/javascript.png"
import react from "../../assets/react.png"
import "./ProjectsHeader.css"

const ProjectsHeader = ({props, icon1, icon2
}) => {
  return (
    <div id='Project-header'>
        <img src={BG} alt="" className='bg-image'/>
        <div className="header-content">
            <div className="header-title">{props.title}</div>
            <div className="header-description">{props.description}</div>
        </div>
        <img src={icon1} alt="" className='icon-1'/>
        <img src={icon2} alt="" className='icon-2'/>
    </div>
  )
}

export default ProjectsHeader
