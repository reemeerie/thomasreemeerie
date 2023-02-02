import React from 'react'
import '../style/About.css'

const About = () => {
  return (
    <>
    <div id='about'></div>
        <div className='cont'>
          <div className="description">
            <h2 >About</h2>
            <p className='p1'>Who am I?</p>
            <p className='p2'>Hi! I'm Thomas, I am a web developer with excellent communication skills. I love collaborating and working as a team,
              I am looking for a full time position in web development, in which I could apply my knowledge and skills to continue improving.
            </p>
            <a href='/img/thomasReemeerie.pdf' target='_blank' download='thomasReemeerie'><button className='buton'>Download CV</button></a>
          </div>
          <div className="contSkills">
            <h2>Skills</h2>
            <div className="skills-bar">
              <div className="bar">
                <div className="info">
                  <span>HTML</span>
                </div>
                <div className="progress-line html"><span></span></div>
              </div>
              <div className="bar">
                <div className="info">
                  <span>CSS</span>
                </div>
                <div className="progress-line css"><span></span></div>
              </div>
              <div className="bar">
                <div className="info">
                  <span>JS</span>
                </div>
                <div className="progress-line js"><span></span></div>
              </div>
              <div className="bar">
                <div className="info">
                  <span>React JS</span>
                </div>
                <div className="progress-line react"><span></span></div>
              </div>
              <div className="bar">
                <div className="info">
                  <span>Node JS</span>
                </div>
                <div className="progress-line node"><span></span></div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About