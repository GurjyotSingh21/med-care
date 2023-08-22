import React from 'react'
import '../public/styles/main.css'
import { FaHeartbeat,FaBars } from "react-icons/fa";

function Header() {
  return (
    <>
    <header className="header">
      <a href="#" className="logo"> <FaHeartbeat className='heart'/> Med<span>Care</span>
        </a>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#doctors">Doctors</a>
        <a href="#review">Reviews</a>
      </nav>
      <a href="#book" className="booking">Book Appointment</a>
      <div id="menu-btn"><FaBars /> </div>
    </header>
    </>
  );
}

export default Header
