import "../component/FormStyles.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
        <lable>Your Name</lable>
        <input type="text" placeholder="Your name"/>
        <lable>Email</lable>
        <input type="email" placeholder="Email"/>
        <lable>Subject</lable>
        <input type="text" placeholder="Your subject"/>
        <lable>Your Name</lable>
        <textarea rows={6} placeholder="Type your message"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form
