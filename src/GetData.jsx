import React, { useState } from "react";
import DatePicker from "react-datepicker"; // Make sure to import the DatePicker component
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for DatePicker

const GetData = () => {
  const [parameter, setParameter] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleGetData = () => {
    // Your logic to handle data retrieval
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative "
      style={{
        backgroundImage: "url(getData_bg.png)", // Add your space image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="bg-black bg-opacity-0 p-5 rounded w-1/2">
        {" "}
        {/* Background overlay for better text visibility */}
        <h2 className="text-2xl text-white mb-6">Access PACE Data</h2>
        {/* Dropdown */}
        <div className="mb-4">
          <label htmlFor="select-text" className="block mb-2 text-white">
            Select Text:
          </label>
          <select
            id="select-text"
            className="border border-white text-white bg-gray-800 p-2 rounded w-full"
            value={parameter}
            onChange={(e) => setParameter(e.target.value)}
          >
            <option value="">-- Select the parameter you want --</option>
            <option value="PAR">
              Daily photosynthetically available radiation (PAR)
            </option>
            <option value="Chl-a">Concentration of chlorophyll-a</option>
            <option value="phy-pig">
              Phytoplankton pigment concentrations
            </option>
            <option value="spec-phy">
              Spectral phytoplankton absorption coefficients
            </option>
            <option value="IOP">IOP</option>
          </select>
        </div>
        {/* Start Date */}
        <div className="mb-4">
          <label htmlFor="start-date" className="block mb-2 text-white">
            Start Date:
          </label>
          <DatePicker
            id="start-date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border border-white text-white bg-gray-800 p-2 rounded w-full"
            placeholderText="Pick a start date"
            dateFormat="yyyy/MM/dd"
          />
        </div>
        {/* End Date */}
        <div className="mb-4">
          <label htmlFor="end-date" className="block mb-2 text-white">
            End Date:
          </label>
          <DatePicker
            id="end-date"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="border border-white text-white bg-gray-800 p-2 rounded w-full"
            placeholderText="Pick an end date"
            dateFormat="yyyy/MM/dd"
          />
        </div>
        {/* Button */}
        <button
          onClick={handleGetData}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Get Data
        </button>
      </div>
    </div>
  );
};

export default GetData;
