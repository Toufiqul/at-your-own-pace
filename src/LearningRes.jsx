import React, { useState } from "react";

const Modal = ({ isOpen, onClose, gifSrc }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white p-4 rounded"
        style={{
          maxWidth: "50%",
          maxHeight: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={onClose} className="absolute top-2 right-2">
          Close
        </button>
        <img
          src={gifSrc}
          alt="GIF"
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
};
const LearningRes = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentGif, setCurrentGif] = useState("");

  const gifs = ["cloud_mask_Gulf.gif", "Chloro_Gulf.gif", "PAR_Gulf.gif"];

  const handleGifClick = (gifSrc) => {
    setCurrentGif(gifSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="p-5 space-y-5 bg-black">
      <h2 className="text-center text-2xl font-bold mb-4 text-white">Videos</h2>
      {/* src="https://www.youtube.com/watch?v=ovHBWp1SzqU" */}

      {/* Row 1 */}
      <div className="flex justify-center space-x-5">
        <div className="border border-gray-300 p-4 w-72 text-center">
          <img
            src="OC_Tells_a_Lot.png"
            alt="Placeholder Image 2"
            className="w-full h-auto rounded"
          />
          <p className="font-semi-bold text-white">
            The Ocean Color tells us a LOT!!!
          </p>
        </div>
        <div className="border border-gray-300 p-4 w-72 text-center">
          <img
            src="Phytoplankton.png"
            alt="Placeholder Image 2"
            className="w-full h-auto rounded opacity-50"
          />
          <p className="font-semi-bold text-white">
            Phytoplanktons and Harmful blooms
          </p>
        </div>
        <div className="border border-gray-300 p-4 w-72 text-center">
          <img
            src="Climate.png"
            alt="Placeholder Image 2"
            className="w-full h-auto rounded opacity-50"
          />
          <p className="font-semi-bold text-white">
            How Does PACE Help Us Study Climate Change?
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <h2 className="text-center text-2xl font-bold mb-4 text-white">Comics</h2>

      <div className="flex justify-center space-x-5">
        <div className="border border-gray-300 p-4 w-72 text-center">
          <img
            src="Jamie1.png"
            alt="Placeholder Image 3"
            className="w-full h-auto rounded"
          />
          <p className="font-semi-bold text-white">
            Jamie and the Secret of the Polluted Skies - Volume 1
          </p>
        </div>
        <div className="border border-gray-300 p-4 w-72 text-center">
          <img
            src="Jamie2.png"
            alt="Placeholder Image 3"
            className="w-full h-auto rounded opacity-50"
          />
          <p className="font-semi-bold text-white">
            Jamie and the Secret of the Polluted Skies - Volume 2
          </p>
        </div>
        <div className="border border-gray-300 p-4 w-72 text-center">
          <img
            src="comic_cover_2.png"
            alt="Placeholder Image 3"
            className="w-full h-auto rounded opacity-50"
          />
          <p className="font-semi-bold text-white">
            The Guardians of the Abyssal
          </p>
        </div>
        <div className="border border-gray-300 p-4 w-72 text-center">
          <img
            src="comic_cover_3.png"
            alt="Placeholder Image 4"
            className="w-full h-auto rounded opacity-50"
          />
          <p className="font-semi-bold text-white">Captain Photon</p>
        </div>
      </div>
      <h2 className="text-center text-2xl font-bold mb-4 text-white">
        Story Maps
      </h2>
      {/* Row 3 */}
      <div className="flex justify-center space-x-5">
        {gifs.map((gif, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 w-72 text-center"
          >
            <img
              src={gif}
              alt={`GIF ${index + 1}`}
              className="w-full h-auto rounded cursor-pointer"
              onClick={() => handleGifClick(gif)}
            />
          </div>
        ))}

        {/* Modal for displaying the GIF */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          gifSrc={currentGif}
        />
      </div>
    </div>
  );
};
export default LearningRes;

// src="cloud_mask_Gulf.gif"
