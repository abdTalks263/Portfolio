import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <a href="#projects" className="skip-link">Skip to projects</a>
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
