
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const lines = ["I BUILD", "MODERN & INTERACTIVE", "WEB EXPERIENCES"];

  const Side = [
    "Frontend development & UI engineering",
    "For startups and product-based companies",
  ];

   
  useEffect(() => {
    gsap.to(
      ".card",
      {
        scale:0.7,
        opacity: 0.5,
        scrollTrigger: {
          trigger: ".card",
          start: "top 10%",
          end: "bottom 20%",
          scrub: 0.5,


        },
      }
    );
  }, []);

  return (
   
    <div className=" card sticky h-screen w-full text-black/100 py-26">
      {lines.map((item, Lines) => (
        <h1
          key={Lines}
          className="text-[6vw] font-medium leading-tighter capitalize px-10  font-['Neue Montreal2'] "
        >
          {item}
        </h1>
      ))}
      <div className="border-width-1px border-gray-900 mt-25"></div>

      <div className="flex justify-between py-2 m-1">
        {Side.map((index, Value) => {
          return <p key={Value}>{index}</p>;
        })}
        <button className="uppercase border-width-2px border-black p-1 flex gap-2 rounded-2xl">
          View the projects{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
