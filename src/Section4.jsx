import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section4 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const backgroundImageUrl = "./bg_4.gif";
  const keyPoints = [
    {
      id: 1,
      title: "Ocean Reflectance",
      content:
        "Ocean reflectance is the sunlight reflected off the ocean's surface, influenced by water composition and surface conditions, affecting satellite data and climate analysis.",
    },
    {
      id: 2,
      title: "Whitecap Fraction",
      content:
        "Whitecap fraction is the percentage of the ocean surface covered by white foam from breaking waves. It’s influenced by wind speed and helps indicate ocean turbulence and air-sea gas exchange",
    },
    {
      id: 3,
      title: "Angular Light Distributions",
      content:
        "Angular light distribution refers to how light is scattered in different directions by particles in the atmosphere or ocean, influencing visibility and remote sensing measurements",
    },
    {
      id: 4,
      title: "Oil slick detection",
      content:
        "Oil slick detection involves identifying oil spills on water surfaces using methods like satellite imagery, radar, or aerial surveillance by analyzing differences in surface reflectance and texture",
    },
    // {
    //   id: 5,
    //   title: "Concentration of Brown/Black Carbon",
    //   content:
    //     "The concentration of brown or black carbon refers to the density of these carbonaceous aerosols in the atmosphere, typically measured in micrograms per cubic meter (µg/m³). These particles absorb sunlight and contribute to atmospheric warming and climate change.",
    // },
  ];

  return (
    <div
      ref={ref}
      className="p-0 w-full min-h-screen flex flex-col justify-center items-center relative"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "contain", // Change from cover to contain
        backgroundPosition: "center", // Center the image
        overflow: "hidden",
        marginTop: "-2px",
      }}
    >
      <div>
        <p className="mx-auto text-center text-white text-4xl mt-40">
          Surface Ocean Data by PACE
        </p>
        <div className="flex justify-between p-2">
          <div className="flex flex-col p-2">
            <div>
              <p className="mx-auto text-center bg-[#545DB9]">
                {keyPoints[0].title}
              </p>
              <p>{keyPoints[0].content}</p>
            </div>
            <div>
              <p className="mx-auto text-center bg-[#545DB9]">
                {keyPoints[1].title}
              </p>
              <p>{keyPoints[1].content}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <p className="mx-auto text-center bg-[#545DB9]">
                {keyPoints[3].title}
              </p>
              <p>{keyPoints[3].content}</p>
            </div>
            <div>
              <p className="mx-auto text-center bg-[#545DB9]">
                {keyPoints[2].title}
              </p>
              <p>{keyPoints[2].content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
