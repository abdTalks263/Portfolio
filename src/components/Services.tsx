import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ),
      title: "iOS App Development",
      description: "Native iOS apps built with Swift and SwiftUI. Modern, intuitive interfaces with smooth animations and iOS design guidelines.",
      features: ["Swift & SwiftUI", "MVVM Architecture", "Core Data", "Push Notifications"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.6808 12 7.6808s-3.5902.5631-5.1367 1.6649L4.841 5.8421a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
        </svg>
      ),
      title: "Android App Development",
      description: "Native Android applications using Java/Kotlin and XML layouts. Responsive design with Material Design principles.",
      features: ["Java & Kotlin", "XML Layouts", "SQLite Database", "Firebase Integration"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
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
