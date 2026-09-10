import React from 'react';
const Navbar: React.FC = () => (
  <nav className="hero-nav" aria-label="Main navigation">
    <a href="#about">ABOUT</a>
    <a href="#contact">CONTACT ME</a>
    <a href="/Muhammad_Abdullah_Resume.pdf" download>RESUME <span aria-hidden="true">↗</span></a>
  </nav>
);
export default Navbar;
