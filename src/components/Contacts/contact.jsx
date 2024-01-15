import React, { useRef } from 'react'
import'./contact.css'
import dunlop from '../images/dunlop.png'
import cm from '../images/cm.png'
import csg from '../images/csg.jpg'
import camlake from '../images/camlake.jpg'
import linkedIn from '../images/linkedIn.png'
import buildbest from '../images/buildbest.png'
import paulAnd from '../images/paulAnd.png'
import studio from '../images/studio.png'
import topmarks from '../images/topmarks.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
    
  return (
    <section id="contactPage">
        <div className="myClients">
            <h1 className="clientTitle">
                Our Clients
            </h1>
            <span className="clientsDes">
                We are proud to have worked with a diverse group of established comapnies.
            </span>
            <div className="clientImages">
                <img src={dunlop} alt="" className="clientImage" />
                <img src={cm} alt="" className="clientImage" />
                <img src={csg} alt="" className="clientImage" />
                <img src={buildbest} alt="" className="clientImage" />
                <img src={paulAnd} alt="" className="clientImage" />
                <img src={studio} alt="" className="clientImage" />
                <img src={topmarks} alt="" className="clientImage" />
                <img src={camlake} alt="" className="clientImage" />
            </div>

        </div>
        <div id="contacts">
            <h1 className="contactUs">
                Contact Us
            </h1>
            <a href="mailto:adam@admacconstruction.co.uk">
            <span className="email">
                Email Us: adam@admacconstruction.co.uk
            
            </span>
            </a>
           
            <div className="links">
                <a href="https://uk.linkedin.com/in/adam-mccomb-03229b228">
                <img src={linkedIn} alt='linkImg' className="link" />
                </a>
            </div>
           

        </div>
 
    </section>
  )
}

export default Contact
