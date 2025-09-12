import React from 'react';

const Education: React.FC = () => {
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
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
        </svg>
      )
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
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="education" className="py-20 bg-dark-light relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Education
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            My academic journey and qualifications in software engineering and computer sciences.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <div key={index} className="p-8 border border-border-light rounded-2xl hover:border-primary/40 transition-all duration-300">
              {/* Education Header */}
              <div className="mb-6">
                {/* Institution Image */}
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4 shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.institution}
                    className={`w-full h-full ${item.institution.includes('Central Punjab') ? 'object-contain' : 'object-cover'}`}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-1">
                    {item.institution}
                  </p>
                  <p className="text-text-secondary">
                    {item.period}
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-text-primary mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start text-text-secondary">
                      <svg className="w-4 h-4 text-primary mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.59L19 8l-9 9z"/>
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
