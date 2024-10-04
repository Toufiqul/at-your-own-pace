import { motion } from "framer-motion";
import React, { useState } from "react";

import { useInView } from "react-intersection-observer";

const Section1 = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleButtonClick = (section) => {
    setSelectedSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      ref={ref}
      className="p-0 w-full min-h-screen flex flex-col justify-center items-center"
    >
      <div className="relative text-white bg-opacity-40 rounded-lg w-full max-w-screen-xl mx-auto">
        {/* Top Row - Left Column and Satellite Image */}
        <div className="flex items-start justify-start w-full">
          {/* Left Column - First h2 */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideFromLeft}
            transition={{ duration: 0.8 }}
            className="w-1/4 text-left px-4"
          >
            <h2 className="text-xl mb-4">
              PACE satellite launched on a SpaceX Falcon 9 rocket at 1:33 A.M.,
              Feb 8th, 2024.
            </h2>
          </motion.div>

          {/* Satellite Image */}
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="PACE_satellite.png" // Replace with your image path or URL
              alt="PACE Satellite"
              className="w-full h-auto max-w-lg"
            />
          </div>
        </div>

        {/* Second Row - First <p> aligned to the right */}
        <div className="flex justify-end w-full mt-4">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideFromRight}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-1/4 text-right px-4"
          >
            <p>
              Hyperspectral vision with the ability to view broad spectrum from
              350 to 885 nanometer wavelengths.
            </p>
          </motion.div>
        </div>

        {/* Third Row - Centered second <h2> */}
        <div className="flex justify-center w-full mt-6">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideFromRight}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center px-4"
          >
            <h2 className="text-xl mb-4">
              PACE has three sensors: OCI, SPEXone, and HARP2
            </h2>
          </motion.div>
        </div>
        <div className="flex justify-center w-full mt-6">
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-center px-4"
          >
            <h2 className="text-xl mb-4">
              The main body of PACE has three sections-
            </h2>

            {/* Buttons Row */}
            <div className="flex justify-center space-x-4 mt-4">
              <button
                className={`py-2 px-6 rounded transition duration-300 ${
                  selectedSection === "BUS"
                    ? "bg-blue-700 text-white"
                    : "bg-blue-500 text-white hover:bg-blue-700"
                }`}
                onClick={() => handleButtonClick("BUS")}
              >
                BUS
              </button>

              <button
                className={`py-2 px-6 rounded transition duration-300 ${
                  selectedSection === "SOLAR"
                    ? "bg-blue-700 text-white"
                    : "bg-blue-500 text-white hover:bg-blue-700"
                }`}
                onClick={() => handleButtonClick("SOLAR")}
              >
                SOLAR array
              </button>

              <button
                className={`py-2 px-6 rounded transition duration-300 ${
                  selectedSection === "RADIATOR"
                    ? "bg-blue-700 text-white"
                    : "bg-blue-500 text-white hover:bg-blue-700"
                }`}
                onClick={() => handleButtonClick("RADIATOR")}
              >
                Radiator Shield
              </button>
            </div>
          </motion.div>
        </div>

        {/* Conditionally Render Images and Descriptions */}
        <div className="mt-8 flex justify-between items-start">
          {/* BUS Section */}
          {selectedSection === "BUS" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-left w-1/3 flex flex-col items-start"
            >
              <img
                src="pace_bus.png"
                alt="BUS"
                className="w-full h-auto mb-4"
              />
              <p>
                The BUS provides the core structural body for the PACE
                satellite.
              </p>
            </motion.div>
          )}

          {/* SOLAR Array Section */}
          {selectedSection === "SOLAR" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center w-1/3 flex flex-col items-center"
            >
              <img
                src="pace_solar.png"
                alt="SOLAR array"
                className="w-full h-auto mb-4"
              />
              <p>
                The SOLAR array provides energy for the satellite through solar
                power.
              </p>
            </motion.div>
          )}

          {/* Radiator Shield Section */}
          {selectedSection === "RADIATOR" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-right w-1/3 flex flex-col items-end"
            >
              <img
                src="radiator_block.png"
                alt="Radiator Shield"
                className="w-full h-auto mb-4"
              />
              <p>
                The Radiator Shield protects the satellite from extreme heat.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section1;
