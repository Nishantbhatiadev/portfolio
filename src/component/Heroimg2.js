import "./Heroimg2styles.css"
import React from 'react'

const Heroimg2 = (props) => {
  return (
    <div className="hero-image">
      <div className="heading">
        <h1>{props.head}</h1>
        <p>{props.para}</p>
      </div>
    </div>
  )
}

export default Heroimg2
