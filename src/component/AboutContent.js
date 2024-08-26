import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'
// import hand from "../Assets/hand.avif"
// import venom from "../Assets/venom.jpg" 
import Nishantimg from "../Assets/Nishantimg.jpg" 


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm<h2>Full Stack Developer</h2>living in Jaipur,Rajasthan,India. Currently I'm a Full Stack Developer (MERN),I design and code beautiful and simple things,and I love what to do. Experienced with all stages of the developement cycle for dynamic web projects. Having an indepth knowlwdge HTML5, CSS3, JavaScript, React.js, Express.js, MongoDB, Node.js</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="image-container">
            <div className="image-stack top">
                {/* <img src={hand} alt="img" className="img"/>  */}
            </div>
            <div className="image-stack bottom">
                <img src={Nishantimg} alt="img" className="img"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
