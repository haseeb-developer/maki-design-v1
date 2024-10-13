import React, { useState, useEffect } from 'react';
import './Header.css';
import Button from '../../components/button/button';
import Logo from '../../components/logo/logo';
import Menu from '../../components/menu/menu';
import Close from '../../components/close/close';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Case Studies</a>
        </div>

        <Logo />

        <div className="nav__links--btn">
          <Button />
        </div>

        <div className="responsive__menu__icon" onClick={toggleMenu}>
          <Menu />
        </div>
      </nav>

      <div className={`mobile__menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile__menu__close" onClick={toggleMenu}>
          <Close />
        </div>
        <div className="mobile__menu__links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Case Studies</a>
        </div>
        <div className="mobile__menu--btn">
          <Button />
        </div>
      </div>
    </header>
  );
};

export default Header;
