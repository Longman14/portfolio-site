import React from 'react';
import "./HeroImage.css";
import IntroPic from "../assets/intro-img.jpg"
import { Link } from 'react-router';
const HeroImage = () => {
  return (
    <div className='hero'>
        <div className='mask'>
        <img className='intro-pic' src={IntroPic} alt='intro'/>
        </div>
        <div className='content'>
            <p>Hi, I am a Freelancer</p>
            <h1>Full Stack Developer (MERN)</h1>
            <div >
            <Link to="/projects" className='btn'>
            Projects
            </Link>
            <Link to="/contact" className='btn btn-light'>
            Contact
            </Link>
        </div>
        </div>
        
    </div>
  )
}

export default HeroImage