import { FaLinkedin, FaDownload } from 'react-icons/fa'
import fahimPic from '../assets/images/fahim-pic.jpg'
import './Home.css'

const Home = () => {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/assets/files/Muhammad-Fahim-Resume-Frontend-Developer-Web.pdf'
    link.download = 'Muhammad-Fahim-Resume-Frontend-Developer-Web.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home-hero-card" data-aos="fade-up">
          <div className="home-content">
            <div className="home-text">
              <p className="greeting">Hello, I'm</p>
              <h1 className="name">
                Muhammad <span>Fahim</span>
              </h1>
              <h2 className="title">
                I'm a <span className="typing-text">Front-End Software Engineer</span>
              </h2>
              <p className="description">
                Highly skilled Front-End Software Engineer with 6+ years of experience in developing 
                responsive, pixel-perfect, and high-performance web applications. Strong expertise in 
                React.js, Next.js, JavaScript, UI/UX implementation, and performance optimization.
              </p>
              <div className="home-buttons">
                <a 
                  href="https://www.linkedin.com/in/muhammad-fahim-b0970441/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaLinkedin /> Connect on LinkedIn
                </a>
                <button className="btn btn-secondary" onClick={handleDownloadCV}>
                  <FaDownload /> Download CV
                </button>
              </div>
            </div>
            <div className="home-image-wrapper">
              <div className="profile-image-container">
                <img src={fahimPic} alt="Muhammad Fahim" className="profile-image" />
                <div className="decorative-circle circle-1"></div>
                <div className="decorative-circle circle-2"></div>
                <div className="decorative-circle circle-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-stats-section">
          <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
            <h3>6+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
            <h3>20+</h3>
            <p>Projects</p>
          </div>
          <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
            <h3>15+</h3>
            <p>Technologies Used</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

