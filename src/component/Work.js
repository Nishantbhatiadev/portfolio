import "./CardsStyles.css"
import React from 'react'
import WorkCardData from "./WorkCardData"
import Cards from "./Cards"


const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
         {WorkCardData.map((val,ind) =>{
            return(
                <Cards key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text} view={val.view}/>
            )
         })}
      </div>
    </div>
  )
}

export default Work