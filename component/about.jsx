import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import '../public/styles/main.css'


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
          <h3>Welcome to MedCare hospital</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            tenetur earum vitae quisquam. Distinctio voluptatem iste asperiores,
            incidunt at quo dolorem aliquid quia et nemo nam quasi accusantium
            sint id.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non neque
            laborum praesentium laudantium quibusdam necessitatibus nisi ullam
            voluptas modi voluptates, laboriosam, libero reiciendis alias
            consequatur quae accusantium odit consequuntur doloribus.
          </p>
          <a href="#" className="btn"
            >Read more<span> <FaChevronRight /> </span></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
