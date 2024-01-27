import React from 'react'
import './intro.css'
import video from '../images/video.mp4'
import brief from '../images/brief.png'


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">

            <video className='video'autoPlay loop muted >
                <source src={video} type='video/mp4'/>
            </video>
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
        
    </section>
  )
}

export default Intro