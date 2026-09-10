import React from 'react';
const services = [
  { title: 'iOS development', description: 'Native apps built with Swift and SwiftUI, with intuitive interfaces and maintainable MVVM architecture.', tags: 'Swift & SwiftUI · Core Data · Push notifications' },
  { title: 'Android development', description: 'Responsive Android applications built with Java and Kotlin, following Material Design principles.', tags: 'Java & Kotlin · XML · SQLite · Firebase' },
  { title: 'Full-stack development', description: 'Complete web applications, from responsive interfaces to scalable backends and secure authentication.', tags: 'React · Node.js & Express · MongoDB & MySQL · JWT' }
];
const Services: React.FC = () => <section id="services" className="section services-section"><h2>WHAT I DO<span className="accent">.</span></h2><div className="service-grid">{services.map((service, i) => <article key={service.title}><span className="eyebrow">0{i + 1}</span><h3>{service.title}</h3><p>{service.description}</p><p className="service-tags">{service.tags}</p></article>)}</div></section>;
export default Services;
