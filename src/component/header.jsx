import React, { useState } from 'react';
import '../../public/styles/main.css';
import { FaHeartbeat, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">

          <FaHeartbeat className="heart" /> Med<span>Care</span>
        </a>
        <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={closeMobileMenu}>
            Home
          </a>
          <a href="#services" onClick={closeMobileMenu}>
            Services
          </a>
          <a href="#about" onClick={closeMobileMenu}>
            About
          </a>
          <a href="#doctors" onClick={closeMobileMenu}>
            Doctors
          </a>
          <a href="#review" onClick={closeMobileMenu}>
            Reviews
          </a>
          {
            isMobileMenuOpen ? (<a className='booking_mobile' href="#book">Book Appointment</a>) : (
            ''
          )
          }
          
        </nav>
        <a className='booking' href="#book">Book Appointment</a>
        <div id="menu-btn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>
    </>
  );
}

export default Header;
