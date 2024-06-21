import React from "react";

const ProgressBar = ({ bgColor, progress }) => {
  const containerStyles = {
    height: 6,
    width: "100%",
    backgroundColor: "#303030",
    borderRadius: 50
  };

  const fillerStyles = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgColor,
    borderRadius: "inherit",
    textAlign: "right"
  };


  return (
    <div className="progress-bar" style={containerStyles}>
      <div style={fillerStyles}>
        <span className="main-bar">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
