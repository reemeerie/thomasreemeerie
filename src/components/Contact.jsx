import React from 'react'
import { ReactComponent as MailIcon } from '../assets/mail.svg'
import { ReactComponent as InIcon } from '../assets/linkedin.svg'
import { ReactComponent as IgIcon } from '../assets/instagram.svg'
import Projects from './Projects'
import "../style/Contact.css"


const Contact = () => {

  return (
    <>
        <div id='contact'></div>
        <div className='footerCont'>
            <div className="contactCont">
                <h2>Contact</h2>
                <p className='p2'>Contact me if you want us to work together</p>
                <div className="iconsContainer">
                    <a href="mailto:thomasreemeerie0@gmail.com">
                    <div className='iconCont'>
                        <MailIcon  className='icon'/>
                        <p className='p2'><strong>Mail me</strong></p>
                    </div>
                    </a>
                    <a href="https://www.linkedin.com/in/thomas-reemeerie-20076122b/" target="_blank" rel='noreferrer'>
                    <div className='iconCont'>
                        <InIcon  className='icon'/>
                        <p className='p2'><strong>Contact me</strong></p>
                    </div>
                    </a>
                    <a href="https://www.instagram.com/thomasreemeerie/" target="_blank" rel='noreferrer'>
                    <div className='iconCont'>
                        <IgIcon  className='icon'/>
                        <p className='p2'><strong>Follow me</strong></p>
                    </div>
                    </a>
                </div>
            </div>
            <Projects/>
            <footer>
                <p className='p3'>Copyright © 2022 - thomasreemeerie0@gmail.com</p>
                <p className='p3'>All rights reserved</p>
            </footer>
        </div>
    </>
  )
}

export default Contact;