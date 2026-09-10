import React from 'react';
const About: React.FC = () => (
  <section id="about" className="section about-section">
    <div className="about-photo"><img src="/profile.png" alt="Muhammad Abdullah Latif" loading="lazy" /><span>BASED IN LAHORE, PAKISTAN</span></div>
    <div className="about-copy"><span className="eyebrow">A LITTLE ABOUT ME</span><h2>Curious mind.<br />Hands-on builder<span className="accent">.</span></h2><p>I’m Muhammad Abdullah Latif, a Software Engineering graduate passionate about building useful, intuitive digital products.</p><p>I develop native iOS apps with Swift and SwiftUI, Android apps with Java and Kotlin, and full-stack web applications with React and Node.js. I enjoy turning real-world problems into software that feels simple to use.</p><a href="/Muhammad_Abdullah_Resume.pdf" download className="text-link">DOWNLOAD MY RESUME <span aria-hidden="true">↗</span></a></div>
  </section>
);
export default About;
