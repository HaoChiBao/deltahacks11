import * as React from "react";
import "./timeline.css";
import colors from "./colours";

export default function Timeline({ emotions }) {
  // theses are the emotions, total it for percentage

  // loop through the emotions second thing to total time and define the colours of gradient
  const totalTime = emotions.reduce((sum, [, time]) => sum + time, 0);

  const gradientStops = [];
  let cumulativePercentage = 0;

  emotions.forEach(([emotion, time]) => {
    const percentage = (time / totalTime) * 100;
    const color = colors.emotions[emotion] || colors.emotions.neutral;

    // Add the color stop to the gradient
    gradientStops.push(`${color} ${cumulativePercentage.toFixed(2)}%`);
    cumulativePercentage += percentage;
  });

  const gradientString = `linear-gradient(90deg, ${gradientStops.join(", ")})`;
  console.log(gradientString);

  return (
    <div className="timeline-container">
      <div
        className="timeline-outline"
        style={{
          background: gradientString,
        }}
      ></div>
    </div>
  );
}
