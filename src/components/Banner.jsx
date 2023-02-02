import React from 'react'
import "../style/Banner.css"

const Banner = () => {

  return (
    <>
        <div id='home'>
            <div className="imgCont">
                <img src="/img/opa.jfif" alt="img" className='col-12'/>
            </div>
        </div>
        <div className="contPresentation">
            <div className="presentation">
                <h1 className='desc'>Thomas Reemeerie</h1>
                <p className="desc2" >Web developer</p>
            </div>
        </div>
    </>
  )
}

export default Banner