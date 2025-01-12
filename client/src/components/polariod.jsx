import React, { useState } from "react";
import "./polariod.css"; // Import the CSS file for styling

export default function Polaroid({ photo }) {
  const [flipped, setFlipped] = useState(false); // State to track flip

  const handleClick = () => {
    setFlipped((prev) => !prev); // Toggle the flip state
  };

  return (
    <div
      className={`polaroid ${flipped ? "flipped" : ""}`}
      style={{ background: photo.backgroundGradient || "white" }} // Apply background gradient
      onClick={handleClick} // Flip on click
    >
      <div className="polaroid-inner">
        <div className="polaroid-front">
          <img
            src={photo.face_src}
            alt={photo.alt || "Polaroid"}
            className="polaroid-image"
          />
        </div>
        <div className="polaroid-back">
          <img
            src={photo.screen_src}
            alt={photo.alt || "Polaroid Back"}
            className="polaroid-image"
          />
        </div>
      </div>
    </div>
  );
}
