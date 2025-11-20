import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can add form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Let's Connect</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          I'm always interested in new opportunities and exciting projects. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h3>Email</h3>
              <a href="mailto:fahimku@gmail.com">fahimku@gmail.com</a>
            </div>
            <div className="info-card">
              <FaPhone className="info-icon" />
              <h3>Phone</h3>
              <a href="tel:+923322275722">+92 332 2275722</a>
            </div>
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>Location</h3>
              <p>Karachi, Pakistan</p>
            </div>
            <div className="social-links">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a 
                  href="https://www.linkedin.com/in/muhammad-fahim-b0970441/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/fahimku" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                {/* <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  title="Twitter"
                >
                  <FaTwitter />
                </a> */}
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper" data-aos="fade-left">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

