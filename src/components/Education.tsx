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
  return <section id="education" className="section record-section"><h2>EDUCATION<span className="accent">.</span></h2><div className="record-list">{educationData.map(item => <article className="record" key={item.degree}><h3>{item.degree}</h3><div><h4>{item.institution}</h4><details className="education-details"><summary>Coursework & focus areas</summary><ul>{item.achievements.map(text => <li key={text}>{text}</li>)}</ul></details></div><span className="record-date">{item.period}</span></article>)}</div></section>;
};
export default Education;
