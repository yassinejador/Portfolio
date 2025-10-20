'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// SVG Icons for skills
const SkillIcon = ({ name, icon }: { name: string; icon: string }) => (
  <div className="group flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
    <div className="w-12 h-12 mb-2 flex items-center justify-center">
      <Image
        src={icon}
        alt={name}
        width={48}
        height={48}
        className="w-full h-full object-contain"
      />
    </div>
    <span className="text-sm font-medium text-white/90 text-stroke-medium">{name}</span>
  </div>
);

// Project Icons
const WhiteboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

const ExpenseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const skills = [
  // Programming Languages
  { name: 'Java', icon: './java-svgrepo-com.svg', category: 'Languages' },
  { name: 'PHP', icon: './php-svgrepo-com.svg', category: 'Languages' },
  { name: 'Python', icon: './python-svgrepo-com.svg', category: 'Languages' },
  { name: 'JavaScript', icon: './js-svgrepo-com.svg', category: 'Languages' },
  { name: 'TypeScript', icon: './typescript-icon-svgrepo-com.svg', category: 'Languages' },
  { name: 'HTML', icon: './html-5-svgrepo-com.svg', category: 'Languages' },
  { name: 'CSS', icon: './css-3-svgrepo-com.svg', category: 'Languages' },
  { name: 'XML', icon: './xml-document-svgrepo-com.svg', category: 'Languages' },

  // Technologies
  { name: 'Spring Boot', icon: './spring-icon-svgrepo-com.svg', category: 'Technologies' },
  { name: 'Spring Security', icon: './spring-security.svg', category: 'Technologies' },
  { name: 'Hibernate', icon: './hibernate-svgrepo-com.svg', category: 'Technologies' },
  { name: 'JUnit', icon: './junit5-svgrepo-com.svg', category: 'Technologies' },
  { name: 'Mockito', icon: './cap-svgrepo-com.svg', category: 'Technologies' },
  { name: 'Laravel', icon: './laravel-svgrepo-com.svg', category: 'Technologies' },
  { name: 'React', icon: './react-svgrepo-com.svg', category: 'Technologies' },
  { name: 'Angular', icon: './angular-svgrepo-com.svg', category: 'Technologies' },

  // Databases
  { name: 'MySQL', icon: './mysql.svg', category: 'Databases' },
  { name: 'PostgreSQL', icon: './postgresql-logo-svgrepo-com.svg', category: 'Databases' },
  { name: 'MongoDB', icon: './mongodb-svgrepo-com.svg', category: 'Databases' },

  // Tools
  { name: 'Tomcat', icon: './tomcat-svgrepo-com.svg', category: 'Tools' },
  { name: 'Maven', icon: './maven-svgrepo-com.svg', category: 'Tools' },
  { name: 'Docker', icon: './docker-svgrepo-com.svg', category: 'Tools' },
  { name: 'Kubernetes', icon: './kubernetes-svgrepo-com.svg', category: 'Tools' },
  { name: 'Postman', icon: './postman-icon-svgrepo-com.svg', category: 'Tools' },
  { name: 'Git', icon: './git-svgrepo-com.svg', category: 'Tools' },
  { name: 'Jira', icon: './jira-svgrepo-com.svg', category: 'Tools' },
  { name: 'Agile', icon: './agile-development-svgrepo-com.svg', category: 'Tools' },

  // Operating Systems
  { name: 'Linux', icon: './ubuntu-svgrepo-com.svg', category: 'OS' },
  { name: 'Windows', icon: './windows-applications-svgrepo-com.svg', category: 'OS' },
];

