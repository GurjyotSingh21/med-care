import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebook ,FaTwitter,FaLinkedin } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import '../public/styles/main.css'



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
            <img img src="/images/doctors1.jpg" ></img>
            <div className="img-content">
                <h2>Dr. Mike Noken</h2>
                
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide> <div className="swaper-image">
            <img img src="/images/doctors2.jpg" ></img>
        </div>
        </SwiperSlide>
        <SwiperSlide> <div className="swaper-image">
            <img img src="/images/doctors3.jpg" ></img>
        </div>
        </SwiperSlide>
        <SwiperSlide> <div className="swaper-image">
            <img img src="/images/doctors4.jpg" ></img>
        </div>
        </SwiperSlide>
        <SwiperSlide> <div className="swaper-image">
            <img img src="/images/doctors5.jpg" ></img>
        </div>
        </SwiperSlide>
        
        </div>
      </Swiper>
      
   
  </section>
  </>
  )
}

export default Doctors
