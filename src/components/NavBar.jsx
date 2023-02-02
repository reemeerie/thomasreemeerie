import React, {useState} from 'react'
import "../style/NavBar.css"

const NavBar = () => {

    //mobile nav
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }

    const [color, setColor] = useState(false)
    const handleColor = () => {
        if (window.scrollY >= 150) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener("scroll", handleColor)

  return (
    <nav className={color ? 'defaultNav blackNav': 'defaultNav'}>
        <a href="#home"><img src="/img/TR.png" alt="" className='TR'/></a>
        <div className=''>
            <ul id={color ? 'navbarBlack' : 'navbar'} className={clicked ? '#navbar active' : '#navbar'}>
                <li>
                    <a href="#home" /* className='active' */ onClick={()=> {setClicked(false)}}>Home</a>
                </li>
                <li>
                    <a href="#about" onClick={()=> {setClicked(false)}}>About me</a>
                </li>
                <li>
                    <a href="#studies" onClick={()=> {setClicked(false)}}>Studies</a>
                </li>
                <li>
                    <a href="#contact" onClick={()=> {setClicked(false)}}>Contact Me</a>
                </li>
                <li>
                    <a href="#projects" onClick={()=> {setClicked(false)}}>Projects</a>
                </li>
            </ul>
        </div>
        <div id='mobile'>
            <i id='bar' className={clicked ? 'fas fa-times':'fas fa-bars'} onClick={handleClick}></i>
        </div>
    </nav>
  )
}

export default NavBar