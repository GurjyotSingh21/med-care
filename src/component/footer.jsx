import React from 'react';
import '../../public/styles/main.css';
import { FaFacebook,FaInstagram,FaTwitter,FaChevronRight,FaPhoneAlt,FaEnvelope,FaMapMarkerAlt,FaLinkedinIn } from "react-icons/fa";

 // Import your footer styles
function Footer() {
  return (
    <>
    <section className='footer'id='footer'>
    <footer className="footer1">
      <div className="footer-content">
      <div className='foot'>
        <h3>Quick Links</h3>
        <a href="#home" > < FaChevronRight className='foot-i'/>Home</a>
          <a href="#services" >< FaChevronRight className='foot-i'/>Services</a>
          <a href="#about" >< FaChevronRight className='foot-i'/>About</a>
          <a href="#doctors" >< FaChevronRight className='foot-i'/>Doctors</a>
          <a href='#book'>< FaChevronRight className='foot-i'/>Book Appointment</a>
          <a href="#review" >< FaChevronRight className='foot-i'/>Reviews</a>
      </div>
      <div className='foot'>
        <h3>Our Services</h3>
        <a href="#services" > < FaChevronRight className='foot-i'/>Emergency Care</a>
          <a href="#services" >< FaChevronRight className='foot-i'/>Diagnostic Imaging</a>
          <a href="#services" >< FaChevronRight className='foot-i'/>Laboratory Services</a>
          <a href="#services" >< FaChevronRight className='foot-i'/>Inpatient Services</a>
          <a href="#services">< FaChevronRight className='foot-i'/>Intensive Care Unit (ICU)</a>
          <a href= "#services">< FaChevronRight className='foot-i'/>Pharmacy Services</a>
      </div>
      <div className='foot'>
        <h3>Contact Info</h3>
        <a href="#services" > < FaPhoneAlt className='foot-i'/>+123-456-7890</a>
          <a href="#services" >< FaPhoneAlt className='foot-i'/>+111-222-3333</a>
          <a href="#services" >< FaEnvelope className='foot-i'/>medcarehospital@gmail.com</a>
          <a href="#services" >< FaEnvelope className='foot-i'/>medcareemergrncy@gmail.com</a>
          <a href="#services">< FaMapMarkerAlt className='foot-i'/>Berlin,Germany-10115</a>
      </div>
        <div className="foot">
        <h3>Follow Us</h3>
          <a href="https://facebook.com/medcarehospital">< FaFacebook/>Facbook</a>
          <a href="https://twitter.com/medcarehospital">< FaTwitter/>Twitter</a>
          <a href="https://instagram.com/medcarehospital">< FaInstagram/>Instagram</a>
          <a href="https://linkdin.com/medcarehospital">< FaLinkedinIn/>linkdin</a>
        </div>
      </div> 
      <div className='credit'>
       <p>&copy; 2023 MedCare Hospital. All rights reserved.</p>
       </div>
    </footer>
    </section>
    </>
  );
}

export default Footer;