const projects = [
  {
    title: 'Whiteboard App',
    description: 'Containerized Angular Spring Boot application with Docker, Oracle Database XE, JWT authentication, and optimized gallery search.',
    tech: ['Angular', 'Spring Boot', 'Docker', 'Oracle DB'],
    icon: <WhiteboardIcon />
  },
  {
    title: 'AI Research Assistant',
    description: 'AI-powered research assistant that retrieves academic data from arXiv database using NLP and semantic search.',
    tech: ['Python', 'NLP', 'Machine Learning', 'API'],
    icon: <AIIcon />
  },
  {
    title: 'Expense Tracker',
    description: 'React Native Spring Boot app with real-time updates, WebSockets, Kafka notifications, and PostgreSQL.',
    tech: ['React Native', 'Spring Boot', 'WebSockets', 'Kafka'],
    icon: <ExpenseIcon />
  },
  {
    title: 'Mail Management System',
    description: 'Next.js web application for institutional mail management with tracking, archiving, and role-based access.',
    tech: ['Next.js', 'TypeScript', 'Authentication', 'Database'],
    icon: <MailIcon />
  }
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setResponseMessage(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setResponseMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setResponseMessage('Failed to send message. Please try again later.');
    }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">Portfolio</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-slate-300 hover:text-white transition-colors">Experience</a>
              <a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
              <a href="#awards" className="text-slate-300 hover:text-white transition-colors">Awards</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-slate-300 hover:text-white focus:outline-none focus:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 rounded-lg mt-2 border border-slate-700">
              <a
                href="#home"
                className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#experience"
                className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#awards"
                className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Awards
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-24">
          {/* Left: Text Content */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-100 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Hi, I'm JADOR Yassine
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Software Engineer passionate about building efficient, scalable, and thoughtful solutions.
            </p>
            <p className="text-lg mb-12 text-slate-400 max-w-2xl">
              I enjoy solving complex problems and writing clean, high-performance code.
              Comfortable across the stack - Spring Boot, Laravel, ReactJS, NextJS, Angular, Git, Docker, Kubernetes, PostgreSQL, and MySQL - I like making systems work seamlessly together.
              Always curious, always improving.
            </p>
            <div className="flex flex-col sm:flex-row justify-start gap-4">
              <a href="#projects" className="backdrop-blur-sm border border-cyan-400 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
                View My Work
              </a>
              <a href="#contact" className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-slate-700/80">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="./profil.jpg"
              alt="JADOR Yassine"
              className="w-96 h-96 rounded-full border-4 border-slate-700 shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-relaxed">
                I am a passionate and dedicated software engineer with a Master's Degree in Computer Science
                and Data Analysis from the Faculty of Sciences - El Jadida, Morocco. My academic journey
                includes a Bachelor's Degree in Software and Web Development from Ecole Normale Superieure - Tetouan,
                and a Specialized Technician Diploma in Full Stack Development from Specialized Institute Of Applied Technology NTIC - Casablanca.
              </p>
              <p className="text-lg leading-relaxed">
                My experience includes full-stack development internships where I contributed to building
                comprehensive platforms and key features for various applications. I am adept at utilizing
                frameworks like Laravel, React, Angular, Spring Boot, and Symfony to create robust, scalable solutions.
              </p>
              <p className="text-lg leading-relaxed">
                I am passionate about leveraging technology to solve real-world problems, with particular
                interest in DevOps, Distributed Architectures and AI.
              </p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-300">English (Full Proficiency)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-300">French (Intermediate)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-300">Arabic (Native)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Work Experience</h2>
          <div className="space-y-8">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Full Stack Development Intern</h3>
                <span className="text-blue-400 font-semibold">April 2024 – June 2024</span>
              </div>
              <p className="text-lg text-slate-300 mb-4">Up Network Maroc, Tetouan, Morocco</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Developed a comprehensive conference management platform focusing on code quality and software engineering best practices using Laravel framework.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Created user-friendly dashboards for various roles (admin, organizers, evaluators, authors and participants) to manage details, statistics, new conferences, and articles.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Developed and optimized a conference search engine, significantly improving performance by reducing search times from 400ms to 90ms for 10,000+ conferences.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Implemented automated certificate generation for participants, authors, evaluators, and other roles.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Full Stack Development Intern</h3>
                <span className="text-blue-400 font-semibold">April 2023 – May 2023</span>
              </div>
              <p className="text-lg text-slate-300 mb-4">IA FACTORY, Casablanca, Morocco</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Developed key features for student, teacher, and parent management within the school application using React and Symfony.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Designed modules for tracking student information, including personal details, academic records, and performance metrics.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Leveraged Meris and UML conception while ensuring scalability and maintainability.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Implemented Material-UI framework, enhancing user interface and overall design aesthetic.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Skills & Technologies</h2>
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {categorySkills.map((skill) => (
                  <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:bg-slate-700/80 transition-all duration-300 hover:scale-105">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 text-white mr-4">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Honors & Awards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">AI2SD 2025 Hackathon</h3>
              <p className="text-blue-400 font-semibold mb-3">May 2025 • 3rd Place</p>
              <p className="text-slate-300">Participated in one of Morocco's largest tech competitions and secured 3rd place.</p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">IEEE Smart Cities Futures Summit</h3>
              <p className="text-blue-400 font-semibold mb-3">May 2024 • 3rd Place</p>
              <p className="text-slate-300">Participated in the GITEX AFRICA 2024 IEEE Smart Cities Futures Summit Hackathon.</p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">Smart Cities Hackathon</h3>
              <p className="text-blue-400 font-semibold mb-3">May 2024 • 6th Place</p>
              <p className="text-slate-300">Secured 6th place out of 50 teams in the Smart Cities Hackathon hosted by Ecole Normale Supérieure of Martil.</p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">Best Final Project</h3>
              <p className="text-blue-400 font-semibold mb-3">June 2023 • 19.5/20</p>
              <p className="text-slate-300">Awarded Best Final Project in my class with a score of 19.5/20.</p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">WorldSkills 2023</h3>
              <p className="text-blue-400 font-semibold mb-3">June 2023</p>
              <p className="text-slate-300">Selected by the top developers of my institute and participated in the WorldSkills 2023 competition.</p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Certificates</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <h4 className="text-lg font-bold text-white mb-2">Oracle Cloud Infrastructure</h4>
                <p className="text-blue-400">2025 Certified AI Foundations Associate</p>
                <p className="text-slate-400 text-sm mt-2">September 2025</p>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                <h4 className="text-lg font-bold text-white mb-2">Programming Languages</h4>
                <p className="text-blue-400">Python • JavaScript • SQL</p>
                <p className="text-slate-400 text-sm mt-2">November 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm always open to new opportunities and collaborations.
                Feel free to reach out if you'd like to work together!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <a href="mail:yassinejador@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                    yassinejador@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0110 4.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C17.135 18.18 20 14.442 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <a href="https://github.com/yassinejador" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                    github.com/yassinejador
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <a href="https://linkedin.com/in/yassinejador" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                    linkedin.com/in/yassinejador
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {responseMessage && (
                  <p className={`text-center ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {responseMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2025 JADOR Yassine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}