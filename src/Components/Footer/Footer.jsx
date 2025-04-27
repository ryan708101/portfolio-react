import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.jpg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" />
          <p>I am a passionate frontend developer from India, bringing 2 years of hands-on experience in building responsive and user-friendly web applications.</p>
        </div>

        <div className="footer-top-right">
          <div className='footer-email-input'>
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder='Enter your Email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© Ryan Sinha 2025 — All rights reserved.</p>
            <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Contact with me</p>
            </div>
        
      </div>
    </div>
  )
}

export default Footer
