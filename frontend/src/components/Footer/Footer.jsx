import { assets } from "../../assets/assets"
import "./Footer.css"

function Footer() {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam veniam commodi atque minima excepturi laboriosam voluptatum nisi. Maiores, inventore maxime.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+12345678</li>
                    <li>food@mail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, neque.</p>
    </div>
  )
}

export default Footer