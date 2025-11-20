import { useState } from 'react'
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaGraduationCap, 
  FaUser,
  FaBriefcase,
  FaBolt,
  FaBuilding,
  FaBook,
  FaCode,
  FaDatabase,
  FaRobot,
  FaPlug,
  FaBroadcastTower
} from 'react-icons/fa'
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiGit, 
  SiSass, 
  SiBootstrap, 
  SiVite,
  SiFirebase,
  SiShopify,
  SiMagento,
  SiAmazonaws,
  SiWordpress,
  SiJquery,
  SiPhp,
  SiMysql,
  SiAntdesign,
  SiJest,
  SiBitbucket,
  SiGitlab,
  SiJira,
  SiOpenai
} from 'react-icons/si'
import './About.css'

const About = () => {
  const [activeTab, setActiveTab] = useState('experience')

  const personalInfo = {
    name: 'Muhammad Fahim',
    email: 'fahimku@gmail.com',
    phone: '+92 332 2275722',
    location: 'Karachi, Pakistan',
    birthDate: 'Born in Pakistan',
    education: 'BS Computer Software Engineering, Karachi University'
  }

  const experiences = [
    {
      period: 'Oct 2021 — Present',
      type: 'Full-Time',
      title: 'Front-End Developer',
      company: 'Fascom Limited',
      location: 'Karachi',
      description: 'Lead front-end development and AI-integrated features for a large-scale social commerce platform. Develop responsive, pixel-perfect UI using React.js, TypeScript, TailwindCSS. Implement real-time features including live streaming using Amazon IVS and live chat using Amazon Chat Service.',
      icon: FaBriefcase,
      iconColor: '#10b981'
    },
    {
      period: 'May 2020 — Sept 2021',
      type: 'Full-Time',
      title: 'Platform Engineer',
      company: 'BionicWP',
      location: 'Karachi',
      description: 'Developed, maintained, and optimized WordPress themes, plugins, and core platform features. Implemented REST APIs, webhooks, and integrations between AI systems and WordPress.',
      icon: FaBolt,
      iconColor: '#3b82f6'
    },
    {
      period: 'Jul 2019 — May 2020',
      type: 'Full-Time',
      title: 'Full Stack Developer',
      company: 'Grids Hub',
      location: 'Karachi',
      description: 'Full stack development with focus on front-end technologies and backend integration.',
      icon: FaBuilding,
      iconColor: '#10b981'
    },
    {
      period: 'Dec 2014 — Mar 2019',
      type: 'Full-Time',
      title: 'PHP WordPress Developer',
      company: 'netOn',
      location: 'Karachi',
      description: 'PSD to WordPress conversion, theme development, and custom WordPress solutions.',
      icon: FaBook,
      iconColor: '#3b82f6'
    },
    {
      period: '2009 — 2012',
      type: 'Education',
      title: 'BS Computer Software Engineering',
      company: 'Karachi University',
      location: 'Karachi, Pakistan',
      description: 'Studied computer science fundamentals, algorithms, data structures, and software engineering principles. Graduated with strong technical foundation.',
      icon: FaGraduationCap,
      iconColor: '#10b981'
    }
  ]

  const skillsData = [
    // Front-End Skills
    { name: 'React.js', icon: SiReact, level: 90, proficiency: 'Expert', color: '#61dafb', category: 'Frontend' },
    { name: 'Next.js', icon: SiNextdotjs, level: 90, proficiency: 'Expert', color: '#000000', category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, level: 90, proficiency: 'Expert', color: '#f7df1e', category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, level: 85, proficiency: 'Advanced', color: '#3178c6', category: 'Frontend' },
    { name: 'HTML5', icon: SiHtml5, level: 95, proficiency: 'Expert', color: '#e34f26', category: 'Frontend' },
    { name: 'CSS3', icon: SiCss3, level: 90, proficiency: 'Expert', color: '#1572b6', category: 'Frontend' },
    { name: 'jQuery', icon: SiJquery, level: 85, proficiency: 'Advanced', color: '#0769ad', category: 'Frontend' },
    { name: 'WordPress', icon: SiWordpress, level: 85, proficiency: 'Advanced', color: '#21759b', category: 'Frontend' },
    { name: 'AJAX', icon: FaCode, level: 80, proficiency: 'Advanced', color: '#4a90e2', category: 'Frontend' },
    { name: 'JSON', icon: FaCode, level: 85, proficiency: 'Advanced', color: '#000000', category: 'Frontend' },
    
    // UI Framework Skills
    { name: 'Bootstrap 5', icon: SiBootstrap, level: 85, proficiency: 'Advanced', color: '#7952b3', category: 'UI Framework' },
    { name: 'Material UI', icon: FaCode, level: 85, proficiency: 'Advanced', color: '#007fff', category: 'UI Framework' },
    { name: 'Chakra UI', icon: FaCode, level: 80, proficiency: 'Advanced', color: '#319795', category: 'UI Framework' },
    { name: 'Ant Design', icon: SiAntdesign, level: 80, proficiency: 'Advanced', color: '#0170fe', category: 'UI Framework' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, proficiency: 'Expert', color: '#06b6d4', category: 'UI Framework' },
    
    // Testing Skills
    { name: 'Jest', icon: SiJest, level: 80, proficiency: 'Advanced', color: '#c21325', category: 'Testing' },
    { name: 'React Testing Library', icon: SiJest, level: 80, proficiency: 'Advanced', color: '#e33332', category: 'Testing' },
    
    // AI Skills
    { name: 'OpenAI', icon: SiOpenai, level: 85, proficiency: 'Advanced', color: '#412991', category: 'AI' },
    { name: 'ChatGPT API', icon: SiOpenai, level: 85, proficiency: 'Advanced', color: '#10a37f', category: 'AI' },
    { name: 'Firebase', icon: SiFirebase, level: 85, proficiency: 'Advanced', color: '#ffca28', category: 'AI' },
    { name: 'n8n', icon: FaPlug, level: 75, proficiency: 'Intermediate', color: '#ff6d5a', category: 'AI' },
    
    // Back-End Skills
    { name: 'PHP', icon: SiPhp, level: 85, proficiency: 'Advanced', color: '#777bb4', category: 'Backend' },
    { name: 'MySQL', icon: SiMysql, level: 85, proficiency: 'Advanced', color: '#4479a1', category: 'Backend' },
    
    // Tools & Other Skills
    { name: 'Git & GitHub', icon: SiGit, level: 90, proficiency: 'Expert', color: '#f05032', category: 'Tools' },
    { name: 'Bitbucket', icon: SiBitbucket, level: 85, proficiency: 'Advanced', color: '#0052cc', category: 'Tools' },
    { name: 'GitLab', icon: SiGitlab, level: 85, proficiency: 'Advanced', color: '#fc6d26', category: 'Tools' },
    { name: 'JIRA', icon: SiJira, level: 80, proficiency: 'Advanced', color: '#0052cc', category: 'Tools' },
    { name: 'Sass/SCSS', icon: SiSass, level: 85, proficiency: 'Advanced', color: '#cc6699', category: 'Tools' },
    { name: 'Vite', icon: SiVite, level: 80, proficiency: 'Advanced', color: '#646cff', category: 'Tools' },
    { name: 'CI/CD', icon: FaPlug, level: 75, proficiency: 'Intermediate', color: '#4a90e2', category: 'Tools' },
    
    // Integrations
    { name: 'Shopify', icon: SiShopify, level: 80, proficiency: 'Advanced', color: '#96bf48', category: 'Integrations' },
    { name: 'Magento', icon: SiMagento, level: 75, proficiency: 'Intermediate', color: '#ee672f', category: 'Integrations' },
    { name: 'Amazon IVS', icon: SiAmazonaws, level: 80, proficiency: 'Advanced', color: '#ff9900', category: 'Integrations' },
    { name: 'Socket.IO', icon: FaBroadcastTower, level: 80, proficiency: 'Advanced', color: '#010101', category: 'Integrations' }
  ]


  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        <div className="about-card" data-aos="fade-up">
          <div className="about-intro">
            <p>
              I'm a passionate Front-End Software Engineer with expertise in creating modern, 
              responsive web applications. With a strong foundation in React.js, Next.js, 
              TypeScript, and modern CSS frameworks, I specialize in building user-centric 
              experiences that combine beautiful design with optimal performance.
            </p>
            <div className="personal-info-grid">
              <div className="info-column">
                <div className="info-item">
                  <FaUser className="info-icon" />
                  <span>{personalInfo.name}</span>
                </div>
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="info-item">
                  <FaGraduationCap className="info-icon" />
                  <span>{personalInfo.education}</span>
                </div>
              </div>
              <div className="info-column">
                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="info-item">
                  <FaCalendarAlt className="info-icon" />
                  <span>{personalInfo.birthDate}</span>
                </div>
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tabs">
            <button 
              className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              Experience & Education
            </button>
            <button 
              className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
          </div>
          <div className="tab-content">
            {activeTab === 'experience' && (
              <div className="experience-timeline">
                {experiences.map((exp, index) => {
                  const IconComponent = exp.icon
                  return (
                    <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 100}>
                      <div className="timeline-icon" style={{ backgroundColor: exp.iconColor }}>
                        <IconComponent />
                      </div>
                      <div className="timeline-content">
                        <div className="exp-header">
                          <div className="exp-period">{exp.period}</div>
                          <div className="exp-type">{exp.type}</div>
                        </div>
                        <h3 className="exp-title">{exp.title}</h3>
                        <h4 className="exp-company">{exp.company}</h4>
                        <p className="exp-location">{exp.location}</p>
                        <p className="exp-description">{exp.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
            {activeTab === 'skills' && (
              <div className="skills-container">
                {['Frontend', 'UI Framework', 'Testing', 'AI', 'Backend', 'Tools', 'Integrations'].map((category) => {
                  const categorySkills = skillsData.filter(skill => skill.category === category)
                  if (categorySkills.length === 0) return null
                  
                  return (
                    <div key={category} className="skill-category-section" data-aos="fade-up">
                      <h3 className="skill-category-title">
                        <span className="category-icon">
                          {category === 'Frontend' && <FaCode />}
                          {category === 'UI Framework' && <FaCode />}
                          {category === 'Testing' && <SiJest />}
                          {category === 'AI' && <FaRobot />}
                          {category === 'Backend' && <FaDatabase />}
                          {category === 'Tools' && <FaPlug />}
                          {category === 'Integrations' && <FaBroadcastTower />}
                        </span>
                        {category === 'UI Framework' ? 'UI Framework Skills' : 
                         category === 'Testing' ? 'Testing Skills' :
                         category === 'AI' ? 'AI Skills' :
                         category === 'Backend' ? 'Back-End Skills' :
                         category === 'Tools' ? 'Other Skills' :
                         category === 'Integrations' ? 'Integrations' :
                         'Front-End Skills'}
                      </h3>
                      <div className="skills-grid">
                        {categorySkills.map((skill, index) => {
                          const IconComponent = skill.icon
                          return (
                            <div key={index} className="skill-card" data-aos="fade-up" data-aos-delay={index * 50}>
                              <div className="skill-header">
                                <div className="skill-icon" style={{ color: skill.color }}>
                                  <IconComponent />
                                </div>
                                <div className="skill-info">
                                  <h4 className="skill-name">{skill.name}</h4>
                                  <span className="skill-proficiency">{skill.proficiency}</span>
                                </div>
                              </div>
                              <div className="skill-progress">
                                <div className="progress-bar">
                                  <div 
                                    className="progress-fill" 
                                    style={{ 
                                      width: `${skill.level}%`,
                                      backgroundColor: skill.color
                                    }}
                                  ></div>
                                </div>
                                <span className="progress-percentage">{skill.level}%</span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

