import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'        // fixed import
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f38a4102-b9b3-4d8c-a7ff-062c6943ddf5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div  id="contact"className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section"> {/* spelling fixed here */}
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently available to discuss new projects, so feel free to reach out!</p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>ryansinha506@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>7275022790</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Mysore, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" row="8"placeholder='Enter your message'></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
