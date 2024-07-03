import React from 'react'
import MailIcon from '../assets/mail.svg'
import InIcon from '../assets/linkedin.svg'
import IgIcon from '../assets/instagram.svg'
import Projects from './Projects'
import "../style/Contact.css"


const Contact = () => {

  return (
    <>
        <div className='footerCont'>
            <div className='bigContainer'>
            <Projects/>
            <div id='contact'></div>
            <div className="contactCont">
                <h2>Contact</h2>
                <p className='p2'>Contact me if you want us to work together</p>
                <div className="iconsContainer">
                    <a href="mailto:thomasreemeerie0@gmail.com">
                    <div className='iconCont'>
                        <img src={MailIcon}  className='icon mail'/>
                        <p className='p2'><strong>Mail</strong></p>
                    </div>
                    </a>
                    <a href="https://www.linkedin.com/in/thomas-reemeerie-20076122b/" target="_blank" rel='noreferrer'>
                    <div className='iconCont'>
                        <img src={InIcon}  className='icon linkedin'/>
                        <p className='p2'><strong>Linkedin</strong></p>
                    </div>
                    </a>
                    <a href="https://www.instagram.com/thomasreemeerie/" target="_blank" rel='noreferrer'>
                    <div className='iconCont'>
                        <img src={IgIcon}  className='icon instagram'/>
                        <p className='p2'><strong>Instagram</strong></p>
                    </div>
                    </a>
                </div>
            </div>
            </div>
        </div>
        <footer>
            <p className='p3'>Copyright © 2022 - thomasreemeerie0@gmail.com</p>
            <p className='p3'>All rights reserved</p>
        </footer>
    </>
  )
}

export default Contact;