import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section1 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const backgroundImageUrl = "./bg_1.gif";
  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="p-0">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="relative h-screen w-screen flex items-center justify-center bg-cover bg-no-repeat px-0"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="relative text-white bg-opacity-40 rounded-lg w-full max-w-screen-xl flex items-center justify-between px-0">
          {/* Left Column - Text sliding in from the left */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideFromLeft}
            transition={{ duration: 0.8 }}
            className="w-1/4 text-left px-2" // Reduced width and added padding
          >
            <h2 className="text-xl mb-4">
              r ACE satellite launched on a SpaceX Falcon 9 rocket at 1:33 A.M.,
              Feb 8th, 2024.
            </h2>
            <p>
              Hyperspectral vision with the ability to view broad spectrum from
              350 to 885 nanometer wavelengths.
            </p>
          </motion.div>

          {/* Middle Column - Satellite Image */}
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="PACE_satellite.png" // Replace with your image path or URL
              alt="PACE Satellite"
              className="w-2/ h-auto"
            />
          </div>

          {/* Right Column - Text sliding in from the right */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideFromRight}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-1/4 text-right px-2" // Reduced width and added padding
          >
            <h2 className="text-xl mb-4">
              PACE has three sensors: OCI, SPEXone, and HARP2
            </h2>
            <p>It will capture images of Earth from orbit.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Section1;
