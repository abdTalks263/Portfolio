import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-light relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            About Me
          </h2>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            I am a Software Engineering graduate passionate about mobile app development. I specialize in building native iOS apps with Swift and SwiftUI, and Android apps using Java/Kotlin & XML. I enjoy creating efficient, user-friendly, and impactful digital solutions that solve real-world problems.
          </p>
          
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            My portfolio showcases a diverse range of projects, from full-stack web applications like Contact Management and Connectify PK, to native mobile apps including GiftWave and Gym Guide Pro. Each project demonstrates my commitment to clean code, modern development practices, and delivering exceptional user experiences.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn-primary"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 text-lg font-semibold border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
