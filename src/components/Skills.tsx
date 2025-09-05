import React from 'react';

const Skills: React.FC = () => {
  const technicalSkills = [
    {
      category: "Mobile Development",
      skills: ["Swift", "SwiftUI", "Java", "Kotlin", "XML", "MVVM Architecture"]
    },
    {
      category: "Web Development",
      skills: ["React.js", "Node.js", "Express.js", "HTML/CSS", "JavaScript"]
    },
    {
      category: "Backend & Database",
      skills: ["MongoDB", "MySQL", "Firebase", "REST APIs", "JWT Authentication"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git/GitHub", "Docker", "Postman", "Android Studio", "Xcode"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-dark-light relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            My technical skills and competencies developed through academic projects and hands-on experience
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {technicalSkills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="p-8 border border-border-light rounded-3xl hover:border-primary/40 transition-all duration-500 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-5 py-3 bg-dark border border-border-light text-text-secondary rounded-xl text-sm font-semibold hover:border-primary hover:text-primary hover:bg-primary/10 hover:shadow-md transition-all duration-300 transform hover:scale-105"
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
