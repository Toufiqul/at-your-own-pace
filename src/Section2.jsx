import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const backgroundImageUrl = "./bg_2.gif";

  // Animations for clouds
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
      className="relative h-screen w-screen flex items-center justify-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="relative w-full h-full">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideFromLeft}
          transition={{ duration: 0.8 }}
          className="absolute left-0 w-1/4"
          style={{ top: "20%" }}
        >
          <img src="cloud_small.png" alt="Cloud 1" className="w-full h-auto" />
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideFromTop}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1/4"
          style={{ top: "10%" }}
        >
          <img src="cloud_small.png" alt="Cloud 2" className="w-full h-auto" />
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideFromRight}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute right-0 w-1/4"
          style={{ top: "60%" }}
        >
          <img src="cloud_small.png" alt="Cloud 3" className="w-full h-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;
