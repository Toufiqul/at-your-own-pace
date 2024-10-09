import React from 'react';
import './Granule.css'

const GranuleModal = ({ showModal, granules, onClose }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times; {/* Using &times; for a close icon */}
        </button>
        <div className="granule-container">
          {granules.map((granule, index) => {
            // Get the image and nc file URLs
            const imageUrl = granule.umm.RelatedUrls.find(url => url.Format === 'PNG')?.URL;
            const ncFileUrl = granule.umm.RelatedUrls.find(url => url.Description?.includes('Download'))?.URL;

            return (
              <div key={index} className="granule-item">
                {imageUrl && <img src={imageUrl} alt={`Granule ${index}`} style={{ width: '300px', height: 'auto' }} />}
                {ncFileUrl && (
                  <div>
                    <a href={ncFileUrl} download>
                      Download nc File
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GranuleModal;