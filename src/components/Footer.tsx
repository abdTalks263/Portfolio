import React from 'react';
import HeroPaint from './HeroPaint';

const Footer: React.FC = () => (
  <footer className="footer">
    <HeroPaint className="footer-paint hero-paint" />
    <div className="footer-top">
      <a href="https://www.linkedin.com/in/muhammad-abdullah-latif-70b8b7237/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
      <a href="https://github.com/abdTalks263" target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
      <a href="/Muhammad_Abdullah_Resume.pdf" download>RESUME ↗</a>
    </div>
    <a className="footer-title" href="mailto:abdullahlatifrandhawa@gmail.com">LET’S BUILD<span aria-hidden="true">↗</span></a>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Muhammad Abdullah Latif</span>
      <a href="#hero">BACK TO TOP ↑</a>
    </div>
  </footer>
);

export default Footer;
