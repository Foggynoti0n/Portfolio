import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${sticky ? 'nav-sticky' : ''}`}>
      <div className="container mx-auto flex  items-center justify-evenly">


        <div className="hidden lg:flex lg:items-center gap-4 text-white lg:justify-between lg:space-x-6" id="navbarCollapse">
          <a href="#home" className="nav-link  text-white">Inicio</a>
          <a href="#about" className="nav-link text-white">Sobre mi</a>
          <a href="#portfolio" className="nav-link text-white">Portfolio</a>
          <a href="#contact" className="nav-link text-white">Contact</a>
          <a href="#footer" className="nav-link text-white">Social media</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
