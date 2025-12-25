import React, { useEffect, useRef } from 'react';

const Projects: React.FC = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('fade-in-on-scroll');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      headerRef.current.classList.add('fade-in-on-scroll');
      observer.observe(headerRef.current);
    }

    projectRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('fade-in-on-scroll');
        observer.observe(ref);
      }
    });

    if (ctaRef.current) {
      ctaRef.current.classList.add('fade-in-on-scroll');
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const projects = [
    // Web Apps (First 3)
    {
      title: "Sportify Website",
      description: "Team project: Full-stack e-commerce platform",
      features: [
        "Customers can buy products, sellers can post listings, and admins manage the system",
        "Integrated live events API for real-time ticketing",
        "AI/ML-powered product verification system using AI score-based analysis to ensure product authenticity and quality"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AI/ML", "RESTful APIs", "Live Events API"],
      image: "/Sportify.png",
      github: "https://github.com/Nomanijaz58/frontend-sportify.git",
      demo: "https://frontend-sportify.onrender.com",
      category: "Web App",
      emoji: "🏆"
    },
    {
      title: "Connectify PK",
      description: "Internet services platform with user authentication and service management.",
      features: [
        "User authentication system with secure login and registration",
        "Service management dashboard for managing internet packages and subscriptions",
        "Responsive design with modern UI for seamless user experience"
      ],
      techStack: ["HTML", "CSS", "Python", "MySQL"],
      image: "/connectify-pk.png",
      github: "https://github.com/abdTalks263/Internet-Website",
      demo: "https://internet-website-gqh4.vercel.app/",
      category: "Web App",
      emoji: "🌐"
    },
    {
      title: "Streamlining Dairy Operations",
      description: "Comprehensive farm management solution with role-based dashboards and SRS documentation.",
      features: [
        "Role-based access control with separate dashboards for farmers, managers, and admins",
        "Complete farm management system for tracking cattle, milk production, and inventory",
        "Comprehensive SRS documentation and FastAPI backend with MySQL database integration"
      ],
      techStack: ["React.js", "FastAPI", "MySQL", "Python"],
      image: "/The StreamLining Dairy Farm.png",
      github: "https://github.com/abdTalks263/The-StreamLining-Dairy-Operations",
      demo: "https://the-stream-lining-dairy-operations-iota.vercel.app/",
      category: "Web App",
      emoji: "🐄"
    },
    // Mobile Apps (Next 3)
    {
      title: "GiftWave",
      description: "Pakistan's premier gift delivery app with SwiftUI, Firebase integration, and MapKit navigation.",
      features: [
        "Real-time gift ordering and tracking system with Firebase backend integration",
        "Interactive MapKit navigation for delivery tracking and location services",
        "Modern SwiftUI interface with MVVM architecture for scalable and maintainable code"
      ],
      techStack: ["SwiftUI", "Firebase", "MapKit", "MVVM"],
      image: "/appstore 2.png",
      github: "https://github.com/abdTalks263/Gift-Wave",
      demo: null,
      category: "iOS",
      emoji: "🎁"
    },
    {
      title: "Gym Guide Pro",
      description: "Beginner-friendly fitness app with workout tracking, exercise library, and progress monitoring.",
      features: [
        "Comprehensive exercise library with detailed instructions and demonstrations",
        "Workout tracking system with progress monitoring and personal statistics",
        "Local data persistence using UserDefaults and reactive programming with Combine framework"
      ],
      techStack: ["SwiftUI", "UserDefaults", "Combine", "MVVM"],
      image: "/appstore 1.png",
      github: "https://github.com/abdTalks263/Gym-App",
      demo: null,
      category: "iOS",
      emoji: "💪"
    },
    {
      title: "StyleMart",
      description: "Modern fashion e-commerce Android app with Firebase integration, featuring purple-pink gradient theme, real-time sync, and comprehensive shopping features.",
      features: [
        "Complete e-commerce functionality with product browsing, cart management, and checkout",
        "Real-time data synchronization using Firebase for inventory and order updates",
        "Modern Material Design 3 UI with custom purple-pink gradient theme and smooth animations"
      ],
      techStack: ["Kotlin", "Firebase", "Material Design 3", "MVVM"],
      image: "/StyleMart.png",
      github: "https://github.com/abdTalks263/StyleMart",
      demo: null,
      category: "Android",
      emoji: "👗"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-light relative overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in mobile app development, web development, and software engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
          <div 
            key={index} 
            ref={(el) => { projectRefs.current[index] = el; }}
            className="bg-dark/50 backdrop-blur-sm border border-border-light rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 group flex flex-col h-full"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`relative z-0 w-full h-full transition-transform duration-300 group-hover:scale-110 ${project.title === "Gym Guide Pro" || project.title === "GiftWave" ? 'object-contain' : 'object-cover'}`}
                />
                <div className="absolute top-4 right-4 text-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  {project.emoji}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary text-xs font-semibold rounded-full border border-primary/30 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    <span className="gradient-text">{project.title}</span>
                  </h3>
                </div>
                
                {/* Project Description */}
                <div className="mb-4">
                  <p className="text-text-secondary text-sm leading-relaxed mb-2">
                    {project.description}
                  </p>
                  {(project as any).features && (
                    <ul className="space-y-2 mt-3">
                      {(project as any).features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-start text-text-secondary text-sm hover:text-text-primary transition-colors duration-300">
                          <svg className="w-4 h-4 text-primary mr-2.5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293z"/>
                          </svg>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-xs text-text-muted mb-3 font-semibold">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1.5 bg-dark-light/80 backdrop-blur-sm text-text-secondary text-xs rounded-lg border border-border-light hover:border-primary/50 hover:text-primary transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="flex flex-col gap-2.5 mt-auto">
                  {(project as any).githubBackend ? (
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-center py-2.5 px-4 rounded-xl border border-primary/30 hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/10 hover:border-primary/50 transition-all duration-300 text-sm font-semibold transform hover:scale-105"
                      >
                        Frontend
                      </a>
                      <a
                        href={(project as any).githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-center py-2.5 px-4 rounded-xl border border-primary/30 hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/10 hover:border-primary/50 transition-all duration-300 text-sm font-semibold transform hover:scale-105"
                      >
                        Backend
                      </a>
                    </div>
                  ) : (
                    project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-center py-2.5 px-4 rounded-xl border border-primary/30 hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/10 hover:border-primary/50 transition-all duration-300 text-sm font-semibold transform hover:scale-105"
                      >
                        GitHub
                      </a>
                    )
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-secondary/10 to-secondary/5 text-secondary text-center py-2.5 px-4 rounded-xl border border-secondary/30 hover:bg-gradient-to-r hover:from-secondary/20 hover:to-secondary/10 hover:border-secondary/50 transition-all duration-300 text-sm font-semibold transform hover:scale-105"
                    >
                      {project.category === "iOS" || project.category === "Android" ? "View Code" : "Live Demo"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="text-center mt-20">
          <div className="relative bg-dark/50 backdrop-blur-sm border border-border-light rounded-3xl p-10 md:p-12 max-w-3xl mx-auto hover:border-primary/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden group">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Want to See More?</span>
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
                Check out my GitHub for more projects and code samples, or get in touch to discuss potential collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/abdTalks263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View GitHub
                </a>
                <a
                  href="#contact"
                  className="group/btn relative px-8 py-4 text-lg font-semibold border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2 bg-dark/50 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
