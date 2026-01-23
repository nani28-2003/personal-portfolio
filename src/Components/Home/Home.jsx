import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import video from "../../assets/bg-video.mp4";
import Navbar from "../Navbar/Navbar";
import Hero from "./Hero";
import Scrolling from "../Scrolling/Scrolling";
import AboutMe from "../AboutMe/AboutMe";
import JustAni from "../aboutme/JustAni";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
     <video className=" fixed h-screen w-full object-fill -z-50" src={video} loop muted autoPlay ></video>
    <div data-scroll-container ref={scrollRef}
    className=" relative overflow-x-hidden"
    id="home">
     
        <Navbar />
        <Hero />
        <Scrolling />
        <AboutMe />
        <JustAni />
        <Projects />
        <Skills/>
    </div></>
  );
};

export default Home;