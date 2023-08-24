import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../public/styles/review.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
 function Reviews() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <section className="review" id="review">
    <div className='rcenter'>
    <h1 className="heading">Review</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='rcontent'>
          <p> I recently had a surgical procedure at Med Care Hospitals, and I cannot praise the staff enough for their exceptional care and compassion. From the moment I walked in, I felt at ease. The medical team was knowledgeable and took the time to explain every step of the process. The nurses were attentive and kind, making sure I was comfortable throughout my stay. The facility was clean and well-maintained. I highly recommend Med Care Hospitals to anyone in need of quality healthcare.</p>
           <h2>Kalpana Gaur</h2></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='rcontent'>
          <p>Very good &amp; fast service as well as interaction with doctor rishikesh umalkar. 100% satisfaction with doctors, hospital staff als all.Cleanlyness is also good. Overall full satisfaction as a patient.Definetly recommend this hospital to all friends &amp; relatives in future if needed.</p>
        <h2>Nishant Singh</h2></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='rcontent'>
          <p>We are having regular treatment from Dr Rushikesh Umalkar sir since last year as I had heart attack. He is like a God to me as he saved me n give me a life n very greatful to him His diagnosis is very perfect n he is very good n polite in nature which helps patients in their hard times. He is en excellent Dr. In cardiology field.</p>
          <h2>Ruchita yadav</h2>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className='rcontent'>
          <p>Exceptional care and a friendly staff. My experience at this hospital was top-notch.</p>
          <h2>Sakshi Jhoshi</h2>
        </div></SwiperSlide>
        <SwiperSlide>
        <div className='rcontent'>
          <p> Med Care Hospitals impressed me with their holistic approach to care. They didn't just treat the medical condition but also took into account my emotional and psychological well-being. The support services, including counseling and therapy options, were a valuable addition to my treatment plan.</p>
          <h2>Priya kapoor</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='rcontent'>
          <p>Warm and compassionate environment. The staff's dedication to patient comfort was evident.</p>
          <h2>Ram Sharma</h2>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className='rcontent'>
          <p>Modern medical facility with a patient-centered approach. MedCare Hospital focused on both my health and comfort.</p>
          <h2>Sameer Agrawal</h2>
        </div></SwiperSlide>
        <SwiperSlide>
        <div className='rcontent'>
          <p>
          My experience at Med Care Hospitals exceeded my expectations in every way. The medical professionals I encountered were not only skilled and experienced but also genuinely concerned about my well-being. They listened to my concerns, answered my questions, and tailored their approach to my individual needs. 
          </p>
          <h2>Devansh Tripathi</h2>
        </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>
      </section>
    </>
  );
}
export default Reviews