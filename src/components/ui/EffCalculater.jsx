"use client";
import Image from "next/image";
import { useState } from "react";

export default function EffCalculator() {
  const [teamMembers, setTeamMembers] = useState(5);
  const [manualHours, setManualHours] = useState(10);

  // Placeholder calculation, adjustable later
  const price = teamMembers * manualHours * 10;

  return (
    <div className="lg:space-y-10 md:space-y-8 space-y-6">
      {/* Team Members Slider */}
      <div>
        <label className="mb-2 flex justify-between font-bold text-[#D1D5DB] text-sm">
          <span>Team Members</span>
          <span className="text-accent-blue font-black">{teamMembers}</span>
        </label>
        <input
          type="range"
          min="1"
          max="50"
          value={teamMembers}
          onChange={(e) => setTeamMembers(Number(e.target.value))}
          className="w-full h-1 rounded-lg appearance-none cursor-pointer
                     bg-[rgba(255,255,255,0.1)]
                     accent-accent-blue [&::-webkit-slider-thumb]:bg-accent-blue [&::-moz-range-thumb]:bg-accent-blue"
        />
      </div>

      {/* Manual Work Slider */}
      <div>
        <label className="mb-2 flex justify-between font-bold text-[#D1D5DB] text-sm">
          <span>Manual Work (Hrs/Week/Person)</span>
          <span className="text-accent-blue font-black">{manualHours}</span>
        </label>
        <input
          type="range"
          min="1"
          max="40"
          value={manualHours}
          onChange={(e) => setManualHours(Number(e.target.value))}
          className="w-full h-1 rounded-lg appearance-none cursor-pointer
                     bg-[rgba(255,255,255,0.1)]
                     accent-accent-blue [&::-webkit-slider-thumb]:bg-accent-blue [&::-moz-range-thumb]:bg-accent-blue"
        />
      </div>

      <span className="block border border-[#FFFFFF1A]"></span>

      {/* Price Display */}
      <div className="text-center mt-6 text-xl font-bold flex items-center justify-between rounded-2xl lg:px-6 lg:py-5 px-5 py-4 bg-[#00000066]">
        <div className="">
            <span className="font-extrabold text-[#6B7280] mb-1 text-xs">Potential Annual Savings</span>
            <h4 className="text-white font-extrabold lg:text-4xl text-3xl text-start">${price.toLocaleString()}</h4>
        </div>
        <Image alt="stocks icon" className="lg:w-12 w-10 lg:h-12 h-10" width={48} height={48} src="/images/stocks-bg.svg"/>
      </div>
    </div>
  );
}
