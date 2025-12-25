import React, { useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

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

    skillRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('fade-in-on-scroll');
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    {
      category: "Mobile Development",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.78-1.09-.11-2.21-.11-3.37 0-1.03.1-2.1.17-3.08-.78-.99-.96-.74-2.6-.74-4.22 0-1.62-.25-3.26.74-4.22.98-.95 2.05-.88 3.08-.78 1.16.11 2.28.11 3.37 0 1.03-.1 2.1-.17 3.08.78.99.96.74 2.6.74 4.22 0 1.62.25 3.26-.74 4.22zM12.03 3.5c-3.37 0-6.1 2.74-6.1 6.11 0 3.37 2.73 6.11 6.1 6.11 3.37 0 6.1-2.74 6.1-6.11 0-3.37-2.73-6.11-6.1-6.11z"/>
        </svg>
      ),
      color: "from-primary to-primary/80",
      skills: ["Swift", "SwiftUI", "Java", "Kotlin", "XML", "MVVM Architecture"]
    },
    {
      category: "Web Development",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      color: "from-secondary to-secondary/80",
      skills: ["React.js", "Node.js", "Express.js", "HTML/CSS", "JavaScript"]
    },
    {
      category: "Backend & Database",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      color: "from-primary to-secondary",
      skills: ["MongoDB", "MySQL", "Firebase", "REST APIs", "JWT Authentication"]
    },
    {
      category: "Tools & Technologies",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      ),
      color: "from-secondary to-primary",
      skills: ["Git/GitHub", "Docker", "Postman", "Android Studio", "Xcode"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-light relative overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            My technical skills and competencies developed through academic projects and hands-on experience
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technicalSkills.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              ref={(el) => { skillRefs.current[categoryIndex] = el; }}
              className="bg-dark/50 backdrop-blur-sm border border-border-light rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
              style={{ transitionDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <span className="gradient-text">{category.category}</span>
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2.5 bg-dark border border-border-light text-text-secondary rounded-lg text-sm font-semibold hover:border-primary hover:text-primary hover:bg-primary/10 hover:shadow-lg transition-all duration-300 transform hover:scale-110 cursor-default"
                    style={{ transitionDelay: `${skillIndex * 0.02}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
