import React, { useState } from "react";
import DatePicker from "react-datepicker"; // Make sure to import the DatePicker component
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for DatePicker
import axios from "axios"
import GranuleModal from './GranuleModule';
import { span } from "framer-motion/client";
const GetData = () => {
  const [parameter, setParameter] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [granules, setGranules] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [shortName, setShortName] = useState("")
  const [dataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleGetData = async () => {
    setDataLoading(true)
    setError(false)
    // Specify the file name you want to download
    // const fileName = "PACE_PAR.20240713T081853.L2.OC_BGC.V2_0.NRT.nc"; // Replace with your actual file name
    // const filePath = `${process.env.PUBLIC_URL}/${fileName}`; // Construct file path

    // // Create an anchor element and trigger a download
    // const link = document.createElement("a");
    // link.href = filePath;
    // link.download = fileName; // Set the filename for download
    // document.body.appendChild(link); // Append link to body
    // link.click(); // Trigger click event
    // document.body.removeChild(link); // Remove link after downloading
    // const ENDPOINT = `http://13.250.21.112:8000/?short_name=PACE_OCI_L2_BGC_NRT&start_date=2024-05-01&end_date=2024-05-16`
    const ENDPOINT2 = `https://13.250.21.112:8000/?short_name=${shortName}&start_date=${formatDate(startDate)}&end_date=${formatDate(endDate)}`
    // console.log("end", ENDPOINT2)
    try {
      const response = await axios.get(ENDPOINT2);
      console.log("res", response.data)
      setGranules(response.data.details);
      setShowModal(true)
      setDataLoading(false)
    } catch (error) {
      setDataLoading(false)
      setError(true)
      console.error('Error fetching the data', error);
    }
  };
  console.log("startDate", startDate)
  const options = {
    PACE_OCI_L2_AOP_NRT: "PACE OCI Level-2 Apparent Optical Properties Near Real-Time",
    PACE_OCI_L2_BGC_NRT: "PACE OCI Level-2 Biogeochemical Properties Near Real-Time",
    PACE_OCI_L2_IOP_NRT: "PACE OCI Level-2 Inherent Optical Properties Near Real-Time",
    PACE_OCI_L2_PAR_NRT: "PACE OCI Level-2 Photosynthetically Active Radiation Near Real-Time",
    PACE_OCI_L3B_CHL_NRT: "PACE OCI Level-3 Binned Chlorophyll Near Real-Time",
    PACE_OCI_L3B_IOP_NRT: "PACE OCI Level-3 Binned Inherent Optical Properties Near Real-Time",
    PACE_OCI_L3B_KD_NRT: "PACE OCI Level-3 Binned Diffuse Attenuation Coefficient Near Real-Time",
    PACE_OCI_L3B_PAR_NRT: "PACE OCI Level-3 Binned Photosynthetically Active Radiation Near Real-Time",
    PACE_OCI_L3B_POC_NRT: "PACE OCI Level-3 Binned Particulate Organic Carbon Near Real-Time",
    PACE_OCI_L3B_RRS_NRT: "PACE OCI Level-3 Binned Remote Sensing Reflectance Near Real-Time",
    PACE_OCI_L3M_CHL_NRT: "PACE OCI Level-3 Mapped Chlorophyll Near Real-Time",
    PACE_OCI_L3M_IOP_NRT: "PACE OCI Level-3 Mapped Inherent Optical Properties Near Real-Time",
    PACE_OCI_L3M_KD_NRT: "PACE OCI Level-3 Mapped Diffuse Attenuation Coefficient Near Real-Time",
    PACE_OCI_L3M_PAR_NRT: "PACE OCI Level-3 Mapped Photosynthetically Active Radiation Near Real-Time",
    PACE_OCI_L3M_POC_NRT: "PACE OCI Level-3 Mapped Particulate Organic Carbon Near Real-Time",
    PACE_OCI_L3M_RRS_NRT: "PACE OCI Level-3 Mapped Remote Sensing Reflectance Near Real-Time"
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url(getData_bg.png)", // Add your space image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="bg-black bg-opacity-0 p-5 rounded w-1/2">
        <h2 className="text-2xl text-white mb-6">Access PACE Data</h2>
        {/* Dropdown */}
        <div className="mb-4">
          <label htmlFor="select-text" className="block mb-2 text-white">
            Select Text:
          </label>
              <select
          id="select-text"
          className="border border-white text-white bg-gray-800 p-2 rounded w-full"
          value={shortName}
          onChange={(e) => setShortName(e.target.value)}
        >
          <option value="">-- Select the parameter you want --</option>
          {Object.entries(options).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
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
        {
          !dataLoading && 
        <button
          onClick={handleGetData}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Get Data
        </button>
        }
        {
          dataLoading && 
        <button
          onClick={()=> {}}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Loading
        </button>
        }

        {
          error && 
          <span>An Error Occurred. Try With Different Parameters</span>
        }

      </div>
      <GranuleModal showModal={showModal} granules={granules} onClose={handleCloseModal} />
    </div>
  );
};

export default GetData;
