import React from 'react'
import './intro.css'
import hero from '../images/hero.png'
import brief from '../images/brief.png'


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <h1 className="title">
                ADMAC

            </h1>
            <span className="cs">
                Construction Services


            </span>
            <span className="qs">
                Quantity Surveyors


            </span>
            
            <p className="and">
                &
            </p>
            <span className="pm">
                Project Managers
            </span>
            <div className="btn"><img src={brief} alt="brief" className='brief' />Hire Us</div>



        </div>
        <img className='heroImage' src={hero} alt="heroImage" />
    </section>
  )
}

export default Intro