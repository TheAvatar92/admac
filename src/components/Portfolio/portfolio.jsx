import React from 'react'
import './portfolio.css'
import ArdavonPark from '../images/ArdavonPark.jpg'
import BrookwoodBangor from '../images/BrookwoodBangor.jpg'
import CraighillManor from '../images/CraighillManor.jpg'


const Portfolio = () => {
  return (
    <section id="portfolio">
        <h1 className="pTitle">
            Portfolio
        </h1>
        <span className='pDes'>Projects we have recently developed. We bring our expertise to help deliver our clients the highest quality service.</span>
        <div className="projectImages">
            <div className="project1">
            <img src={ArdavonPark} alt="" className="projectImage" />
            <p>Ardavon Park</p>
            </div>
            <div className="project2">
            <img src={BrookwoodBangor} alt="" className="projectImage" />
            <p>Brookwood Bangor</p>
            </div>
            <div className="project1">
            <img src={CraighillManor} alt="" className="projectImage" />
            <p>Craighill Manor</p>
            </div>
            
            </div>
        
        
    </section>
  )
}

export default Portfolio