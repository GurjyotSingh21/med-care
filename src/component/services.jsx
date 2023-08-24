import React from 'react'
import '../../public/styles/main.css'
import { FaChevronRight } from "react-icons/fa";


function Services() {
  return (
    <>
    <section className="services" id="services">
      <h1 className="heading">our <span> Services</span></h1>
      <div className="box-container">
        <div className="box">
          
          <h3>Emergency Care</h3>
          <p>
            Our hospital offers round-the-clock emergency medical services to
            handle critical situations such as accidents, sudden illnesses, and
            injuries. Our experienced medical team is always ready to provide
            immediate care and stabilize patients.
          </p>
          <a href="#" className="btn"
            >learn more<span><FaChevronRight /></span
          ></a>
        </div>
        <div className="box">
         
          <h3>Diagnostic Imaging</h3>
          <p>
            Our hospital is equipped with state-of-the-art diagnostic imaging
            facilities, including X-rays, MRIs, CT scans, and ultrasounds. These
            advanced technologies aid in accurate diagnosis and efficient
            treatment planning.
          </p>
          <a href="#" className="btn"
            >learn more<span><FaChevronRight /></span
          ></a>
        </div>
        <div className="box">
         
          <h3>Laboratory Services</h3>
          <p>
            Our in-house laboratory provides a comprehensive range of tests,
            including blood work, pathology, microbiology, and more. Fast and
            accurate test results contribute to timely diagnoses and effective
            treatment.
          </p>
          <a href="#" className="btn"
            >learn more<span><FaChevronRight /></span
          ></a>
        </div>
        <div className="box">
         
          <h3>Inpatient Services</h3>
          <p>
            We provide comfortable and well-equipped rooms for patients who
            require extended medical care and monitoring. Our inpatient services
            ensure personalized attention, medical treatment, and a conducive
            environment for recovery.
          </p>
          <a href="#" className="btn"
            >learn more<span><FaChevronRight /></span
          ></a>
        </div>
        <div className="box">
         
          <h3>Intensive Care Unit (ICU)</h3>
          <p>
            Our ICU is equipped with advanced monitoring and life-support
            equipment to provide critical care for patients with severe
            illnesses. Our skilled medical professionals ensure constant
            vigilance and specialized treatment.
          </p>
          <a href="#" className="btn"
            >learn more<span><FaChevronRight /></span
          ></a>
        </div>
        <div className="box">
         
          <h3>Pharmacy Services</h3>
          <p>
            Our pharmacy provides a wide range of medications prescribed by our
            medical team. Our pharmacists offer expert advice on medication
            management, potential side effects, and interactions to ensure safe
            and effective treatment.
          </p>
          <a href="#" className="btn"
            >learn more<span><FaChevronRight /></span
          ></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Services
