import React, { useState } from "react";
import "./App.css";

const noResponses = [
  "Are you sure?",
  "You're breaking my heart 💔",
  "Please reconsider 🥺",
  "Think again 😢",
  "Don't leave me hanging!",
];

function App() {
  const [noIndex, setNoIndex] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const handleNoClick = () => {
    if (noIndex < noResponses.length - 1) {
      setNoIndex(noIndex + 1);
    } else {
      alert("You can't resist the cuteness 😘");
    }
  };

  const handleYesClick = () => {
    setAccepted(true);
  };

  return (
    <div className="App">
      <div className="card">
        {!accepted ? (
          <>
           <img src="/download.gif" alt="Cute Bear" className="bear" />

            <h1>Will you be my Valentine?</h1>
            <div className="buttons">
              <button className="yes-btn" onClick={handleYesClick}>
                Yes 💖
              </button>
              <button className="no-btn" onClick={handleNoClick}>
                {noResponses[noIndex]}
              </button>
            </div>
          </>
        ) : (
          <div className="celebration">
            <h1>Yay! 💕 You're my Valentine!</h1>
            <img
              src="https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif"
              alt="Celebration"
              className="celebration-gif"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
