import React from 'react'
import '../public/styles/main.css'
import { FaHeartbeat,FaBars } from "react-icons/fa";

function Header() {
  return (
    <>
    <header class="header">
      <a href="#" class="logo"> <FaHeartbeat className='heart'/> Med<span>Care</span>
        </a>
      <nav class="navbar">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#doctors">Doctors</a>
        <a href="#book">Book</a>
        <a href="#review">Reviews</a>
      </nav>
      <div id="menu-btn"><FaBars /> </div>
    </header>
    </>
  );
}

export default Header
