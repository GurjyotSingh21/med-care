import React from 'react'
import '../public/styles/main.css'
import { FaChevronRight, FaUserMd,FaUser,FaBed, FaAmbulance} from "react-icons/fa";
function Home() {
  return (
    <><section className="home" id="home">
    <div className="content">
      <h3>Caring Hearts, Curing Lives</h3>
      <p>
        Make your heart health a priority! Visit the Heart Hospital today for
        a comprehensive heart health evaluation and personalized treatment
        plan. 
      </p>
      <a href="#" className="btn">Contact us <span> <FaChevronRight /></span></a>
    </div>
  </section>
  <section className="icons-box" id="icons-box">
      <div className="icons">
      <FaUserMd />
        <h3 id="no">50+</h3>
        <p>doctors at work</p>
      </div>
      <div className="icons">
        <FaUser />
        <h3 id="no">1000+</h3>
        <p>satisfied patients</p>
      </div>
      <div className="icons">
        <FaBed />
        <h3 id="no">300+</h3>
        <p>beds Facilities</p>
      </div>
      <div className="icons">
        <FaAmbulance />
        <h3 id="no">10+</h3>
        <p>emergency Ambulance</p>
      </div>
    </section>
  </>
  )
}

export default Home
