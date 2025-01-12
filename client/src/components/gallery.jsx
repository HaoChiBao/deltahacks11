import React from "react";
import colors from "./colours";
import Polaroid from "./polariod";

export default function Gallery({ photos_array }) {
  // let photos_array = [
  //   [
  //     "happy",
  //     "January",
  //     "12",
  //     "2025",
  //     "03:28:55",
  //     "https://i.pinimg.com/474x/24/0d/e2/240de24ccaa2770dd4ba48ac4f0a8976.jpg",
  //     "https://i.pinimg.com/474x/3c/48/c5/3c48c58056f62a64f0ad0e2290dadab9.jpg",
  //   ],
  //   [
  //     "sad",
  //     "January",
  //     "12",
  //     "2025",
  //     "04:30:10",
  //     "https://i.pinimg.com/474x/b2/e6/ae/b2e6ae2e04794c69c5fa602699c563dd.jpg",
  //     "https://i.pinimg.com/736x/4f/ed/14/4fed14d4db0e4e3d8dde3bc0ecb6caf6.jpg",
  //   ],
  //   [
  //     "sad",
  //     "January",
  //     "12",
  //     "2025",
  //     "04:30:10",
  //     "https://i.pinimg.com/474x/b2/e6/ae/b2e6ae2e04794c69c5fa602699c563dd.jpg",
  //     "https://i.pinimg.com/736x/4f/ed/14/4fed14d4db0e4e3d8dde3bc0ecb6caf6.jpg",
  //   ],
  //   [
  //     "sad",
  //     "January",
  //     "12",
  //     "2025",
  //     "04:30:10",
  //     "https://i.pinimg.com/474x/b2/e6/ae/b2e6ae2e04794c69c5fa602699c563dd.jpg",
  //     "https://i.pinimg.com/736x/4f/ed/14/4fed14d4db0e4e3d8dde3bc0ecb6caf6.jpg",
  //   ],
  //   [
  //     "sad",
  //     "January",
  //     "12",
  //     "2025",
  //     "04:30:10",
  //     "https://i.pinimg.com/474x/b2/e6/ae/b2e6ae2e04794c69c5fa602699c563dd.jpg",
  //     "https://i.pinimg.com/736x/4f/ed/14/4fed14d4db0e4e3d8dde3bc0ecb6caf6.jpg",
  //   ],
  //   [
  //     "sad",
  //     "January",
  //     "12",
  //     "2025",
  //     "04:30:10",
  //     "https://i.pinimg.com/474x/b2/e6/ae/b2e6ae2e04794c69c5fa602699c563dd.jpg",
  //     "https://i.pinimg.com/736x/4f/ed/14/4fed14d4db0e4e3d8dde3bc0ecb6caf6.jpg",
  //   ],
  //   [
  //     "sad",
  //     "January",
  //     "12",
  //     "2025",
  //     "04:30:10",
  //     "https://i.pinimg.com/474x/b2/e6/ae/b2e6ae2e04794c69c5fa602699c563dd.jpg",
  //     "https://i.pinimg.com/736x/4f/ed/14/4fed14d4db0e4e3d8dde3bc0ecb6caf6.jpg",
  //   ],
  //   [
  //     "sad",
  //     "January",
  //     "12",
  //     "2025",
  //     "04:30:10",
  //     "https://i.pinimg.com/474x/b2/e6/ae/b2e6ae2e04794c69c5fa602699c563dd.jpg",
  //     "https://i.pinimg.com/736x/4f/ed/14/4fed14d4db0e4e3d8dde3bc0ecb6caf6.jpg",
  //   ],
  //   [
  //     "sad",
  //     "January",
  //     "12",
  //     "2025",
  //     "04:30:10",
  //     "https://i.pinimg.com/474x/b2/e6/ae/b2e6ae2e04794c69c5fa602699c563dd.jpg",
  //     "https://i.pinimg.com/736x/4f/ed/14/4fed14d4db0e4e3d8dde3bc0ecb6caf6.jpg",
  //   ],
  //   [
  //     "sad",
  //     "January",
  //     "12",
  //     "2025",
  //     "04:30:10",
  //     "https://i.pinimg.com/474x/b2/e6/ae/b2e6ae2e04794c69c5fa602699c563dd.jpg",
  //     "https://i.pinimg.com/736x/4f/ed/14/4fed14d4db0e4e3d8dde3bc0ecb6caf6.jpg",
  //   ],
  //   [
  //     "sad",
  //     "January",
  //     "12",
  //     "2025",
  //     "04:30:10",
  //     "https://i.pinimg.com/474x/b2/e6/ae/b2e6ae2e04794c69c5fa602699c563dd.jpg",
  //     "https://i.pinimg.com/736x/4f/ed/14/4fed14d4db0e4e3d8dde3bc0ecb6caf6.jpg",
  //   ],
  //   [
  //     "sad",
  //     "January",
  //     "12",
  //     "2025",
  //     "04:30:10",
  //     "https://i.pinimg.com/474x/b2/e6/ae/b2e6ae2e04794c69c5fa602699c563dd.jpg",
  //     "https://i.pinimg.com/736x/4f/ed/14/4fed14d4db0e4e3d8dde3bc0ecb6caf6.jpg",
  //   ],
  //   [
  //     "sad",
  //     "January",
  //     "12",
  //     "2025",
  //     "04:30:10",
  //     "https://i.pinimg.com/474x/b2/e6/ae/b2e6ae2e04794c69c5fa602699c563dd.jpg",
  //     "https://i.pinimg.com/736x/4f/ed/14/4fed14d4db0e4e3d8dde3bc0ecb6caf6.jpg",
  //   ],
  //   [
  //     "sad",
  //     "January",
  //     "12",
  //     "2025",
  //     "04:30:10",
  //     "https://i.pinimg.com/474x/b2/e6/ae/b2e6ae2e04794c69c5fa602699c563dd.jpg",
  //     "https://i.pinimg.com/736x/4f/ed/14/4fed14d4db0e4e3d8dde3bc0ecb6caf6.jpg",
  //   ],
  // ];

  const photos = photos_array.map(
    ([mood, month, day, year, time, face_src, screen_src]) => ({
      face_src: screen_src,
      screen_src: face_src,
      alt: `${mood} - ${month} ${day}, ${year} at ${time}`,
      timestamp: time, // Include timestamp for positioning
      backgroundGradient: colors.gradients[mood],
    })
  );

  const toggle_polariod = (e) => {
    const elem = e.target;
    const parent = elem.parentElement;

    // parent.classList.toggle('active')
  };

  // Calculate positions along the timeline based on the timestamps
  const timelineWidth = 2000; // Set dynamically for 72em width
  const totalTime = photos.length; // You could calculate total time if timestamps vary
  const spacing = timelineWidth / totalTime;

  return (
    <div style={styles.galleryContainer}>
      <div style={styles.gallery}>
        {photos.map((photo, index) => {
          const position = index * spacing; // Position relative to timeline
          const randomAngle = Math.random() * 40 - 20; // Slight random tilt

          // Adjust yOffset to avoid the center, keeping polaroids above and below
          const yOffset =
            Math.random() < 0.5
              ? Math.random() * 100 - 220 // Random position in the top section
              : Math.random() * 100 + 220; // Random position in the bottom section

          return (
            <div
              key={index}
              style={{
                ...styles.polaroidWrapper,
                transform: `translate(${position}px, ${yOffset}px) rotate(${randomAngle}deg)`,
              }}
              className={"polaroid-container"}
            >
              <div className="polaroid-expand" onClick={toggle_polariod}></div>
              <Polaroid photo={photo} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  galleryContainer: {
    position: "relative",
    width: "100%",
    height: "100%", // Full height of the container
  },
  gallery: {
    position: "relative",
    width: "100%", // Full width of the container
    height: "100%", // Full height of the container
    display: "flex",
    justifyContent: "center", // Center the gallery items horizontally
    alignItems: "center", // Center the gallery items vertically
  },
  polaroidWrapper: {
    position: "absolute",
    transition: "transform 0.3s ease", // Smooth hover effect
    cursor: "pointer",
  },
};
