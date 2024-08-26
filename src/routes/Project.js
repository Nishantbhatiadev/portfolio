import React from 'react'
import ResponsiveNav from '../component/ResponsiveNav'
import Footer from '../component/Footer'
import Heroimg2 from '../component/Heroimg2'
import Work from '../component/Work'

const Project = () => {
  return (
    <div>
      <ResponsiveNav/>
      <Heroimg2 head={"PROJECTS."} para={"Some of my most recent works"}/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
