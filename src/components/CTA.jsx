import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <section className="py-32 bg-[radial-gradient(circle_at_top_left,rgba(0,242,255,0.05),rgba(0,242,255,0))),
             bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),rgba(59,130,246,0))]">
      <div className="container-sm">
        <h2 className="mb-12 text-white font-bold text-7xl text-center">
          Start Solving Problems with AI Workflow Systems
        </h2>
        <button
          type="button"
          className="capitalize mx-auto text-center flex gap-3 items-center py-5 px-10 bg-white rounded-full transition hover:brightness-75 text-lg text-black font-bold"
        >
          Book a Free Workflow Audit Now{" "}
          <Image
            src="/images/calender.svg"
            className="w-5 h-5"
            width={20}
            height={20}
            alt="next arrow"
          />
        </button>
      </div>
    </section>
  );
};

export default CTA;
