import React from 'react'
import { FaUserMd } from "react-icons/fa";

function Icons() {
  return (
    <>
    <section className="icons-box" id="icons-box">
      <div className="icons">
      <FaUserMd />
        <h3 id="no">50+</h3>
        <p>doctors at work</p>
      </div>
      <div className="icons">
        
        <h3 id="no">1000+</h3>
        <p>satisfied patients</p>
      </div>
      <div className="icons">
       
        <h3 id="no">300+</h3>
        <p>beds Facilities</p>
      </div>
      <div className="icons">
        
        <h3 id="no">10+</h3>
        <p>emergency Ambulance</p>
      </div>
    </section>
    </>
  )
}

export default Icons
