import React from 'react';

/**
 * UiverseLoader component based on Uiverse.io design by KSAplay.
 * Displays animated dot text with glowing capsule progress bar and white angled slashes.
 */
export const UiverseLoader = ({ text = 'Loading', className = '' }) => {
  return (
    <div className={`loader uiverse-loader ${className}`}>
      <div className="loading-text">
        <span>{text}</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </div>
      <div className="loading-bar-background">
        <div className="loading-bar">
          <div className="white-bars-container">
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
