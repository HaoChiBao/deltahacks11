import { useState } from "react";
import "./App.css";
import Landing from "./components/landing";

function App() {
  const [wrapped, setWrapped] = useState(false);

  const handleWrapped = () => {
    setWrapped(true);
  };

  return (
    <div className="App">
      <div className="content">
        {!wrapped && <Landing onWrappedSuccess={handleWrapped} />}
      </div>
    </div>
  );
}

export default App;
