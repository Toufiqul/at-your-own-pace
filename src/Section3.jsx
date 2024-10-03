import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import KidsPopUp from "./KidsPopUp";
import { useState } from "react";
import "./Section3.css";
const Section3 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const backgroundImageUrl = "./bg_3.gif";
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const [selectedKeyPoint, setSelectedKeyPoint] = useState(null);

  const keyPoints = [
    {
      id: 1,
      title: "Aerosol Absorption",
      content:
        "Aerosol absorption refers to the process where aerosols (tiny particles in the atmosphere) absorb sunlight, converting it into heat. This affects Earth's radiation balance and can influence climate and weather patterns.",
    },
    {
      id: 2,
      title: "Aerosol Optical Depth",
      content:
        "Aerosol Optical Depth (AOD) measures the extent to which aerosols in the atmosphere prevent sunlight from reaching the Earth's surface by scattering and absorbing it. Higher AOD values indicate more aerosols and greater light reduction.",
    },
    {
      id: 3,
      title: "Aerosol Size Distributions",
      content:
        "Aerosol size distribution describes the range and proportion of aerosol particles of different sizes in the atmosphere, impacting their behavior, lifetime, and effects on air quality and climate",
    },
    {
      id: 4,
      title: "Aerosol Heights and Layer",
      content:
        "Aerosol height refers to the altitude at which aerosol particles are concentrated in the atmosphere, while aerosol layers describe distinct vertical regions where these particles are found. Aerosol height and layers affect how aerosols interact with sunlight, clouds, and weather patterns, influencing climate and air quality.",
    },
    {
      id: 5,
      title: "Concentration of Brown/Black Carbon",
      content:
        "The concentration of brown or black carbon refers to the density of these carbonaceous aerosols in the atmosphere, typically measured in micrograms per cubic meter (µg/m³). These particles absorb sunlight and contribute to atmospheric warming and climate change.",
    },
  ];

  const handleClick = (keyPoint) => {
    setSelectedKeyPoint(keyPoint);
  };

  // Handler to close the pop-up
  const handleClose = () => {
    setSelectedKeyPoint(null);
  };
  return (
    <div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="relative h-screen w-screen flex items-center justify-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "contain", // Change from cover to contain
        backgroundPosition: "center", // Center the image
        marginTop: "-2px",
        overflow: "hidden",
      }}
    >
      <div className="relative text-center text-white bg-opacity-40 p-6 rounded-lg">
        <h1>Section3</h1>
        {/* <button
          onClick={togglePopup}
        >show popup</button> */}
        <div className="keypoints-container">
          {keyPoints.map((keyPoint) => (
            <motion.div
              key={keyPoint.id}
              className="keypoint"
              onClick={() => handleClick(keyPoint)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {keyPoint.title}
            </motion.div>
          ))}
          {selectedKeyPoint && (
            <KidsPopUp
              show={true}
              onClose={handleClose}
              content={selectedKeyPoint.content}
              keyPointTitle={selectedKeyPoint.title}
            />
          )}
        </div>
        {/* <KidsPopUp
        show={showPopup}
        onClose={togglePopup}
        content="Learning is fun! Keep exploring new things every day!"
      /> */}
      </div>
      <div className="fixed bottom-0 left-0 w-full text-center bg-opacity-50 p-4">
        <p className="text-white">Hello</p>
      </div>
    </div>
  );
};

export default Section3;
