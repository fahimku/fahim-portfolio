import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      closeMenu()
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <span className="logo-initials">MF</span>
            <span className="logo-full">Muhammad Fahim</span>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
                Contact
              </a>
            </li>
          </ul>
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

