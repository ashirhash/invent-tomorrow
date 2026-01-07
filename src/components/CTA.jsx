import React from "react";
import Calender from "./icons/Calender";

const CTA = () => {
  return (
    <section className="md:py-32 py-26 bg-[radial-gradient(circle_at_top_left,rgba(0,242,255,0.05),rgba(0,242,255,0))),
             bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),rgba(59,130,246,0))]">
      <div className="container-sm max-w-5xl">
        <h2 className="md:mb-12 mb-8 text-white font-bold 2xl:text-7xl xl:text-6xl lg:text-5xl text-3xl text-center">
          Start Solving Problems with AI Workflow Systems
        </h2>
        <button
          type="button"
          className="capitalize mx-auto flex gap-3 items-center lg:py-5 py-4 px-8 lg:px-10 bg-white rounded-full duration-300 xl:text-lg lg:text-base text-sm text-black font-bold hover:text-white hover:bg-accent-blue"
        >
          Book a Free Workflow Audit Now{" "}
          <Calender
            width={20}
            height={20}
            alt="next arrow" />
        </button>
      </div>
    </section>
  );
};

export default CTA;
