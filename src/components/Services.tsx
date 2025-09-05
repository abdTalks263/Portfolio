import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "iOS App Development",
      description: "Native iOS apps built with Swift and SwiftUI. Modern, intuitive interfaces with smooth animations and iOS design guidelines.",
      features: ["Swift & SwiftUI", "MVVM Architecture", "Core Data", "Push Notifications"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
        </svg>
      ),
      title: "Android App Development",
      description: "Native Android applications using Java/Kotlin and XML layouts. Responsive design with Material Design principles.",
      features: ["Java & Kotlin", "XML Layouts", "SQLite Database", "Firebase Integration"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Full-Stack Web Development",
      description: "Complete web solutions from frontend to backend. I create responsive, scalable applications with modern technologies and secure authentication.",
      features: ["React.js Frontend", "Node.js & Express Backend", "MongoDB & MySQL", "JWT Authentication & REST APIs"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-light relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Services I Offer
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From concept to deployment, I provide comprehensive mobile app development and web development services that bring your ideas to life with cutting-edge technology and exceptional user experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border border-border-light rounded-2xl hover:border-primary/40 transition-all duration-300 group"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                    <svg className="w-4 h-4 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.59L19 8l-9 9z"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="p-8 border border-border-light rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-text-secondary mb-6">
              Let's discuss your project and turn your vision into a reality. I'm here to help you create mobile apps and web solutions that users love.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-block"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
