import React from 'react'
import ResponsiveNav from '../component/ResponsiveNav'
import Footer from '../component/Footer'
import Heroimg2 from '../component/Heroimg2'
import Form from '../component/Form'

const Contact = () => {
  return (
    <div>
      <ResponsiveNav/>
      <Heroimg2 head={"CONTACT."} para={"Let's have a chat"}/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
