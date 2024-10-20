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
      content: "The sunlight reflected off the ocean's surface",
    },
    {
      id: 2,
      title: "Whitecap Fraction",
      content:
        "The percentage of the ocean surface covered by white foam from breaking waves",
    },
    {
      id: 3,
      title: "Angular Light Distributions",
      content:
        "How light is scattered in different directions by particles in the atmosphere or ocean",
    },
    {
      id: 4,
      title: "Oil slick detection",
      content:
        "Identifying oil spills on water surfaces using methods like satellite imagery",
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
        backgroundSize: "100% 100%", // Change from cover to contain
        backgroundPosition: "center", // Center the image
        overflow: "hidden",
        marginTop: "-2px",
      }}
    >
      <p className="mx-auto text-center font-bold text-white text-4xl my-8">
        Surface Ocean Data by PACE
      </p>
      <div className="flex justify-between p-2">
        <div className="flex flex-col p-4">
          <div>
            <p className="mx-auto text-center bg-[#545DB9] w-1/2 p-2 m-2 text-3xl">
              {keyPoints[0].title}
            </p>
            <p className="text-3xl px-2 w-3/4 mx-auto text-center">
              {keyPoints[0].content}
            </p>
          </div>
          <div>
            <p className="mx-auto text-center bg-[#545DB9] w-1/2 p-2 m-2 text-3xl">
              {keyPoints[1].title}
            </p>
            <p className="text-3xl px-2 w-3/4 mx-auto text-center">
              {keyPoints[1].content}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <p className="mx-auto text-center bg-[#545DB9] w-1/2 p-2 m-2 text-3xl">
              {keyPoints[3].title}
            </p>
            <p className="text-3xl px-2 w-3/4 mx-auto text-center">
              {keyPoints[3].content}
            </p>
          </div>
          <div>
            <p className="mx-auto text-center bg-[#545DB9] w-1/2 p-2 m-2 text-3xl">
              {keyPoints[2].title}
            </p>
            <p className="text-3xl px-2 w-3/4 mx-auto text-center">
              {keyPoints[2].content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
