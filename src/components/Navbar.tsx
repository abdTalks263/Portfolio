import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Abdullah_Resume.pdf';
    link.download = 'Abdullah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark/98 backdrop-blur-md border-b border-primary/20 shadow-lg' 
        : 'bg-dark/95 backdrop-blur-sm border-b border-border-light'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary hover:scale-110 transition-transform duration-300 inline-block"
            >
              <span className="gradient-text">AL</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-text-secondary hover:text-primary px-3 py-2 rounded-md text-base md:text-lg lg:text-xl font-medium transition-all duration-300 relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              
              {/* Resume Download Button */}
              <button
                onClick={handleDownloadResume}
                className="bg-primary text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg text-base md:text-lg lg:text-xl font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Resume
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-text-secondary hover:text-primary p-2 rounded-md transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-dark border-t border-border-light">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-text-secondary hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
              </a>
            ))}
            
            {/* Mobile Resume Download Button */}
            <button
              onClick={handleDownloadResume}
              className="w-full text-left bg-primary text-white px-3 py-2 rounded-lg text-base font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
