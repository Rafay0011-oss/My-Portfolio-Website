import React from 'react'
import gmail from "../assets/email.png"
import phone from "../assets/phone-call.png"
import location from "../assets/pin.png"

import "./Contact.css"

const Contact = () => {
  return (
      <div id='Contact'>
        <div className="Contact-content">
          <div className="contact-left">
            <h5>GET IN TOUCH</h5>
            <div className="contactpage-heading">
              Lets build something <br />amazing together
            </div>
            <div className="contactpage-text">
              Available for freelance projects and full-time roles. I usually respond within 24 hours.
            </div>
            <div className="gmail">
              <div className="gmail-icon">

                <img src={gmail} alt="Gmail" />
              </div>
              <div className="gmail-text">
                <div className="gmail-label">Gmail</div>
                <div>abdurrafay766@gmail.com</div>
              </div>
            </div>
            <div className="phone">
              <div className="phone-icon">
                <img src={phone} alt="Phone" />
              </div>
              <div className="phone-text">
                
                <div className="phone-label">Phone</div>
                <div>+92 335 5707327</div>
              </div>
            </div>
            <div className="location">
              <div className="location-icon">
                <img src={location} alt="Location" />
              </div>
              <div className="location-text">
                <div className="location-label">Location</div>
                <div>Islamabad, Pakistan</div>
              </div>
            </div>
            

          </div>
          <div className="contactpage-right">
            <div className="contact-form">
              <form>
                <input type="text" placeholder='Name' required />
                <input type="email" placeholder='Email' required />
                <textarea placeholder='Message' required></textarea>
                <button type='submit'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Contact;
