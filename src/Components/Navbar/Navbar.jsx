import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navbar = () => {
  const navRef = useRef(null);
  const lastDir = useRef(0);

  useEffect(() => {
    const nav = navRef.current;

    ScrollTrigger.create({
      start: 100,
      end: document.body.scrollHeight,

      onUpdate: (self) => {
        if (self.direction === lastDir.current) return;

        // 🔽 Scroll DOWN → hide navbar
        if (self.direction === 1) {
          gsap.to(nav, {
            y: "-100%",
            duration: 0.3,
            ease: "power2.out",
          });
        }

        // 🔼 Scroll UP → show from top
        if (self.direction === -1) {
          gsap.fromTo(
            nav,
            { y: "-100%" },
            {
              y: "0%",
              duration: 0.35,
              ease: "power2.out",
            }
          );
        }

        lastDir.current = self.direction;
      },
    });
  }, []);

  // 🔗 Scroll to section
  const scrollToSection = (id) => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: `#${id}`,
      ease: "power3.inOut",
    });
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 z-[9999] w-full h-[10vh]
                 flex justify-between items-center
                 bg-[#F1F1F1]/10 backdrop-blur-md px-10"
    >
      {/* LOGO */}
      <div className="font-bold text-xl">LOGO</div>

      {/* NAV LINKS */}
      <div className="flex gap-3 text-zinc-800">
        {[
          { name: "Home", id: "home" },
          { name: "About", id: "about" },
          { name: "Skills", id: "skills" },
          { name: "Projects", id: "projects" },
          { name: "Dsa", id: "dsa" },
          { name: "Resume", id: "resume" },
          { name: "Contact", id: "contact" },
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.id)}
            className="text-lg capitalize px-4 py-2
                       hover:bg-black hover:text-white
                       hover:rounded-full transition-all"
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
