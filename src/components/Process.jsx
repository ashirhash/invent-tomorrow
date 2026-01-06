import ProcessCard from "./ui/ProcessCard";
import Arrow from "./icons/Arrow";

const Process = ({ processes = [] }) => {
  return (
    <section className="lg:pb-40 sm:pb-20 pb-10">
      <div className="container-sm">
        <div className="mb-32">
          <h2 className="mb-3 text-accent-blue font-black uppercase text-xs tracking-[5px] text-center">
            Evolutionary Steps
          </h2>
          <h1 className="text-7xl font-bold text-white text-center mb-16">
            Our Proven Process
          </h1>

          <div className="grid grid-cols-3 items-start relative">
            {/* Dotted line */}
            <div className="absolute h-px w-4/5 mx-auto top-12 left-0 right-0 z-0 bg-dashed"></div>
            {/* Cards */}
            {processes.map((process) => (
              <ProcessCard {...process} key={process.key} />
            ))}
          </div>
        </div>
        <div className="flex items-center flex-col gap-8 max-w-137 mx-auto">
          <button type="button" className="capitalize flex gap-3 items-center py-5 px-10 bg-white rounded-full duration-300 text-lg text-black font-bold hover:text-white hover:bg-accent-blue">
            Let's automate your business{" "}
            <Arrow />
          </button>
          <p className="text-accent-gray font-medium text-center">
            See how much time we can save your team and start focusing on growth
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
