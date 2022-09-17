import React, { useState } from "react";
import App from "./App";
import GameOver from "./GameOver";

function MainPage() {
  const [displayGame, setDisplayGame] = useState(false);
  const [displayMainPage, setDisplayMainPage] = useState(true);

  function startGame() {
    setDisplayMainPage(false);
    setDisplayGame(true);
  }

  return (
    <>
      {displayMainPage && (
        <div>
          <div style={{ textAlign: "center", alignItems: "center" }}>
            <h1>Water connects to everything in life!</h1>
            <h2>Wanna see for yourself?</h2>
            <h3>(1) Pick any word</h3>
            <h3>(2) Link it to "water" with the least amount of steps</h3>
            <h4>
              Hop from one word to the next one either with a synonym or a
              rhyme!
            </h4>
          </div>
          <div
            style={{
              paddingTop: "300px",
              position: "relative",
            }}
          >
            {" "}
            <h1 id="titleMain">EVERY DROP COUNTS!</h1>
            <div class="drop-container">
              <div class="drop" style={{ margin: "50px" }}>
                {" "}
                <button className="btnStart" onClick={() => startGame()}>
                  START{" "}
                </button>
              </div>
              <input />
              Pick a word
            </div>
          </div>
        </div>
      )}
      {displayGame && (
        <div>
          <App />{" "}
        </div>
      )}
    </>
  );
}

export default MainPage;
