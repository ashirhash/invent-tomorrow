import Image from "next/image";

const ProcessCard = ({
  step = "",
  title = "",
  description = "",
  icon = "",
  alt = "",
}) => {
  return (
    <div className="flex flex-col items-center z-10">
      <div className="w-24 h-24 bg-[#050505] relative z-1 rounded-md flex justify-center items-center mb-10">
        <div className="absolute -inset-1 rounded-xl bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25)_40%,transparent_45%),linear-gradient(#3B82F6,#00F2FF)] blur-sm opacity-20 z-0"></div>

        <div className="w-8 h-8 rounded-full absolute -right-3 -top-3 z-2 text-white text-xs font-black bg-accent-blue flex justify-center items-center">
          {step}
        </div>

        <div className="bg-black w-full h-full relative z-1 rounded-2xl flex justify-center items-center">
          <Image
            width={40}
            height={40}
            src={icon}
            alt={alt}
            className="w-10 h-10"
          />
        </div>
      </div>

      <h3 className="text-white font-extrabold text-2xl mb-6 text-center">
        {title}
      </h3>

      <p className="text-[#6B7280] text-sm text-center max-w-81.5 font-bold">
        {description}
      </p>
    </div>
  );
};

export default ProcessCard;
