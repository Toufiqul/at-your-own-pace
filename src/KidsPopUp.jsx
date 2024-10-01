import React from "react";
import { motion } from "framer-motion";
import "./KidsPopUp.css"; // Import the CSS file for styling

const KidsPopUp = ({ show, onClose, content }) => {
  // Framer Motion animation settings
  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const popupVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { delay: 0.3 } },
  };

  return show ? (
    <motion.div
      className="popup-backdrop"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="popup-content"
        variants={popupVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="popup-header">
          <h2>Hey Kiddo!</h2>
        </div>
        <div className="popup-body">
          <p>{content}</p>
        </div>
        <button className="popup-close-btn" onClick={onClose}>
          Got it!
        </button>
      </motion.div>
    </motion.div>
  ) : null;
};

export default KidsPopUp;
