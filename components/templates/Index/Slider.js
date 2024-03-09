import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '@/styles/Slider.module.css'
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
function Slider() {
  return (
    <>
      <Swiper loop={true} navigation={true} modules={[Navigation]} className={styles.swiper} >
        <SwiperSlide
         className={styles.swiper_slide} 
         style={{backgroundImage : 'url("/images/carousel-1.jpg")'}}
         >
          <div class="carousel-item active">
            <div className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}>
              <h2 class="text-primary font-weight-medium m-0">We Have Been Serving</h2>
              <h1 class="display-1 text-white m-0">COFFEE</h1>
              <h2 class="text-white m-0">* SINCE 1950 *</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide 
        className={styles.swiper_slide}
        style={{backgroundImage : 'url("/images/carousel-2.jpg")'}}
        >
          <div class="carousel-item ">
            <div className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}>
              <h2 class="text-primary font-weight-medium m-0">We Have Been Serving</h2>
              <h1 class="display-1 text-white m-0">COFFEE</h1>
              <h2 class="text-white m-0">* SINCE 1950 *</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider