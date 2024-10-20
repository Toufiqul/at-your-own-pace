import { motion } from "framer-motion";
import { useState } from "react";

import { useInView } from "react-intersection-observer";

const Section2 = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const handleButtonClick = (section) => {
    setSelectedSection((prevSection) =>
      JSON.stringify(prevSection) === JSON.stringify(section) ? null : section
    );
  };

  const clouds = {
    cloudHeight: {
      src: "https://drive.google.com/thumbnail?id=1Qfoi8J6fQnGl75q_QACn_EGNLtsotNPf&sz=w1000",
      alt: "cloud Height",
      text: "Cloud Height",
    },
    cod: {
      src: "https://drive.google.com/thumbnail?id=1-DI5ijy8LDGXLsAWLBl8svyDNZ2nDvku&sz=w1000",
      alt: "cod",
      text: "Cloud Optical Depth",
    },
    dropletSize: {
      src: "https://drive.google.com/thumbnail?id=1VeW51ji1GFm7DJFkjN5Os9s5kAo7yVdv&sz=w1000",
      alt: "droplet size",
      text: "Droplet Size Distribution",
    },
    iceCrystal: {
      src: "https://drive.google.com/thumbnail?id=1GcONqkZvasqGbXFweEYYqYYTOrwKqqqd&sz=w1000",
      alt: "ice Crystal",
      text: "Ice Crystal Shapes",
    },
    cloudThickness: {
      src: "https://drive.google.com/thumbnail?id=19qhxZJiEyV4c7FHEIqL7tCzPaoE_u-3K&sz=w1000",
      alt: "cloud Height",
      text: "Cloud Thickness",
    },
  };

  const [showLines, setShowLines] = useState({
    vertical: false,
    horizontal: false,
  });
  const toggleLine = (line) => {
    setShowLines((prev) => ({
      ...prev,
      [line]: !prev[line],
    }));
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const backgroundImageUrl = "./bg_2.gif";

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideFromTop = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

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
      {/* <div className="relative w-full h-full"> */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideFromLeft}
        transition={{ duration: 0.8 }}
        className="absolute left-10 w-1/6"
        style={{ top: "20%" }}
      >
        {showLines.vertical && (
          <div className="absolute left-1/3 transform -translate-x-1/2 w-1 h-full bg-red-500" />
        )}
        <img src="cloud_small.png" alt="Cloud 1" className="w-full h-auto" />
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideFromTop}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute left-1/2 transform -translate-x-1/2 w-1/6"
        style={{ top: "10%" }}
      >
        {showLines.vertical && (
          <div className="absolute left-1/3 transform -translate-x-1/2 w-1 h-full bg-red-500" />
        )}
        <img src="cloud_small.png" alt="Cloud 2" className="w-full h-auto" />
      </motion.div>
      {selectedSection && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-right flex flex-col mt-40"
        >
          <img
            src={selectedSection.src}
            alt={selectedSection.alt}
            className="mt-50 flex justify-center items-center"
            style={{ width: "400px", height: "400px" }}
          />
          <p className="text-white mx-auto text-center">
            {selectedSection.text}
          </p>
        </motion.div>
      )}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideFromRight}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute right-10 w-1/6"
        style={{ top: "60%" }}
      >
        {showLines.vertical && (
          <div className="absolute left-1/3 transform -translate-x-1/2 w-1 h-full bg-red-500" />
        )}
        <img src="cloud_small.png" alt="Cloud 3" className="w-full h-auto" />
      </motion.div>
      <div className="flex justify-between space-x-4 mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded bg-[#545DB9]"
          onClick={() => {
            handleButtonClick(clouds.cod);
          }}
        >
          Cloud Optical Depth
        </button>
        {/* TODO make motion.button  */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded bg-[#545DB9]"
          onClick={() => {
            handleButtonClick(clouds.cloudHeight);
          }}
        >
          Cloud Height
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded bg-[#545DB9]"
          //   onClick={() => toggleLine("vertical")}
          onClick={() => {
            handleButtonClick(clouds.cloudThickness);
          }}
        >
          Cloud Thickness
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded bg-[#545DB9]"
          onClick={() => {
            handleButtonClick(clouds.dropletSize);
          }}
        >
          Droplet size distribution
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded bg-[#545DB9]"
          onClick={() => {
            handleButtonClick(clouds.iceCrystal);
          }}
        >
          Ice crystal shapes
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Section2;
