import './Navbar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [ menu , setMenu ] = useState("home")

  return (
    <div className='nav' >
      <img src={assets.logo} alt="" className='logo' />
      <ul className="nav-menu">
        <Link to='/' onClick={ ()=>setMenu("home") } className={ menu === "home" ? "active" : ""} >Home</Link>
        <a href='#explore-menu' onClick={ ()=>setMenu("menu") } className={ menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={ ()=>setMenu("mobile-app") } className={ menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href='#footer' onClick={ ()=>setMenu("contact-us") } className={ menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="" />
        <div className="nav-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
