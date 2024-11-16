import React from "react";
import { useState, useEffect } from "react";

function VitrualTour() {
  return (
    <div className="w-screen min-h-screen bg-sky-700 flex justify-center items-center">
      <img
        src="/virtualFieldTrip.jpg"
        alt="Virtual Field Trip"
        className="w-auto h-auto max-h-screen"
      />
    </div>
  );
}

export default VitrualTour;
