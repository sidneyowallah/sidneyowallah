import React, { useEffect } from 'react';
import { data } from './data';
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Github, ChevronRight, Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" onClick={scrollToSection('home')} className="logo font-bold text-xl uppercase tracking-widest no-underline" style={{ color: 'var(--text-primary)' }}>
          SO.
        </a>
        <div className="flex items-center gap-8">
          <div className="nav-links">
            <a href="#about" onClick={scrollToSection('about')}>About</a>
            <a href="#projects" onClick={scrollToSection('projects')}>Projects</a>
            <a href="#experience" onClick={scrollToSection('experience')}>Experience</a>
            <a href="#education" onClick={scrollToSection('education')}>Education</a>
          </div>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="hero" id="home">
    <div className="container animate-fade-in" style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'var(--text-primary)' }}>{data.personal.name}</h1>
      <p style={{ fontSize: '1rem', fontWeight: '400', margin: '0 auto 2rem' }}>{data.personal.title}</p>
      <div className="social-links">
        <a href={`mailto:${data.personal.email}`} title="Email Me">
          <Mail size={18} />
        </a>
        <a href={data.personal.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
          <Linkedin size={18} />
        </a>
        <a href={data.personal.github} target="_blank" rel="noopener noreferrer" title="GitHub Profile">
          <Github size={18} />
        </a>
      </div>
    </div>
  </section>
);

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-4xl font-bold mb-4" style={{ fontSize: '2rem', fontWeight: '500' }}>{title}</h2>
    {subtitle && <p className="text-secondary max-width-600">{subtitle}</p>}
  </div>
);

const Experience = () => (
  <section id="experience">
    <div className="container">
      <div className="experience-layout">
        <div className="experience-header-wrapper">
          <h2 className="experience-title">Experience<span className="title-dash"></span></h2>
        </div>
        <div className="experience-timeline">
          {data.experience.map((job, idx) => (
            <div key={idx} className="experience-item">
              <div className="experience-card">
                <div className="experience-card-header">
                  <div className="role-company">
                    <h3 className="experience-role">{job.role}</h3>
                    <p className="experience-company">{job.company}</p>
                  </div>
                  <span className="experience-date">{job.period}</span>
                </div>
                <ul className="experience-highlights">
                  {job.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills">
    <div className="container">
      <SectionHeader title="Skills" />
      <div className="skills-grid">
        <div className="skill-category">
          <h4 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '1rem' }}>Core Stack</h4>
          <div className="skill-tags">
            {data.skills.core.Languages.map(s => <span key={s} className="skill-tag">{s}</span>)}
            {data.skills.core.Frameworks.map(s => <span key={s} className="skill-tag">{s}</span>)}
          </div>
        </div>
        <div className="skill-category">
          <h4 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '1rem' }}>Cloud & Architecture</h4>
          <div className="skill-tags">
            {data.skills.key.map(s => <span key={s} className="skill-tag">{s}</span>)}
          </div>
        </div>
        <div className="skill-category">
          <h4 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '1rem' }}>DevOps</h4>
          <div className="skill-tags">
            {data.skills.inTraining.DevOps.map(s => <span key={s} className="skill-tag">{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education">
    <div className="container">
      <div className="education-layout">
        <div className="education-header-wrapper">
          <h2 className="education-title">Education<span className="title-dash"></span></h2>
        </div>
        <div className="education-list">
          {data.education.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="education-card-header">
                <div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-school">{edu.school}</p>
                </div>
                <span className="education-date">{edu.period}</span>
              </div>
              <ul className="education-highlights">
                {edu.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="certs-inline-container">
            <h3 style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '1.5rem' }}>
              Certifications
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {data.certifications.map((cert, idx) => (
                <div key={idx} style={{ 
                  padding: '1rem', 
                  background: 'var(--card-bg)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  color: 'var(--text-primary)'
                }}>
                  {cert.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects">
    <div className="container">
      <div className="projects-layout">
        <div className="projects-header-wrapper">
          <h2 className="projects-title">Projects<span className="title-dash"></span></h2>
        </div>
        <div className="projects-list">
          {data.projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-row-card no-underline"
            >
              <div className="project-row-content">
                <span className="project-number">{project.id}</span>
                <h3 className="project-row-title">{project.title}</h3>
                <p className="project-row-desc">{project.description}</p>
                <div className="project-row-tags">
                  {project.technologies.map(tag => (
                    <span key={tag} className="project-row-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-row-arrow">
                <div className="arrow-circle">
                  <ExternalLink size={18} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about">
    <div className="container">
      <SectionHeader title="About Me" />
      <p className="about-summary">
        {data.personal.summary}
      </p>
      <div className="contact-pill-grid" style={{ marginBottom: '4rem' }}>
        <a href={`mailto:${data.personal.email}`} className="contact-pill">
          <div style={{ color: 'var(--text-secondary)' }}><Mail size={18} /></div>
          <span>{data.personal.email}</span>
        </a>
        <div className="contact-pill">
          <div style={{ color: 'var(--text-secondary)' }}><Phone size={18} /></div>
          <span>{data.personal.phone}</span>
        </div>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '500' }}>Skills</h3>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <div className="skill-category" style={{ flex: '1', minWidth: '280px' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '1rem' }}>Core Stack</h4>
          <div className="skill-tags">
            {data.skills.core.Languages.map(s => <span key={s} className="skill-tag">{s}</span>)}
            {data.skills.core.Frameworks.map(s => <span key={s} className="skill-tag">{s}</span>)}
          </div>
        </div>
        <div className="skill-category" style={{ flex: '1', minWidth: '280px' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '1rem' }}>Cloud & Architecture</h4>
          <div className="skill-tags">
            {data.skills.key.map(s => <span key={s} className="skill-tag">{s}</span>)}
          </div>
        </div>
        <div className="skill-category" style={{ flex: '1', minWidth: '280px' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '1rem' }}>DevOps</h4>
          <div className="skill-tags">
            {data.skills.inTraining.DevOps.map(s => <span key={s} className="skill-tag">{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer-minimal">
    <div className="container">
      <p>© {new Date().getFullYear()} {data.personal.name}. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => {
  const [theme, setTheme] = React.useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
};

export default App;
