import React from 'react';
const groups = [
  { title: 'Mobile development', skills: ['Swift', 'SwiftUI', 'Java', 'Kotlin', 'XML', 'MVVM Architecture'] },
  { title: 'Web development', skills: ['React.js', 'Node.js', 'Express.js', 'HTML/CSS', 'JavaScript'] },
  { title: 'Backend & databases', skills: ['MongoDB', 'MySQL', 'Firebase', 'REST APIs', 'JWT Authentication'] },
  { title: 'Tools & technologies', skills: ['Git/GitHub', 'Docker', 'Postman', 'Android Studio', 'Xcode'] }
];
const Skills: React.FC = () => <section id="skills" className="section skills-section"><div className="section-intro"><h2>MY TOOLKIT<span className="accent">.</span></h2><p>The languages, frameworks, and tools<br />I use to bring ideas to life.</p></div><div className="skill-grid">{groups.map((group, i) => <div key={group.title} className="skill-group"><span className="eyebrow">0{i + 1}</span><h3>{group.title}</h3><div className="tech-list">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>;
export default Skills;
