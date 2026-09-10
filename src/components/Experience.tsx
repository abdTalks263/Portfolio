import React from 'react';
const Experience: React.FC = () => {
  const experienceData = [
    {
      title: "Mobile & Web Developer (iOS, Android & Micro-Frontend)",
      company: "Medway Inc",
      period: "September 2025 – August 2026",
      responsibilities: [
        "Developed, released, and maintained Medway’s iOS (Swift/SwiftUI) and Android (Kotlin) applications on the Apple App Store and Google Play Store",
        "Developed and maintained client iOS applications for private deployment using Apple Private DNS setup",
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
      company: "Systems Limited",
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
    <section id="experience" className="section record-section">
      <h2>EXPERIENCE<span className="accent">.</span></h2>
      <div className="record-list">
        {experienceData.map(item => (
          <article className="record" key={item.company}>
            <h3>{item.company}</h3>
            <div>
              <h4>{item.title}</h4>
              <details className="project-details experience-details">
                <summary>KEY RESPONSIBILITIES & HIGHLIGHTS <span aria-hidden="true">↓</span></summary>
                <ul>
                  {item.responsibilities.map(text => <li key={text}>{text}</li>)}
                </ul>
              </details>
            </div>
            <span className="record-date">{item.period}</span>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Experience;
