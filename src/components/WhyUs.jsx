"use client";

import { useEffect, useRef, useState } from "react";
import WorkCard from "./ui/WorkCard";

export default function WhyUs({ whys = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef([]);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // IntersectionObserver only on desktop
  useEffect(() => {
    if (!isDesktop) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: "-55% 0px -25% 0px",
        threshold: 0.1,
      }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [isDesktop]);

  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="relative xl:pb-20 max-md:pb-20">
      <div className="container-sm md:flex md:justify-between md:gap-8">
        <div className=" xl:w-[40%] lg:w-[45%] ">
          <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-center space-y-4">
            <h2 className="mb-3 text-accent-blue font-black uppercase text-xs tracking-[5px]">
              Why Choose Us
            </h2>
            <h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold capitalize text-white lg:mb-12 mb-8">
              What sets us <span className="text-accent-blue">Apart</span>
            </h2>
            {isDesktop && whys.map((item, i) => (
              <button
                key={item.title}
                onClick={() => scrollToSection(i)}
                className={`text-left font-bold xl:text-4xl lg:text-3xl text-2xl transition-colors xl:mb-8 lg:mb-6 mb-4 ${
                  activeIndex === i
                    ? "text-white"
                    : "text-gray-400"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[50%] flex flex-col gap-8">
          {whys.map((why, i) => (
            <div
              key={why.title}
              ref={(el) => {
                if (el) sectionsRef.current[i] = el;
              }}
              className="md:min-h-[70vh] flex items-center"
            >
              <WorkCard {...why} key={why.key} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
