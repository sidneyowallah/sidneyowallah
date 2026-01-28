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
        <a href="#home" onClick={scrollToSection('home')} className="logo font-bold text-xl uppercase tracking-widest no-underline text-accent-primary">
          SY. <span className="text-secondary opacity-50">/</span>
        </a>
        <div className="flex items-center gap-8">
          <div className="nav-links">
            <a href="#about" onClick={scrollToSection('about')}>About</a>
            <a href="#experience" onClick={scrollToSection('experience')}>Experience</a>
            <a href="#skills" onClick={scrollToSection('skills')}>Skills</a>
            <a href="#education" onClick={scrollToSection('education')}>Education</a>
          </div>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="hero" id="home">
    <div className="container animate-fade-in">
      <h1 className="gradient-text">{data.personal.name}</h1>
      <p className="font-medium tracking-wide border-y border-white/5 py-4 inline-block uppercase text-sm mb-8">{data.personal.title}</p>
      <div className="social-links">
        <a href={`mailto:${data.personal.email}`} title="Email Me">
          <Mail size={20} />
        </a>
        <a href={data.personal.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
          <Linkedin size={20} />
        </a>
        <a href={data.personal.github} target="_blank" rel="noopener noreferrer" title="GitHub Profile">
          <Github size={20} />
        </a>
      </div>
    </div>
  </section>
);

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-4xl font-bold mb-4">{title}</h2>
    {subtitle && <p className="text-secondary max-width-600">{subtitle}</p>}
  </div>
);

const Experience = () => (
  <section id="experience" className="bg-secondary">
    <div className="container">
      <SectionHeader title="Work Experience" subtitle="A timeline of my professional journey in software engineering." />
      <div className="experience-list">
        {data.experience.map((exp, idx) => (
          <div key={idx} className="experience-item">
            <div className="exp-header">
              <div>
                <span className="exp-company">{exp.company}</span>
                <h3 className="mt-1">{exp.role}</h3>
              </div>
              <span className="exp-period">{exp.period}</span>
            </div>
            <p className="text-secondary mb-4 italic flex items-center gap-2">
              <MapPin size={14} /> {exp.location}
            </p>
            <ul className="exp-highlights">
              {exp.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills">
    <div className="container">
      <SectionHeader title="Technical Skills" subtitle="The tools and technologies I use to build robust software solutions." />
      <div className="skills-grid">
        <div className="skill-category">
          <h4 className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> Core Stack</h4>
          <div className="skill-tags">
            {data.skills.core.Languages.map(s => <span key={s} className="skill-tag">{s}</span>)}
            {data.skills.core.Frameworks.map(s => <span key={s} className="skill-tag">{s}</span>)}
          </div>
        </div>
        <div className="skill-category">
          <h4 className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> Cloud & Architecture</h4>
          <div className="skill-tags">
            {data.skills.key.map(s => <span key={s} className="skill-tag">{s}</span>)}
          </div>
        </div>
        <div className="skill-category">
          <h4 className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> DevOps (In Training)</h4>
          <div className="skill-tags">
            {data.skills.inTraining.DevOps.map(s => <span key={s} className="skill-tag">{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="bg-secondary">
    <div className="container">
      <SectionHeader title="Education" subtitle="My academic background and specialized training." />
      <div className="education-grid">
        {data.education.map((edu, idx) => (
          <div key={idx} className="edu-card">
            <h3 className="edu-school">{edu.school}</h3>
            <p className="edu-degree">{edu.degree}</p>
          </div>
        ))}
      </div>
      
      <div className="certs-container">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <div className="w-8 h-1 bg-accent-primary rounded-full"></div>
          Professional Certifications
        </h3>
        <div className="grid lg:grid-cols-2 gap-4">
          {data.certifications.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <span className="cert-name">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about">
    <div className="container">
      <div className="about-grid">
        <div className="about-card animate-fade-in">
          <SectionHeader title="About Me" />
          <p className="about-summary">
            {data.personal.summary}
          </p>
          <div className="contact-pill-grid">
            <a href={`mailto:${data.personal.email}`} className="contact-pill">
              <div className="text-accent-primary"><Mail size={20} /></div>
              <span>{data.personal.email}</span>
            </a>
            <div className="contact-pill">
              <div className="text-accent-primary"><Phone size={20} /></div>
              <span>{data.personal.phone}</span>
            </div>
          </div>
        </div>
        <div className="about-visual animate-fade-in">
          <div className="visual-box primary">
             <p className="text-3xl font-black mb-1">10+</p>
             <p className="text-secondary text-sm uppercase tracking-wider">Years Experience</p>
          </div>
          <div className="visual-box">
             <p className="text-3xl font-black mb-1">Cloud</p>
             <p className="text-secondary text-sm uppercase tracking-wider">Infrastructure Expert</p>
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
  const [theme, setTheme] = React.useState('light');

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
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
};

export default App;
