import { motion } from "framer-motion";
import { useState } from "react";

import { useInView } from "react-intersection-observer";

const Section2 = () => {
  const [showLines, setShowLines] = useState({
    vertical: false,
    horizontal: false,
  });
  const [showButtons, setShowButtons] = useState(false);

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
  const toggleButtons = () => {
    setShowButtons((prev) => !prev);
  };

  return (
    <div
      className="relative h-screen w-screen flex items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        marginTop: "-3px",
      }}
    >
      <div className="relative w-full h-full">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideFromLeft}
          transition={{ duration: 0.8 }}
          className="absolute left-10 w-1/6"
          style={{ top: "20%" }}
        >
          n
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
          onClick={toggleButtons} // Toggle buttons on click
        >
          {showLines.vertical && (
            <div className="absolute left-1/3 transform -translate-x-1/2 w-1 h-full bg-red-500" />
          )}
          <img src="cloud_small.png" alt="Cloud 2" className="w-full h-auto" />
        </motion.div>

        {/* Buttons on the left side */}
        {showButtons && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute left-[30%] top-[15%] flex flex-col space-y-4"
            >
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Cloud Optical Depth
              </button>
              {/* TODO make motion.button  */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Cloud Height
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => toggleLine("vertical")}
              >
                Cloud Thickness
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute left-[70%] top-[15%] flex flex-col space-y-4"
            >
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Cloud Phases
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Droplet size distribution
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Ice crystal shapes
              </button>
            </motion.div>
          </>
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
      </div>
    </div>
  );
};

export default Section2;
