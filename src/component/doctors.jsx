import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebook ,FaTwitter,FaLinkedin } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import '../../public/styles/main.css'



function Doctors() {
  return (
    <>
    <section className="doctors" id="doctors">
    <h1 className="heading"><span>Our</span> Doctors</h1>
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="swap-wrp">

        <SwiperSlide> <div className="swaper-image">
        <div className="container">
        <div className="card">
        <div className="slide slide1">
        <div className="content">
           <img img src="/images/doctors1.jpg" ></img>
           <div className="img-content">
           <h2>Dr.OLivia Clark</h2>
           </div>
           </div>
    </div>
    <div className="slide slide2">
        <div className="content">
            <h2>
                Cardiologist
            </h2>
           <h2>
             12 Year's Experience
           </h2>
        </div>
    </div>
    </div>
    </div>
    </div>
    </SwiperSlide>
    <SwiperSlide> <div className="swaper-image">
        <div className="container">
        <div className="card">
        <div className="slide slide1">
        <div className="content">
           <img img src="/images/doctors2.jpg" ></img>
           <div className="img-content">
           <h2>Dr.Harry Lewis</h2>
           </div>
           </div>
    </div>
    <div className="slide slide2">
        <div className="content">
          <h2>
                Cardiologist
            </h2>
           <h2>
             9 Year's Experience
           </h2>
        </div>
    </div>
    </div>
    </div>
    </div>
    </SwiperSlide>
    <SwiperSlide> <div className="swaper-image">
        <div className="container">
        <div className="card">
        <div className="slide slide1">
        <div className="content">
           <img img src="/images/doctors3.jpg" ></img>
           <div className="img-content">
           <h2>Dr.Christopher Brown</h2>
           </div>
           </div>
    </div>
    <div className="slide slide2">
        <div className="content">
        <h2>
                Neurologist
            </h2>
           <h2>
             18 Year's Experience
           </h2>
        </div>
    </div>
    </div>
    </div>
    </div>
    </SwiperSlide>
    <SwiperSlide> <div className="swaper-image">
        <div className="container">
        <div className="card">
        <div className="slide slide1">
        <div className="content">
           <img img src="/images/doctors4.jpg" ></img>
           <div className="img-content">
           <h2>Dr.  Joshua Robinson</h2>
           </div>
           </div>
    </div>
    <div className="slide slide2">
        <div className="content">
            <h2>
            ENT Specialist
            </h2>
            <h2>5 Year's Experience</h2>
        </div>
    </div>
    </div>
    </div>
    </div>
    </SwiperSlide>
    <SwiperSlide> <div className="swaper-image">
        <div className="container">
        <div className="card">
        <div className="slide slide1">
        <div className="content">
           <img img src="/images/doctors5.jpg" ></img>
           <div className="img-content">
           <h2>Dr. Simon Minter</h2>
           </div>
           </div>
    </div>
    <div className="slide slide2">
        <div className="content">
            <h2>
            General Physician
            </h2>
            <h2>3 Year's Experience</h2>
        </div>
    </div>
    </div>
    </div>
    </div>
    </SwiperSlide>
    <SwiperSlide> <div className="swaper-image">
        <div className="container">
        <div className="card">
        <div className="slide slide1">
        <div className="content">
           <img img src="/images/doctors6.jpg" ></img>
           <div className="img-content">
           <h2>Dr. Ryan Wilson</h2>
           </div>
           </div>
    </div>
    <div className="slide slide2">
        <div className="content">
            <h2>Physiotherapist
            </h2>
            <h2>6 Year's Experience</h2>
        </div>
    </div>
    </div>
    </div>
    </div>
    </SwiperSlide>
    <SwiperSlide> <div className="swaper-image">
        <div className="container">
        <div className="card">
        <div className="slide slide1">
        <div className="content">
           <img img src="/images/doctors7.jpg" ></img>
           <div className="img-content">
           <h2>Dr. Jessica Garica</h2>
           </div>
           </div>
    </div>
    <div className="slide slide2">
        <div className="content">
            <h2>
                Gnecologist, Oncology
            </h2>
            <h2>
                3 Year's Experience
            </h2>
        </div>
    </div>
    </div>
    </div>
    </div>
    </SwiperSlide>
        <SwiperSlide> <div className="swaper-image">
        <div className="container">
        <div className="card">
        <div className="slide slide1">
        <div className="content">
           <img img src="/images/doctors8.jpg" ></img>
           <div className="img-content">
           <h2>Dr. Daniel Martinez</h2>
           </div>
           </div>
    </div>
    <div className="slide slide2">
        <div className="content">
        <h2>
        Physiotherapist
            </h2>
           <h2>
             12 Year's Experience
           </h2>
        </div>
    </div>
    </div>
    </div>
    </div>
    </SwiperSlide>
        </div>
      </Swiper>
      
   
  </section>
  </>
  )
}

export default Doctors
