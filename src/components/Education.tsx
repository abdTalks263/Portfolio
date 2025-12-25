import React, { useEffect, useRef } from 'react';

const Education: React.FC = () => {
  const educationRefs = useRef<(HTMLDivElement | null)[]>([]);
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

    educationRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('fade-in-on-scroll');
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      degree: "Bachelor of Software Engineering",
      institution: "University of Central Punjab, Lahore",
      period: "2021 - 2025",
      achievements: [
        "Software Engineering fundamentals and best practices",
        "Mobile app development with iOS and Android",
        "Full-stack web development using modern technologies",
        "Database design and management systems",
        "Software requirements specification (SRS) documentation",
        "Gained hands-on experience with modern development tools and frameworks"
      ],
      image: "/ucp.jpeg",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
        </svg>
      ),
      gradient: "from-primary to-primary/80"
    },
    {
      degree: "Intermediate in Computer Sciences",
      institution: "Pak Turk Schools & Colleges, Lahore",
      period: "2019 - 2021",
      achievements: [
        "Computer Science fundamentals and programming basics",
        "Mathematics and logical thinking development",
        "Academic excellence in computer-related subjects"
      ],
      image: "/pakturk.jpeg",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
        </svg>
      ),
      gradient: "from-secondary to-secondary/80"
    }
  ];

  return (
    <section id="education" className="py-20 bg-dark-light relative overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            My academic journey and qualifications in software engineering and computer sciences.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <div 
              key={index} 
              ref={(el) => { educationRefs.current[index] = el; }}
              className="bg-dark/50 backdrop-blur-sm border border-border-light rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 group overflow-hidden"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Education Header */}
              <div className="mb-6">
                {/* Institution Image */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.institution}
                    className={`w-full h-full ${item.institution.includes('Central Punjab') ? 'object-contain bg-dark-light' : 'object-cover'}`}
                  />
                </div>
                
                <div className="flex items-start mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text-primary mb-1">
                      <span className="gradient-text">{item.degree}</span>
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-1">
                      {item.institution}
                    </p>
                    <p className="text-text-secondary">
                      {item.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full mr-3"></span>
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start text-text-secondary hover:text-text-primary transition-colors duration-300">
                      <svg className="w-4 h-4 text-primary mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293z"/>
                      </svg>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
