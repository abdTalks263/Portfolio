import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    // Web Apps (First 3)
    {
      title: "Contact Management Web App",
      description: "Full-stack web application with JWT authentication, REST APIs, and secure user management system.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      image: "/Contact app.png",
      github: "https://github.com/abdTalks263/Contact-Website",
      demo: "https://contact-website-32jk.vercel.app/",
      category: "Web App",
      emoji: "📱"
    },
    {
      title: "Connectify PK",
      description: "Internet services platform with user authentication and service management.",
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
      techStack: ["Kotlin", "Firebase", "Material Design 3", "MVVM"],
      image: "/StyleMart.png",
      github: "https://github.com/abdTalks263/StyleMart",
      demo: null,
      category: "Android",
      emoji: "👗"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-light relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            My Projects
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in mobile app development, web development, and software engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-dark border border-border-light rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 group flex flex-col h-full">
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full ${project.title === "Gym Guide Pro" || project.title === "GiftWave" ? 'object-contain' : 'object-cover'}`}
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                {/* Project Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-xs text-text-muted mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-dark-light text-text-secondary text-xs rounded border border-border-light">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary/10 text-primary text-center py-2 px-4 rounded-lg border border-primary/30 hover:bg-primary/20 transition-colors duration-300 text-sm font-medium"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-secondary/10 text-secondary text-center py-2 px-4 rounded-lg border border-secondary/30 hover:bg-secondary/20 transition-colors duration-300 text-sm font-medium"
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
        <div className="text-center mt-16">
          <div className="p-8 border border-border-light rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Want to See More?
            </h3>
            <p className="text-text-secondary mb-6">
              Check out my GitHub for more projects and code samples, or get in touch to discuss potential collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/abdTalks263"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-semibold border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                View GitHub
              </a>
              <a
                href="#contact"
                className="px-8 py-4 text-lg font-semibold border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
