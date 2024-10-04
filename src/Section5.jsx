import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section5 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const backgroundImageUrl = "./bg_5.gif";

  return (
    <div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="relative h-screen w-screen flex items-center justify-center bg-no-repeat"
      style={{
        // backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "contain", // Change from cover to contain
        backgroundPosition: "center", // Center the image
        overflow: "hidden",
        marginTop: "-2px",
      }}
    >
      <div className="relative text-center text-white bg-opacity-40 p-6 rounded-lg">
        <h1>Section5</h1>
      </div>
    </div>
  );
};

export default Section5;
