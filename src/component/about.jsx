import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import '../../public/styles/main.css'


function About() {
  return (
    <>
      <section className="about" id="about">
      <h1 className="heading"><span>About</span> us</h1>
      <div className="main">
        <div className="image">
          <img src="/images/doc_home.jpg"/>
        </div>
        <div className="content">
          <h3 className='about_title'>Welcome to MedCare hospital</h3>
          <p>
          At MedCare Hospital, we are dedicated to providing the highest quality healthcare services
          to our patients. With a team of experienced doctors, state-of-the-art facilities, and a
          patient-centered approach, we strive to deliver exceptional medical care to you and your
          loved ones.
          </p>
          <p>
          Our mission is to improve the health and well-being of the communities we serve through
          advanced medical treatments, compassionate care, and health education. We are committed to
          creating a safe and comfortable environment where you can receive the care you deserve.
          </p>
          <p> Whether you're in need of routine check-ups, specialized treatments, or emergency care,
          MedCare Hospital is here for you every step of the way. Your health is our priority, and
          we look forward to serving you and your family.</p>
          <a href="#" className="btn"
            >Read more<span> <FaChevronRight /> </span></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
