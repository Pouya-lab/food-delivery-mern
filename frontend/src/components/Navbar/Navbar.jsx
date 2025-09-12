import './Navbar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'

const Navbar = () => {

    const [ menu , setMenu ] = useState("home")

  return (
    <div className='nav' >
      <img src={assets.logo} alt="" className='logo' />
      <ul className="nav-menu">
        <li onClick={ ()=>setMenu("home") } className={ menu === "home" ? "active" : ""} >Home</li>
        <li onClick={ ()=>setMenu("menu") } className={ menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={ ()=>setMenu("mobile-app") } className={ menu === "mobile-app" ? "active" : ""}>Mobile-app</li>
        <li onClick={ ()=>setMenu("contact-us") } className={ menu === "contact-us" ? "active" : ""}>Contact Us</li>
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
