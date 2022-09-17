import React, { useState } from "react";
import App from "./App";

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
          <h1>EVERY DROP COUNTS!</h1>
          <div class="drop-container">
            <div class="drop">
              {" "}
              <button className="btnStart" onClick={() => startGame()}>
                START{" "}
              </button>
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
