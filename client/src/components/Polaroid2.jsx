import React, { useState } from "react";
import "./polariod2.css"; // Import the CSS file for styling
import { FormInput } from "lucide-react";

export default function Polaroid2({ photo }) {
  const [flipped, setFlipped] = useState(false); // State to track flip

  const [text, setText] = useState(""); // State to store the text input value

  const handleClick = () => {
    setFlipped((prev) => !prev); // Toggle the flip state
  };

  const handleTextChange = (e) => {
    setText(e.target.value); // Update the text state when input changes
  };
  return (
    <div
      className={`polaroid2 ${flipped ? "flipped" : ""}`}
      style={{ background: photo.backgroundGradient || "white" }} // Apply background gradient
      // Flip on click
    >
      <div className="polaroid2-inner">
        <div className="polaroid2-front">
          <div
            className="polaroid2-gradient-overlay"
            style={{
              background: photo.backgroundGradient || "rgba(0, 0, 0, 0)",
            }}
          ></div>

          <img
            src={photo.face_src}
            alt={photo.alt || "Polaroid"}
            className="polaroid2-image"
          />
        </div>
        <div className="polaroid2-back">
          <img
            src={photo.screen_src}
            alt={photo.alt || "Polaroid Back"}
            className="polaroid2-image"
          />
        </div>
      </div>
      <div>
        <input
          type="text"
          value={text} // Set the value of the input to the state
          onChange={handleTextChange} // Update state on input change
          placeholder="reflect here" // Placeholder text
          className="polaroid2-text-input" // Add custom CSS class for styling
        />
      </div>
    </div>
  );
}
