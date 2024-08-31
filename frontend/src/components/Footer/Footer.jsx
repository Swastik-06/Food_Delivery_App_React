import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Alias ique quidem illo sapiente ut ipsam corrupti nesciunt eligendi illum cum eveniet. Aliquam deserunt velit nostrum adipisci, minima ut quos ea? Voluptatem dolor sapiente mollitia nemo, in deserunt repudiandae voluptas optio nam sint fuga perspiciatis. Repellat?</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-6372877833</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>

      </div>
      <hr />
      <div className="footer-copyright">
        <p>copyright2024 Tomato.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
