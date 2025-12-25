import React, { useEffect, useRef } from 'react';

const Experience: React.FC = () => {
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
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

    experienceRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('fade-in-on-scroll');
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  const experienceData = [
    {
      title: "Mobile & Web Developer (iOS, Android & Micro-Frontend)",
      company: "Medway Inc",
      period: "September 2025 – Current",
      responsibilities: [
        "Developed and maintained iOS (Swift/SwiftUI) and Android (Kotlin) applications",
        "Integrated backend APIs for authentication and real-time data handling",
        "Contributed to micro-frontend web modules with scalable, modular UI",
        "Optimized mobile and web components for performance and stability"
      ],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
        </svg>
      ),
      gradient: "from-primary to-primary/80"
    },
    {
      title: "Full Stack Developer Intern (Frontend Focused)",
      company: "System Limited",
      period: "July 2025 – November 2025",
      responsibilities: [
        "Worked as a Full Stack Developer Intern, primarily focused on frontend development",
        "Built and enhanced responsive user interfaces while collaborating with backend teams",
        "Integrated APIs and improved UI performance, usability, and code quality"
      ],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      gradient: "from-secondary to-secondary/80"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-light relative overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            My professional journey and contributions in software development.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experienceData.map((item, index) => (
            <div 
              key={index} 
              ref={(el) => { experienceRefs.current[index] = el; }}
              className="bg-dark/50 backdrop-blur-sm border border-border-light rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Experience Header */}
              <div className="mb-6">
                <div className="flex items-start mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text-primary mb-1">
                      <span className="gradient-text">{item.title}</span>
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-1">
                      {item.company}
                    </p>
                    <p className="text-text-secondary">
                      {item.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full mr-3"></span>
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2">
                  {item.responsibilities.map((responsibility, responsibilityIndex) => (
                    <li key={responsibilityIndex} className="flex items-start text-text-secondary hover:text-text-primary transition-colors duration-300">
                      <svg className="w-4 h-4 text-primary mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293z"/>
                      </svg>
                      {responsibility}
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

export default Experience;

