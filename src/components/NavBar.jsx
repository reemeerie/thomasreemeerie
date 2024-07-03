import {useState} from 'react'
import "../style/NavBar.css"

const NavBar = () => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    const [color, setColor] = useState(false)

    const handleColor = () => {
        if (window.scrollY >= 130) {
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    
    window.addEventListener("scroll", handleColor)

  return (
    <nav id={clicked ? 'clicked' : ''} className={color ? 'defaultNav blackNav': 'defaultNav'}>
        <a href="#home" className={color ? 'tr blacktr': 'tr'}>{/* <img src="/img/TR.png" alt="" className='TR'/> */}T. Reemeerie</a>
        <div className='navItems'>
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
                    <a href="#projects" onClick={()=> {setClicked(false)}}>Projects</a>
                </li>
                <li>
                    <a href="#contact" onClick={()=> {setClicked(false)}}>Contact me</a>
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