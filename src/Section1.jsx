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
  const backgroundImageUrl = "./bg_1.gif";

  return (
    <div
      ref={ref}
      className="p-0 w-full min-h-screen flex flex-col items-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "100% 100%", // Change from cover to contain
        backgroundPosition: "center", // Center the image
        overflow: "hidden",
        marginTop: "-2px",
      }}
    >
      <div className="relative text-white bg-opacity-40 rounded-lg w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col inline-flex items-center border-b-2 border-white">
          {/* <div className="flex flex-col items-center border-b-2 border-white">{" "} */}
          <p className="text-l pt-10">Team ORCA presents</p>
          <div className="flex flex-row">
            <p className="text-4xl pt-4">At Your Own</p>
            <img
              src="PACE_logo.png"
              className=" mx-2"
              style={{ width: "70px", height: "70px" }}
              alt="page logo"
            />
            <p className="text-4xl pt-4"> !!</p>
          </div>
        </div>
        {/* Top Row - Text on the Left and Satellite Image on the Right */}
        <div className="flex items-start justify-between w-full">
          {/* Left Column - First h2 and paragraph */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideFromLeft}
            transition={{ duration: 0.8 }}
            className="w-1/3 max-w-lg text-left px-4"
          >
            <h2 className="text-xl md:text-lg lg:text-2xl py-10 px-2 align-middle">
              {" "}
              PACE satellite launched on a SpaceX Falcon 9 rocket at 1:33 A.M.,
              Feb 8th, 2024.
            </h2>
          </motion.div>

          {/* Satellite Image */}
          <div className="flex-grow flex justify-center items-center max-w-full min-w-0 w-full">
            {" "}
            {/* Increased max-width */}
            <img
              src="PACE_satellite.png" // Replace with your image path or URL
              alt="PACE Satellite"
              className="w-full h-auto max-w-4lg"
              //   style={{ width: "650px", height: "400px" }}
            />
          </div>
        </div>

        {/* Second Row - Text taking up left and right sides */}
        <div className="flex justify-between w-full mt-4">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideFromLeft}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-1/2 text-left px-4"
          >
            <p className="text-2xl">
              PACE has three sensors: OCI, SPEXone, and HARP2.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideFromRight}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-1/2 text-right px-4"
          >
            <p className="text-2xl">
              Hyperspectral vision with the ability to view broad spectrum from
              350 to 885 nanometer wavelengths.
            </p>
          </motion.div>
        </div>

        {/* Third Row - Buttons for different sections */}
        <div>
          <div className="flex justify-center w-full mt-6">
            <motion.div
              initial="hidden"
              animate="visible"
              className="text-center px-4"
            >
              <p className="text-2xl p-5 pt-7">
                Scroll Down And Get Introduced To PACE!!
              </p>
              <h2 className="text-xl mb-4 pt-10">
                The main body of PACE has three sections-
              </h2>

              {/* Buttons Row */}
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  className={`py-2 px-6  rounded transition duration-300 ${
                    selectedSection === "RADIATOR"
                      ? "bg-blue-700 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-700"
                  }`}
                  onClick={() => handleButtonClick("RADIATOR")}
                >
                  Radiator Shield
                </button>
                <button
                  className={`py-2 px-6  rounded transition duration-300 ${
                    selectedSection === "BUS"
                      ? "bg-blue-700 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-700"
                  }`}
                  onClick={() => handleButtonClick("BUS")}
                >
                  BUS
                </button>
                <button
                  className={`py-2 px-6  rounded transition duration-300 ${
                    selectedSection === "SOLAR"
                      ? "bg-blue-700 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-700"
                  }`}
                  onClick={() => handleButtonClick("SOLAR")}
                >
                  SOLAR array
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Conditionally Render Images and Descriptions */}
      <div className=" flex justify-center items-start">
        {" "}
        {/* Use justify-center to center children */}
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
              className="w-full h-1/3 mb-4"
            />
            <p className="text-white">
              The Radiator Shield protects the satellite from extreme heat.
            </p>
          </motion.div>
        )}
        {selectedSection === "BUS" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-left w-1/3 flex flex-col"
          >
            <img src="pace_bus.png" alt="BUS" className="w-full h-1/3 mb-4" />
            <p className="text-white">
              The BUS provides the core structural body for the PACE satellite.
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
              className="w-full h-1/3 mb-4"
            />
            <p className="text-white">
              The SOLAR array provides energy for the satellite through solar
              power.
            </p>
          </motion.div>
        )}
        {/* Radiator Shield Section */}
      </div>
    </div>
  );
};

export default Section1;
