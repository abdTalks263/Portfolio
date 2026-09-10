import React from 'react';

const Projects: React.FC = () => {
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
    <section id="projects" className="section work-section">
      <div className="section-intro"><h2>FEATURED<br />WORK<span className="accent">.</span></h2><p>From full-stack platforms to native mobile apps.<br />A selection of things I’ve built, and the thinking behind them.</p></div>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project" key={project.title}>
            <a className={`project-visual project-visual-${index} ${project.category === "Web App" ? "project-web" : "project-mobile"}`} href={project.demo || project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>
              <div className="visual-caption"><span>{project.category}</span><span>0{index + 1}</span></div>
              <div className="project-image-stage"><img src={project.image} alt={`${project.title} application preview`} loading="lazy" /></div>
              <div className="project-visual-footer"><span className="project-image-title">{project.title}</span><span className="project-open" aria-hidden="true">↗</span></div>
            </a>
            <div className="project-copy">
              <span className="eyebrow">{project.category} / 0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">{project.techStack.map(tech => <span key={tech}>{tech}</span>)}</div>
              <details className="project-details"><summary>SEE DETAILS <span className="arrow" aria-hidden="true">↓</span></summary><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></details>
              <div className="project-links">{project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noopener noreferrer">LIVE WEBSITE <span aria-hidden="true">↗</span></a>}<a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer">VIEW CODE <span aria-hidden="true">↗</span></a></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Projects;
