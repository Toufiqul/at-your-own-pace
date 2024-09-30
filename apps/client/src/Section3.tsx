import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section3 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const backgroundImageUrl = "./bg_3.gif";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="relative h-screen w-screen flex items-center justify-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="relative text-center text-white bg-opacity-40 p-6 rounded-lg">
        <h1>Section3</h1>
      </div>
    </motion.div>
  );
};

export default Section3;
