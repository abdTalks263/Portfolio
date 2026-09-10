import React from 'react';
import Navbar from './Navbar';
import HeroPaint from './HeroPaint';

const Hero: React.FC = () => (
  <section id="hero" className="hero">
    <HeroPaint />
    <div className="hero-top"><span>Hi, I’m Muhammad</span><span>FULL STACK & MOBILE DEVELOPER</span></div>
    <h1 className="hero-name" aria-label="Muhammad Abdullah Latif">
      <span className="name-first" aria-hidden="true">ABDULLAH</span>
      <span className="name-second" aria-hidden="true">
        <span>LA</span>
        <span className="portrait-window letter-t-window">
          <img src="/profile.png" alt="Muhammad Abdullah Latif" />
        </span>
        <span>IF</span>
      </span>
    </h1>
    <Navbar />
    <div className="hero-bottom"><p>I’m a full stack developer, building thoughtful digital experiences across web, iOS, and Android.</p><a className="text-link" href="#projects">EXPLORE MY WORK <span aria-hidden="true">↓</span></a></div>
  </section>
);
export default Hero;
