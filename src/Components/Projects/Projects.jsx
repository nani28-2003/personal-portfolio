import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Projects = () => {
  return (
    <Swiper  className='h-screen w-screen overflow-hidden text-2xl font-bold mt-20'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
     
    >
      <SwiperSlide className='realtive' id='projects'>Project-1
        <div className=' absolute h-[80vh] w-[80vw] bg-amber-950 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

        </div>
      </SwiperSlide>
      <SwiperSlide
       className='realtive'>
        <div className=' absolute h-[80vh] w-[80vw] bg-amber-950 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

        </div>Project-2</SwiperSlide>
      <SwiperSlide
       className='realtive'>
        <div className=' absolute h-[80vh] w-[80vw] bg-amber-950 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

        </div>Project-3</SwiperSlide>
      <SwiperSlide
       className='realtive'>
        <div className=' absolute h-[80vh] w-[80vw] bg-amber-950 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

        </div>Project-4</SwiperSlide>
       <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
      ...
    </Swiper>
  );
};

export default Projects