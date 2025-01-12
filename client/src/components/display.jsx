import Polaroid2 from "./Polaroid2";
import colors from "./colours";

export default function Display({ photos }) {
  let photo = photos.map(
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

  const timelineWidth = 1152;
  const totalTime = photo.length;
  const spacing = timelineWidth / totalTime;

  return (
    <div style={styles.galleryContainer}>
      <div style={styles.gallery}>
        {photo.map((p, index) => {
          const position = index * spacing + 50; // Position relative to timeline
          const randomAngle = Math.random() * 40 - 20; // Slight random tilt

          // Adjust yOffset to avoid the center, keeping polaroids above and below
          const yOffset =
            Math.random() < 0.5
              ? Math.random() * 10 - 20 // Random position in the top section
              : Math.random() * 10 + 20; // Random position in the bottom section

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
              <Polaroid2 photo={p} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  galleryContainer: {
    position: "absolute",
    right: "20%",
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
