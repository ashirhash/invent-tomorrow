import React from "react";
import EffCalculator from "./ui/EffCalculater";

const Invest = () => {
  return (
    <section className="lg:pb-40 sm:pb-20 pb-10">
      <div className="container-sm grid md:grid-cols-2 grid-cols-1 items-center justify-between lg:gap-20 gap-6">
        <div>
          <h2 className="mb-3 text-accent-blue font-black uppercase text-xs tracking-[5px]">
            Why Choose Us
          </h2>
          <h2 className="xl:text-6xl lg:text-5xl text-4xl font-bold capitalize text-white mb-4">
            Your Investment,{" "}
            <span className="text-accent-blue">Quantified</span>
          </h2>
          <p className="lg:mb-10 mb-6 xl:text-lg lg:text-base text-sm font-bold text-accent-gray lg:mr-10 mr-6">
            See how AI and Automation reduces manual effort, lowers operating
            costs, and improves output— based on your numbers.
          </p>
          <div className="flex max-lg:flex-col justify-between gap-5">
            <div>
              <h3 className="lg:text-3xl text-2xl lg:mb-1 text-white font-extrabold">520+</h3>
              <span className="text-[#6B7280] text-xs uppercase font-bold tracking-widest">
                hours saved / mo
              </span>
            </div>
            <div>
              <h3 className="lg:text-3xl text-2xl lg:mb-1 text-accent-blue font-extrabold">
                800%
              </h3>
              <span className="text-[#6B7280] text-xs uppercase font-bold tracking-widest">
                avg. first year roi
              </span>
            </div>
          </div>
        </div>
        <div className="xl:p-12 lg:p-10md:p-7 p-5 rounded-[24px] border border-[#FFFFFF1A] bg-[linear-gradient(to_right,#3B82F620,#00F2FF20)]">
          <h3 className="lg:text-2xl text-xl font-extrabold text-white lg:mb-8 mb-6">
            Efficiency Calculator
          </h3>
          <EffCalculator />
        </div>
      </div>
    </section>
  );
};

export default Invest;
