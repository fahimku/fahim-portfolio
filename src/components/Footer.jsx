import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Muhammad Fahim</h3>
            <p>Full Stack Developer passionate about creating modern, responsive web applications with exceptional user experiences.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>fahimku@gmail.com</p>
            <p>+92 332 2275722</p>
            <p>Karachi, Pakistan</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Muhammad Fahim. All rights reserved.</p>
          <div className="footer-social">
            <a 
              href="https://www.linkedin.com/in/muhammad-fahim-b0970441/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/fahimku" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

