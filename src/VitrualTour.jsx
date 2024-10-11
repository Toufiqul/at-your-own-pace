import React from "react";
import { useState, useEffect } from "react";

function VitrualTour() {
  const targetDate = new Date("October 25, 2024 23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      setTimeLeft(distance);

      // If the countdown is over, clear the interval
      if (distance <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  // Format the remaining time into days, hours, minutes, and seconds
  const formatTimeLeft = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };
  return (
    <div
      className="px-5 space-y-5 bg-cover bg-center min-h-screen content-center"
      style={{ backgroundImage: 'url("/bg_1.jpg")' }}
    >
      <p className="text-white text-4xl px-10">
        Ready to explore one of Earth's five oceans? Experience real-time
        atmospheric and ocean conditions with data from NASA's PACE satellite.
        Our Virtual Field Trip is coming soon! Stay tuned!
      </p>
      {timeLeft > 0 ? (
        <h1 className="text-2xl mx-auto text-center">
          Tour Starts In: {formatTimeLeft(timeLeft)}
        </h1>
      ) : (
        <h1>Happy New Year!</h1>
      )}
    </div>
  );
}

export default VitrualTour;
