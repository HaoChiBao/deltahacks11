import "./background.css";
import colors from "./colours";
export default function Background({ emotions }) {
  // circles & gradient depend on top colour of that 3rd, so split into third
  // tbh doesn't really matter how we calculate the third, so we're just going to use like a find max based on second index within each third

  const getTopEmotions = (slice) => {
    const emotionMap = new Map();

    slice.forEach(([emotion, value]) => {
      emotionMap.set(emotion, (emotionMap.get(emotion) || 0) + value);
    });

    return Array.from(emotionMap.entries()).sort((a, b) => b[1] - a[1])[0][0];
  };

  const divideEmotions = () => {
    const third = Math.ceil(emotions.length / 3);
    return [
      emotions.slice(0, third),
      emotions.slice(third, 2 * third),
      emotions.slice(2 * third),
    ];
  };

  const parts = divideEmotions();
  const topEmotions = parts.flatMap(getTopEmotions);

  console.log(topEmotions);

  const topEmotionGradients = topEmotions.map(
    (emotion) =>
      colors.gradients[emotion] || "linear-gradient(45deg, #ccc, #ccc)"
  );

  return (
    <div className="circles">
      {topEmotionGradients.map((gradient, index) => (
        <div
          key={index}
          className={`circle${index + 1}`}
          style={{ background: gradient }}
        ></div>
      ))}
    </div>
  );
}
