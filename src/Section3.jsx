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
      content2:
        "The process where aerosols absorb and convert sunlight into heat",
    },
    {
      id: 2,
      title: "Aerosol Optical Depth",
      content:
        "Aerosol Optical Depth (AOD) measures the extent to which aerosols in the atmosphere prevent sunlight from reaching the Earth's surface by scattering and absorbing it. Higher AOD values indicate more aerosols and greater light reduction.",
      content2:
        "Aerosols ability to prevent sunlight from reaching the Earth's surface",
    },
    {
      id: 3,
      title: "Aerosol Size Distributions",
      content:
        "Aerosol size distribution describes the range and proportion of aerosol particles of different sizes in the atmosphere, impacting their behavior, lifetime, and effects on air quality and climate",
      content2:
        "Describes the range and proportion of aerosol particles of different sizes in the atmosphere",
    },
    {
      id: 4,
      title: "Aerosol Heights",
      content:
        "Aerosol height refers to the altitude at which aerosol particles are concentrated in the atmosphere, while aerosol layers describe distinct vertical regions where these particles are found. Aerosol height and layers affect how aerosols interact with sunlight, clouds, and weather patterns, influencing climate and air quality.",
      content2:
        "The altitude at which aerosol particles are concentrated in the atmosphere",
    },
    // {
    //   id: 5,
    //   title: "Concentration of Brown/Black Carbon",
    //   content:
    //     "The concentration of brown or black carbon refers to the density of these carbonaceous aerosols in the atmosphere, typically measured in micrograms per cubic meter (µg/m³). These particles absorb sunlight and contribute to atmospheric warming and climate change.",
    // },
  ];
  const imgLeft =
    "https://drive.google.com/thumbnail?id=1oMJUAT6zvmqCxzwiBzTOMCO28ZIqYQNW&sz=w1000";
  const imgMiddle =
    "https://drive.google.com/thumbnail?id=1kvDjAiYOjyeI5_MtgQ9M9Y76IhtebcPV&sz=w1000";
  const imgRight =
    "https://drive.google.com/thumbnail?id=1EcLFSkemzKzi45J83o5q3QXH-uJEQSDN&sz=w1000";

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
      <h2 className="mx-auto text-center font-bold text-white text-4xl mt-40 inline">
        Aerosols Data by PACE
      </h2>
      <div className="flex justify-between space-x-4 p-4">
        {/* Left Column - One Row */}
        <div className="w-1/3 p-4">
          <img
            src={imgLeft}
            alt="slkj"
            className=" flex justify-center items-center"
            style={{ width: "350px", height: "350px" }}
          />
        </div>

        {/* Middle Column - Two Rows */}
        <div className="w-1/3 flex flex-col space-y-4 p-4">
          <div className="p-4"></div>
          <div className="p-4">
            <img
              src={imgMiddle}
              alt="slkj"
              className=" flex justify-center items-center"
              style={{ width: "350px", height: "350px" }}
            />
          </div>
        </div>

        {/* Right Column - One Row */}
        <div className="w-1/3 p-4">
          <img
            src={imgRight}
            alt="slkj"
            className=" flex justify-center items-center"
            style={{ width: "350px", height: "350px" }}
          />
        </div>
      </div>
      <div className="flex justify-between p-2">
        <div className="flex flex-col w-1/2">
          <div>
            <p className="mx-auto text-center bg-[#545DB9] w-1/2 p-2 m-2 text-3xl">
              {keyPoints[0].title}
            </p>
            <p className="text-3xl px-2 mb-4 w-3/4 mx-auto text-center">
              {keyPoints[0].content2}
            </p>
          </div>
          <div>
            <p className="mx-auto text-center bg-[#545DB9] w-1/2 p-2 m-2 text-3xl">
              {keyPoints[1].title}
            </p>
            <p className="text-3xl px-2 mb-4 w-3/4 mx-auto text-center">
              {keyPoints[1].content2}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div>
            <p className="mx-auto text-center bg-[#545DB9] w-1/2 p-2 m-2 text-3xl">
              {keyPoints[3].title}
            </p>
            <p className="text-3xl px-2 mb-4 w-3/4 mx-auto text-center">
              {keyPoints[3].content2}
            </p>
          </div>
          <div>
            <p className="mx-auto text-center bg-[#545DB9] w-1/2 p-2 m-2 text-3xl">
              {keyPoints[2].title}
            </p>
            <p className="text-3xl px-2 mb-4 w-3/4 mx-auto text-center">
              {keyPoints[2].content2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

// 1oMJUAT6zvmqCxzwiBzTOMCO28ZIqYQNW

// https://drive.google.com/file/d/1oMJUAT6zvmqCxzwiBzTOMCO28ZIqYQNW/view?usp=sharing
