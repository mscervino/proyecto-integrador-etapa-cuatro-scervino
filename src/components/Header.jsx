import React, { useState } from 'react';
import './Header.scss'
import Navbar from './Navbar';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="main-header">
      <SearchBar onMenuToggle={toggleMenu} />
      
      <Navbar isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
