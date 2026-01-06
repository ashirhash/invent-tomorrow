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

const size = 600;
const iconSize = 110;
const radius = size / 2 - iconSize / 2;
const count = icons.length;

const iconStyles = icons.map((_, index) => {
  const angle = (360 / count) * index;
  return {
    transform: `rotate(${angle}deg) translate(${radius + 55}px) rotate(-${angle}deg)`,
  };
});

export default function FerrisWheel() {
  return (
    <div
      className="relative aspect-square rounded-full border-[5px] border-dashed border-[#2271F8]"
      style={{ width: size, height: size }}
    >
      {/* Single rotating container */}
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