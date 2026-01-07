"use client";

import { useEffect, useState } from "react";

const icons = [
  "/images/birdlink.png",
  "/images/c.png",
  "/images/flow.png",
  "/images/gpt.png",
  "/images/stacks.png",
  "/images/pause.png",
  "/images/ubuntu.png",
  "/images/up.png",
  "/images/va.png",
  "/images/linkup.png",
  "/images/zapier.png",
];


export default function FerrisWheel() {
  const [windowSize, setWindowSize] = useState(0);
  const size = windowSize >= 1280 ? 500 : windowSize >= 768 ? 400 : 210;
  const iconSize = windowSize >= 1280 ? 110 :  windowSize >= 768 ? 80 : 45;
  const radius = size / 2 - iconSize / 2;
  const count = icons.length;

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  const iconStyles = icons.map((_, index) => {
    const angle = (360 / count) * index;
    return {
      transform: `rotate(${angle}deg) translate(${radius + iconSize / 2}px) rotate(-${angle}deg)`,
      left: `calc(50% - ${iconSize / 2}px)`,
      top: `calc(50% - ${iconSize / 2}px)`,
    };
  });

  return (
    <div
      className="relative aspect-square rounded-full border-[5px] border-dashed border-[#2271F8] max-sm:mx-auto"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 animate-spin-slow will-transform">
        {icons.map((src, index) => (
          <div
            key={src}
            className="absolute rotating-icon-position will-transform"
            style={iconStyles[index]}
          >
            <img
              src={src}
              alt=""
              width={iconSize}
              height={iconSize}
              className="rounded-full select-none pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
