import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
      <div className="navbar-container">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`menu-list ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#empresa">Empresa</a></li>
          <li><a href="#nuestro-programa">Nuestro Programa</a></li>
        </ul>
      </div>
    </nav>
  );
};

export{Header};
