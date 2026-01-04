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
    <section className="relative lg:pb-20 pb-10">
      <div className="container-sm md:flex md:justify-between md:gap-8">
        <div className="hidden md:block md:w-[40%]">
          <div className="sticky top-0 h-screen flex flex-col justify-center space-y-4">
            <h2 className="mb-3 text-accent-blue font-black uppercase text-xs tracking-[5px]">
              Why Choose Us
            </h2>
            <h1 className="text-6xl font-bold capitalize text-white mb-12">
              What sets us <span className="text-accent-blue">Apart</span>
            </h1>
            {whys.map((item, i) => (
              <button
                key={item.title}
                onClick={() => scrollToSection(i)}
                className={`text-left font-bold text-4xl transition-colors mb-8 ${
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
