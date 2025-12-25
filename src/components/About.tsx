import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

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

    if (textRef1.current) {
      textRef1.current.classList.add('fade-in-on-scroll');
      observer.observe(textRef1.current);
    }

    if (textRef2.current) {
      textRef2.current.classList.add('fade-in-on-scroll');
      observer.observe(textRef2.current);
    }

    if (buttonsRef.current) {
      buttonsRef.current.classList.add('fade-in-on-scroll');
      observer.observe(buttonsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-dark-light relative overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
        </div>

        {/* About Content */}
        <div ref={aboutRef} className="max-w-5xl mx-auto">
          {/* First Paragraph */}
          <div className="mb-12">
            <p ref={textRef1} className="text-xl md:text-2xl text-text-secondary leading-relaxed text-center">
              I am a <span className="text-primary font-semibold">Software Engineering graduate</span> passionate about <span className="text-primary font-semibold">full-stack development</span>. I specialize in building native iOS apps with Swift and SwiftUI, Android apps using Java/Kotlin & XML, and full-stack web applications with React.js, Node.js, and modern technologies. I enjoy creating efficient, user-friendly, and impactful digital solutions that solve real-world problems.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="mx-4 w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          </div>

          {/* Second Paragraph */}
          <div className="mb-12">
            <p ref={textRef2} className="text-xl md:text-2xl text-text-secondary leading-relaxed text-center">
              My portfolio showcases a diverse range of projects, from full-stack web applications like <span className="text-primary font-semibold">Sportify</span> and <span className="text-primary font-semibold">Connectify PK</span>, to native mobile apps including <span className="text-primary font-semibold">GiftWave</span> and <span className="text-primary font-semibold">Gym Guide Pro</span>. Each project demonstrates my commitment to clean code, modern development practices, and delivering exceptional user experiences.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
            <a
              href="#projects"
              className="group relative px-8 py-4 text-lg font-semibold border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2 bg-dark/30 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
