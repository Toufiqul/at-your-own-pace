import React, { useState } from "react";
import slidesData from "./comic1.json";
import { Carousel } from "./Carousel.jsx";

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
        <p></p>
      </div>
    </div>
  );
};
const LearningRes = () => {
  const { slides } = slidesData;
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentGif, setCurrentGif] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [showComic1, setShowComic1] = useState(false);

  const handleImageClick = () => {
    setShowVideo(true);
  };

  const gifs = ["Chloro_Gulf.gif", "PAR_Gulf.gif", "cloud_mask_Gulf.gif"];
  const title = [
    "Chlorophyll-a Concentration: The Ocean’s Green Indicator \n ",
    "Photosynthetically Active Radiation (PAR): Illuminating the Energy That Drives Life on Earth \n ",
    "Cloud Mask: Tracking the Sky’s Influence on Data \n ",
  ];
  const description = [
    "In this map, we see how chlorophyll-a levels fluctuate across the Gulf of Mexico and the western Atlantic Ocean. Chlorophyll-a, the pigment responsible for photosynthesis, present in phytoplanktons, gives the ocean its ‘color’. The ocean color reveals the levels of Chlorophyll-a present in the water which is detected by the PACE satellite. The bright red regions represent high concentrations of chlorophyll-a, while green and blue indicate subsequently lower levels of chlorophyll-a. By tracking these changes over time, we can understand the primary productivity by phytoplankton in the ocean’s food chain.",
    "In this vibrant map, we see the distribution of Photosynthetically Active Radiation (PAR), which indicates how much sunlight energy is available at the ocean’s surface for fueling the growth of phytoplankton. Darker purples represent lower PAR values, while bright yellows show regions bathed in a lot of sunlight. PAR is critical for phytoplankton, the base of the marine food web, to produce energy through photosynthesis. ",
    "Clouds, though vital for Earth’s weather, can obscure satellite data and obstruct sunlight reaching the Earth’s surface. This map highlights the changing density of clouds over the Gulf of Mexico. By analyzing cloud coverage over time, we can understand how satellite missions like PACE navigate and account for these obstacles, and ensure accurate observations of ocean color.",
  ];
  const handleGifClick = (gifSrc) => {
    setCurrentGif(gifSrc);
    setModalOpen(true);
  };
  const handleComicClick = () => {
    setShowComic1(!showComic1);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div
      className="p-5 space-y-5 bg-cover bg-center min-h-screen"
      style={{ backgroundImage: 'url("/bg_1.jpg")' }}
    >
      <h2 className="text-center text-2xl font-bold mb-4 text-white">Videos</h2>
      {/* src="https://www.youtube.com/watch?v=ovHBWp1SzqU" */}

      {/* Row 1 */}
      <div className="flex justify-center space-x-5">
        <div className="border border-gray-300 p-4 w-72 text-center">
          <img
            src="OC_Tells_a_Lot.png"
            alt="Placeholder Image 2"
            className="w-full h-auto rounded cursor-pointer"
            onClick={handleImageClick} // Add click handler
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
      {showVideo && (
        <div className="aspect-video w-1/2 mx-auto mt-6">
          <iframe
            className="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/qpxI32waa_w?si=2TzjHgKzRDOgi528"
            width="100%"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}

      {/* Row 2 */}
      <h2 className="text-center text-2xl font-bold mb-4 text-white">Comics</h2>

      <div className="flex justify-center space-x-5">
        <div className="border border-gray-300 p-4 w-72 text-center">
          <img
            src="Jamie1.png"
            alt="Placeholder Image 3"
            className="w-full h-auto rounded"
            onClick={handleComicClick}
          />
          <p className="font-semi-bold text-white">
            Jamie and the Mystery of the Blooming Sea
          </p>
        </div>
        <div className="border border-gray-300 p-4 w-72 text-center">
          <img
            src="Jamie2.png"
            alt="Placeholder Image 3"
            className="w-full h-auto rounded opacity-50"
          />
          <p className="font-semi-bold text-white">
            Jamie and the Secret of the Polluted Skies
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
      {showComic1 && (
        <div className="flex item-center justify-center mt-6 mb-6">
          <Carousel data={slides} />
        </div>
      )}
      <h2 className="text-center text-2xl font-bold mb-4 text-white pt-4">
        Story Map
      </h2>
      <div className="border border-gray-300">
        {/* Row 3 */}
        <div className="flex justify-center space-x-5">
          {gifs.map((gif, index) => (
            <div key={index} className=" p-4 w-1/3 text-center">
              <img
                src={gif}
                alt={`GIF ${index + 1}`}
                className="w-full h-auto rounded cursor-pointer"
                onClick={() => handleGifClick(gif)}
              />
              <p className="font-bold text-white justify-center pt-1">
                {title[index]}
              </p>
              <p className="font-semi-bold text-white justify-center pt-2">
                {description[index]}
              </p>
            </div>
          ))}

          {/* Modal for displaying the GIF */}
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            gifSrc={currentGif}
          />
        </div>
        <p className="text-white text-xl px-4 py-2">
          By analyzing all the three maps, we can connect the dots between
          sunlight, ocean productivity, and the impact of changing light
          conditions due to seasons and cloud cover on marine life. <br />
          More cloud coverage reduces the amount of Photosynthetically Active
          Radiation (PAR) reaching the ocean’s surface, which in turn limits the
          sunlight available for chlorophyll-a production. This means less light
          for photosynthesis, leading to reduced phytoplankton growth, the base
          component of marine food web. By studying these relationships, we can
          see how atmospheric conditions directly influence ocean productivity
          and the global carbon cycle.
        </p>
      </div>
    </div>
  );
};
export default LearningRes;

// src="cloud_mask_Gulf.gif"
// 1R6licKi_4aBEp1Xqxgdhcm5n5FhSvEBI
