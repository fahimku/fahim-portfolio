import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'AgentZena AI',
      description: 'AI Customer Support Agent platform with advanced automation and AI integration. Built with React.js, TypeScript, and integrated with VoiceFlow, ChatGPT API, and Firebase. Available on Shopify App Store.',
      image: 'https://cdn.shopify.com/app-store/listing_images/76d2239ce16104dce1858d2a700b90a5/promotional_image/CMv5-omJ4o8DEAE=.jpeg',
      fallbackImage: 'https://via.placeholder.com/800x600/147efb/ffffff?text=AgentZena+AI',
      link: 'https://agentzena.ai/',
      // shopifyLink: 'https://apps.shopify.com/shop-agent',
      github: '',
      category: 'ai',
      tech: ['React.js', 'TypeScript', 'VoiceFlow', 'ChatGPT API', 'Firebase', 'Shopify']
    },
    {
      id: 2,
      title: 'Ormelive',
      description: 'Large-scale social commerce platform combining eCommerce, live streaming, and automation. Features real-time live streaming with Amazon IVS, live chat, and integrated social media SDKs.',
      image: 'https://castleplacement.com/wp-content/uploads/2024/09/Picture2-1024x1017.jpg',
      fallbackImage: 'https://via.placeholder.com/800x600/2d2e32/ffffff?text=Ormelive',
      link: 'https://www.ormelive.com/',
      github: '',
      category: 'web',
      tech: ['React.js', 'Next.js', 'Amazon IVS', 'Socket.IO', 'Shopify', 'Magento']
    },
    {
      id: 3,
      title: 'Hams.ai',
      description: 'Voice AI platform that converts speech into text, text into voice, and understands Arabic conversations. Built with advanced AI technologies and real-time processing.',
      image: 'https://iqruyoeyjyecuytgfzbn.supabase.co/storage/v1/object/public/tool-images/hero-images/1749170341790-Screenshot_2025-06-06_023855.png',
      fallbackImage: 'https://via.placeholder.com/800x600/147efb/ffffff?text=Hams.ai',
      link: 'https://hams.ai/',
      github: '',
      category: 'ai',
      tech: ['React.js', 'VoiceFlow', 'ElevenLabs', 'OpenAI', 'Firebase']
    },
    {
      id: 4,
      title: 'Uniqsta',
      description: 'Travel destination picker platform that helps users find their perfect travel destination. Features a modern dark-themed UI with destination selection options, request library, and personalized travel recommendations. Built with React.js, Next.js, and TailwindCSS.',
      image: '/assets/images/uniqsataimage.png',
      fallbackImage: 'https://via.placeholder.com/1200x800/1a1a1a/ff6b35?text=UNIQSTA+Travel+Destination+Picker',
      link: 'https://uniqsta.com/welcome',
      github: '',
      category: 'web',
      tech: ['React.js', 'Next.js', 'TailwindCSS', 'TypeScript']
    },
    {
      id: 5,
      title: 'Agora Video Calling App',
      description: 'Real-time audio/video calling application built with Agora SDK. Features high-quality video calls, screen sharing, and group calling capabilities.',
      image: 'https://blog.flutterflow.io/content/images/2023/05/agora_web_view_2.png',
      fallbackImage: 'https://via.placeholder.com/800x600/147efb/ffffff?text=Agora+Video+Calling',
      link: '',
      github: '',
      category: 'web',
      tech: ['React.js', 'Agora SDK', 'Socket.IO', 'WebRTC']
    },
    {
      id: 6,
      title: 'WordPress Custom Themes',
      description: 'Multiple custom WordPress themes and plugins developed for various clients. PSD to WordPress conversion with responsive design and custom functionality.',
      image: '/assets/images/wordpresstheme.jpeg',
      fallbackImage: 'https://via.placeholder.com/800x600/2d2e32/ffffff?text=WordPress+Themes',
      link: 'https://holidayinnpottspoint.com.au/',
      github: '',
      category: 'web',
      tech: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'jQuery']
    }
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web App' },
    { id: 'ai', label: 'AI & Automation' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">My Projects</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Here are some of my recent projects that showcase my skills in frontend development, 
          AI integration, and modern web technologies.
        </p>
        <div className="project-filters" data-aos="fade-up" data-aos-delay="200">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    if (project.fallbackImage && e.target.src !== project.fallbackImage) {
                      e.target.src = project.fallbackImage
                    }
                  }}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="View Live"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {project.shopifyLink && (
                      <a 
                        href={project.shopifyLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="View on Shopify"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="View Code"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

