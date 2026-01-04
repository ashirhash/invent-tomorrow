import React from "react";
import EffCalculator from "./ui/EffCalculater";

const Invest = () => {
  return (
    <section className="lg:pb-40 sm:pb-20 pb-10">
      <div className="container-sm grid grid-cols-2 items-center justify-between gap-20">
        <div>
          <h2 className="mb-3 text-accent-blue font-black uppercase text-xs tracking-[5px]">
            Why Choose Us
          </h2>
          <h1 className="text-6xl font-bold capitalize text-white mb-4">
            Your Investment,{" "}
            <span className="text-accent-blue">Quantified</span>
          </h1>
          <p className="mb-10 text-lg font-bold text-accent-gray mr-10">
            See how AI and Automation reduces manual effort, lowers operating
            costs, and improves output— based on your numbers.
          </p>
          <div className="flex justify-between gap-5">
            <div>
              <h3 className="text-3xl mb-1 text-white font-extrabold">520+</h3>
              <span className="text-[#6B7280] text-xs uppercase font-bold tracking-widest">
                hours saved / mo
              </span>
            </div>
            <div>
              <h3 className="text-3xl mb-1 text-accent-blue font-extrabold">
                800%
              </h3>
              <span className="text-[#6B7280] text-xs uppercase font-bold tracking-widest">
                avg. first year roi
              </span>
            </div>
          </div>
        </div>
        <div className="p-12 rounded-[24px] border border-[#FFFFFF1A] bg-[linear-gradient(to_right,#3B82F620,#00F2FF20)]">
          <h3 className="text-2xl font-extrabold text-white mb-8">
            Efficiency Calculator
          </h3>
          <EffCalculator />
        </div>
      </div>
    </section>
  );
};

export default Invest;
