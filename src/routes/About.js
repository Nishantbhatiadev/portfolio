import React from 'react'
import ResponsiveNav from '../component/ResponsiveNav'
import Footer from '../component/Footer'
import Heroimg2 from '../component/Heroimg2'
import AboutContent from '../component/AboutContent'

const About = () => {
  return (
    <div>
      <ResponsiveNav/>
      <Heroimg2 head={"ABOUT."} para={"I am a friendly Full-stack Developer."}/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
