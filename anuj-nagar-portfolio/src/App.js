import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode, faRocket, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="profile-image">
            {/* Add your profile image here */}
          </div>
          <h2>Anuj Nagar</h2>
          <p className="title">Full Stack Developer</p>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#customers">Customers</a></li>
            <li><a href="#tech-stack">Tech Stack</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="mailto:your.email@example.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>

      <div className="main-content">
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Hi, I'm Anuj</h1>
              <p className="subtitle">Full Stack Developer & Freelancer</p>
              <div className="hero-description">
                <p>Available for freelance projects</p>
              </div>
              <div className="hero-cta">
                <a href="#projects" className="cta-button">View My Work</a>
                <a href="#contact" className="cta-button secondary">Get in Touch</a>
              </div>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-header">
            <h2>About Me</h2>
            <p className="section-subtitle">My Journey in Tech</p>
          </div>
          <div className="about-content">
            <div className="about-intro">
              <p>I'm a passionate software developer with over 5 years of experience in building scalable web applications. 
                 My journey in technology has been driven by a constant desire to learn and create innovative solutions 
                 that make a difference.</p>
              <div className="about-features">
                <div className="feature-item">
                  <FontAwesomeIcon icon={faCode} className="feature-icon" />
                  <h4>Clean Code</h4>
                  <p>Writing maintainable and efficient code</p>
                </div>
                <div className="feature-item">
                  <FontAwesomeIcon icon={faRocket} className="feature-icon" />
                  <h4>Fast Performance</h4>
                  <p>Optimizing for speed and efficiency</p>
                </div>
                <div className="feature-item">
                  <FontAwesomeIcon icon={faUsers} className="feature-icon" />
                  <h4>Team Player</h4>
                  <p>Collaborating effectively with teams</p>
                </div>
                <div className="feature-item">
                  <FontAwesomeIcon icon={faLightbulb} className="feature-icon" />
                  <h4>Innovation</h4>
                  <p>Creating unique solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="card-grid">
            <div className="experience-card">
              <div className="card-header">
                <h3>Senior Software Developer</h3>
                <span className="date">2023 - Present</span>
              </div>
              <div className="card-body">
                <h4>Company Name</h4>
                <ul>
                  <li>Led development of key features</li>
                  <li>Mentored junior developers</li>
                  <li>Implemented best practices</li>
                </ul>
              </div>
            </div>
            <div className="experience-card">
              <div className="card-header">
                <h3>Software Developer</h3>
                <span className="date">2021 - 2023</span>
              </div>
              <div className="card-body">
                <h4>Previous Company</h4>
                <ul>
                  <li>Developed full-stack applications</li>
                  <li>Collaborated with cross-functional teams</li>
                  <li>Optimized application performance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Featured Projects</h2>
          <div className="card-grid">
            <div className="project-card">
              <div className="project-image">
                {/* Add project image here */}
              </div>
              <div className="card-header">
                <h3>E-Commerce Platform</h3>
                <div className="project-links">
                  <a href="#" className="project-link">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="#" className="project-link">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
              <div className="card-body">
                <p>A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Stripe</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                {/* Add project image here */}
              </div>
              <div className="card-header">
                <h3>Task Management App</h3>
                <div className="project-links">
                  <a href="#" className="project-link">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="#" className="project-link">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
              <div className="card-body">
                <p>A collaborative task management tool with real-time updates, team workspaces, and progress tracking.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Express.js</span>
                  <span>Socket.io</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                {/* Add project image here */}
              </div>
              <div className="card-header">
                <h3>Weather Dashboard</h3>
                <div className="project-links">
                  <a href="#" className="project-link">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="#" className="project-link">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
              <div className="card-body">
                <p>An interactive weather dashboard with 5-day forecasts, location search, and weather alerts.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>OpenWeather API</span>
                  <span>Chart.js</span>
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="customers" className="section">
          <h2>Customers</h2>
          <div className="card-grid">
            <div className="customer-card">
              <div className="customer-logo">
                {/* Add customer logo here */}
              </div>
              <div className="card-body">
                <h3>TechStart Inc.</h3>
                <p>Developed a full-stack e-commerce platform with real-time inventory management and payment integration.</p>
                <div className="customer-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
            <div className="customer-card">
              <div className="customer-logo">
                {/* Add customer logo here */}
              </div>
              <div className="card-body">
                <h3>DataFlow Analytics</h3>
                <p>Built a data visualization dashboard for business analytics with real-time data processing.</p>
                <div className="customer-tech">
                  <span>React</span>
                  <span>Python</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>
            <div className="customer-card">
              <div className="customer-logo">
                {/* Add customer logo here */}
              </div>
              <div className="card-body">
                <h3>HealthCare Plus</h3>
                <p>Created a patient management system with appointment scheduling and medical record tracking.</p>
                <div className="customer-tech">
                  <span>React</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tech-stack" className="section">
          <h2>Tech Stack</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>Frontend</h3>
              <ul>
                <li>React.js</li>
                <li>JavaScript/TypeScript</li>
                <li>HTML5/CSS3</li>
                <li>Redux/Context API</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Python</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Database</h3>
              <ul>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Tools & Others</h3>
              <ul>
                <li>Git/GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <p>I'm always interested in hearing about new projects and opportunities.</p>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Message" required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
