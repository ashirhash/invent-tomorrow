import ProcessCard from "./ui/ProcessCard";
import Arrow from "./icons/Arrow";

const Process = ({ processes = [] }) => {
  return (
    <section className="xl:pb-40 pb-10 max-md:pb-20">
      <div className="container-sm">
        <div className="xl:mb-32 lg:mb-26 md:mb-20 mb-10">
          <h2 className="mb-3 text-accent-blue font-black uppercase text-xs tracking-[5px] text-center">
            Evolutionary Steps
          </h2>
          <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl sm:text-4xl text-3xl font-bold text-white text-center mb-16">
            Our Proven Process
          </h1>

          <div className="grid md:grid-cols-3 grid-cols-1 max-md:gap-10 items-start relative">
            {/* Dotted line */}
            <div className="absolute max-md:hidden h-px w-4/5 mx-auto top-12 left-0 right-0 z-0 bg-dashed"></div>
            {/* Cards */}
            {processes.map((process) => (
              <ProcessCard {...process} key={process.key} />
            ))}
          </div>
        </div>
        <div className="flex items-center flex-col sm:gap-8 gap-5 max-w-137 mx-auto">
          <button type="button" className="capitalize flex gap-3 items-center lg:py-5 py-4 px-8 lg:px-10 bg-white rounded-full duration-300 xl:text-lg lg:text-base text-sm text-black font-bold hover:text-white hover:bg-accent-blue">
            Let's automate your business{" "}
            <Arrow />
          </button>
          <p className="text-accent-gray max-sm:text-xs font-medium text-center">
            See how much time we can save your team and start focusing on growth
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
