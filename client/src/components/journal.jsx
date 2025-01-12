import React, { useState } from "react";
import Background from "./background";
import Display from "./display";
import "./journal.css";
import colors from "./colours";

export default function Journal({ photos, emotions }) {
  const emotionsList = ["angry", "fear", "sad", "happy"];
  const groupedData = photos.reduce((acc, entry) => {
    const feeling = entry[0]; // assuming first element is the emotion
    if (!acc[feeling]) {
      acc[feeling] = [];
    }
    acc[feeling].push(entry);
    return acc;
  }, {});

  const getRandomSamples = (array, num) => {
    const maxSamples = Math.min(array.length, num);
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, maxSamples);
  };

  const randomPhotos = {};
  for (const feeling in groupedData) {
    randomPhotos[feeling] = getRandomSamples(groupedData[feeling], 3);
  }

  const [currentEmotionIndex, setCurrentEmotionIndex] = useState(0);

  const handleCompletePage = () => {
    if (currentEmotionIndex < emotionsList.length - 1) {
      setCurrentEmotionIndex(currentEmotionIndex + 1);
    }
  };

  // map through the 4 diff emotions
  return (
    <div>
      {emotionsList.map((emotion, index) => (
        <div key={emotion} className="journal">
          {currentEmotionIndex === index && (
            <div className="page">
              <div className="review">Let’s review @today,</div>
              <div className="count">
                {randomPhotos[emotion].length} times you've felt
              </div>
              <div style={{ color: colors.titles[emotion] }} className="big">
                {emotion.toLowerCase()}
              </div>
              <Background emotions={emotions} />
              <Display photos={randomPhotos[emotion]} />
              <div className="small">
                think back to these moments today, what might have triggered
                feeling {emotion.toLowerCase()}? did it remind you of something
                from the past? how did your body react, and what were you
                thinking in that moment?
              </div>
              <button className="complete" onClick={handleCompletePage}>
                complete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
