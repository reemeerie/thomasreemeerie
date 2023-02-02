import React from 'react'
import '../style/Projects.css'

const Projects = () => {
  return (
    <>
      <div id='projects'></div>
      <div className='projectsCont'>
          <h2>Projects</h2>
          <div className='descProjects p2' >
              Here are some of my personal projects I've been working on, including an API and a front-end ecommerce
          </div>
          <div className='projects'>
            <a href="https://thesneakerstoretss.netlify.app/" target='_blank' rel='noreferrer'>
              <div className='pro'>
                  <img src="/img/zapa2.png" alt="aa" className='proj'/>
                  <div className='capa'>
                    <h3>the Sneaker Store</h3>
                  </div>
              </div>
            </a>
            <a href="https://snk-api.vercel.app/api/v1/zapatillas" target='_blank' rel='noreferrer'>
              <div className='pro'>
                <img src="/img/snkapi3.png" alt="aa" className='proj' />
                <div className='capa'>
                    <h3>snk-api</h3>
                  </div>
              </div>
            </a>
          </div>
      </div>
    </>
  )
}

export default Projects