import React from 'react'
import "../component/HeroimageStyle.css";
import background from "../Assets/background.jpg";
import { Link } from 'react-router-dom';

const HeroImage = () => {
  return (
    <div className="hero">

      <div className="mask">
        <img className="into-image" src={background} alt="background" />
      </div>
      <div className="content">
        <p>HI, I'M A.</p>
        <h1>FULL-STACK Developer.</h1>
        <div>
          <Link to="/project" className='btn'>Projects</Link>
          <Link to="/contact" className='btn-light'>Contact</Link>
        </div>
      </div>


    </div>
  )
}

export default HeroImage
