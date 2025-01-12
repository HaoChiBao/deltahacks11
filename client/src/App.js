import { useState } from "react";
import "./App.css";
import Landing from "./components/landing";
import Journal from "./components/journal";

function App() {
  const [wrapped, setWrapped] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [emotions, setEmotions] = useState([
    ["happy", 14],
    ["sad", 12],
    ["angry", 9],
  ]);

  const handleWrapped = () => {
    setWrapped(true);
  };

  return (
    <div className="App">
      <div className="content">
        {!wrapped && (
          <Landing
            onWrappedSuccess={handleWrapped}
            photos={photos}
            setPhotos={setPhotos}
            emotions={emotions}
            setEmotions={setEmotions}
          />
        )}
        {wrapped && <Journal photos={photos} emotions={emotions} />}
      </div>
    </div>
  );
}

export default App;
