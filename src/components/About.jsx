import '../style/About.css'

const About = () => {
  return (
    <>
    <div id='about'></div>
    <div className='bigContainer'>
        <div className='cont'>
          <div className="description">
            <h2 >About</h2>
            <p className='p1'>Who am I?</p>
            <p className='p2'>Hi! I'm Thomas, I am a web developer with excellent communication skills. I love collaborating and working as a team,
              I am looking for a full time position in web development, in which I could apply my knowledge and skills to continue improving.
            </p>
            <div className='butonContainer'><a href='/img/thomasReemeerie.pdf' target='_blank' download='thomasReemeerie'><button className='buton'>Download CV</button></a></div>
          </div>
          <div className="contSkills">
            <h2>Skills</h2>
              <div className="skillsContainer">
                <div className='skillCont'>
                  <img src="/img/html-5.png" alt="" className='skill'/>
                  <p className='skillName'>HTML</p>
                </div>
                <div className='skillCont'>
                  <img src="/img/css-3.png" alt="" className='skill'/>
                  <p className='skillName'>CSS</p>
                </div>
                <div className='skillCont'>
                  <img src="/img/js.png" alt="" className='skill'/>
                  <p className='skillName'>JavaScript</p>
                </div>
                <div className='skillCont'>
                  <img src="/img/logo512.png" alt="" className='skill'/>
                  <p className='skillName'>ReactJS</p>
                </div>
                <div className='skillCont'>
                  <img src="/img/node-js.png" alt="" className='skill'/>
                  <p className='skillName'>NodeJS</p>
                </div>
                <div className='skillCont'>
                  <img src="/img/mysql.png" alt="" className='skill'/>
                  <p className='skillName'>MySQL</p>
                </div>
                <div className='skillCont'>
                  <img src="/img/mongo.png" alt="" className='skill'/>
                  <p className='skillName'>MongoDB</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About