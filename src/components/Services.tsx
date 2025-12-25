import React, { useEffect, useRef } from 'react';

const Services: React.FC = () => {
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
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

    if (ctaRef.current) {
      ctaRef.current.classList.add('fade-in-on-scroll');
      observer.observe(ctaRef.current);
    }

    serviceRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('fade-in-on-scroll');
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.78-1.09-.11-2.21-.11-3.37 0-1.03.1-2.1.17-3.08-.78-.99-.96-.74-2.6-.74-4.22 0-1.62-.25-3.26.74-4.22.98-.95 2.05-.88 3.08-.78 1.16.11 2.28.11 3.37 0 1.03-.1 2.1-.17 3.08.78.99.96.74 2.6.74 4.22 0 1.62.25 3.26-.74 4.22zM12.03 3.5c-3.37 0-6.1 2.74-6.1 6.11 0 3.37 2.73 6.11 6.1 6.11 3.37 0 6.1-2.74 6.1-6.11 0-3.37-2.73-6.11-6.1-6.11z"/>
        </svg>
      ),
      title: "iOS App Development",
      description: "Native iOS apps built with Swift and SwiftUI. Modern, intuitive interfaces with smooth animations and iOS design guidelines.",
      features: ["Swift & SwiftUI", "MVVM Architecture", "Core Data", "Push Notifications"],
      gradient: "from-primary to-primary/80"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.6808 12 7.6808s-3.5902.5631-5.1367 1.6649L4.841 5.8421a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
        </svg>
      ),
      title: "Android App Development",
      description: "Native Android applications using Java/Kotlin and XML layouts. Responsive design with Material Design principles.",
      features: ["Java & Kotlin", "XML Layouts", "SQLite Database", "Firebase Integration"],
      gradient: "from-secondary to-secondary/80"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: "Full-Stack Web Development",
      description: "Complete web solutions from frontend to backend. I create responsive, scalable applications with modern technologies and secure authentication.",
      features: ["React.js Frontend", "Node.js & Express Backend", "MongoDB & MySQL", "JWT Authentication & REST APIs"],
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-light relative overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Services I Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From concept to deployment, I provide comprehensive mobile app development and web development services that bring your ideas to life with cutting-edge technology and exceptional user experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => { serviceRefs.current[index] = el; }}
              className="bg-dark/50 backdrop-blur-sm border border-border-light rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Service Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                <span className="gradient-text">{service.title}</span>
              </h3>

              {/* Service Description */}
              <p className="text-text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                    <svg className="w-4 h-4 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293z"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="text-center mt-16">
          <div className="bg-dark/50 backdrop-blur-sm border border-border-light rounded-2xl p-8 max-w-2xl mx-auto hover:border-primary/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              <span className="gradient-text">Ready to Build Something Amazing?</span>
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
