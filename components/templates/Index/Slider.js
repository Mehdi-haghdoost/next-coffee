import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '@/styles/Slider.module.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
function Slider() {
  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>Slide 1</SwiperSlide>
    </Swiper>
  </>
  )
}

export default Slider