import '../style/Projects.css'

const Projects = () => {
  return (
    <>
      <div id='projects'></div>
      <div className='projectsCont'>
          <h2>Projects</h2>
          <p className='descProjects p2' >
            Here are some of my personal projects I've been working on, including a notes app, a landing page and an ecommerce
          </p>
          <div className='projects'>
            <a href="https://thesneakerstoretss.netlify.app/" target='_blank' rel='noreferrer'>
              <div className='pro'>
                  <img src="/img/tss.png" alt="aa" className='proj'/>
                  <div className='capa capa--blur'>
                    <h3 className='projTitle'>The Sneaker Store</h3>
                    <p className='projSubtitle'>A react e-commerce</p>
                  </div>
              </div>
            </a>
            <a href="https://jana-app.netlify.app/" target='_blank' rel='noreferrer'>
              <div className='pro'>
                <img src="/img/jana.png" alt="aa" className='proj' />
                <div className='capa'>
                    <h3 className='projTitle'>Just another notes app</h3>
                    <p className='projSubtitle'>A react notes app</p>
                  </div>
              </div>
            </a>
            <a href="https://easeguros.netlify.app/" target='_blank' rel='noreferrer'>
              <div className='pro'>
                <img src="/img/ea.png" alt="aa" className='proj' />
                <div className='capa'>
                    <h3 className='projTitle'>EA Seguros</h3>
                    <p className='projSubtitle'>Insurance landing page</p>
                  </div>
              </div>
            </a>
          </div>
      </div>
    </>
  )
}

export default Projects