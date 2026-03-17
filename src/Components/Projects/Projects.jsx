import React, { useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ProjectImg1 from "../../assets/Fakejob.png";
import ProjectImg2 from "../../assets/Tic-Tac-Toe.png";

const Projects = () => {
  const swiperRef = useRef(null);

  return (
    <div id="projects">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-screen w-screen overflow-hidden text-2xl font-bold mt-20"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {/* Project 1 */}
        <SwiperSlide className="relative">
          <div className="absolute h-[80vh] w-[80vw] bg-black z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-5 p-6">

            <h1 className="text-white text-4xl font-bold text-center">
              🕵️ Fake Job Posting Detection
            </h1>

            <a
              href="https://github.com/nani28-2003/ai-fake-job-detection.git"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-80"
            >
              <img
                src={ProjectImg1}
                alt="Fake Job Detection Project"
                className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
              />

              <h2 className="text-white text-xl mt-2 font-semibold text-center">
                View Project
              </h2>
            </a>

          </div>
        </SwiperSlide>

        {/* Project 2 */}
        <SwiperSlide className="relative">
          <div className="absolute h-[80vh] w-[80vw] bg-black z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-5 p-6">

            <h1 className="text-white text-4xl font-bold text-center">
              Tic Tac Toe Game 🎮
            </h1>

            <a
              href="https://nani28-2003.github.io/tic-tac-toe/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-80"
            >
              <img
                src={ProjectImg2}
                alt="Tic-Tac-Toe Project"
                className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
              />

              <h2 className="text-white text-xl mt-2 font-semibold text-center">
                View Project
              </h2>
            </a>

          </div>
        </SwiperSlide>

      </Swiper>

      {/* ✅ Slide Control Buttons */}
      <div className="flex justify-center gap-5 mt-5">
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="bg-white px-4 py-2 rounded"
        >
          Prev
        </button>

        <button
          onClick={() => swiperRef.current.slideNext()}
          className="bg-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;