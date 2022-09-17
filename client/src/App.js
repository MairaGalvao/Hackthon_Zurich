import "./App.css";
import React, { useState } from "react";

function App() {
  const [word, setWord] = useState();

  function handleChange(event) {
    setWord(event.target.value);
    console.log(event.target.value);
  }

  const onClickSynonym = () => {
    console.log(word, "in synom");

    fetch(`http://127.0.0.1:5000/synonym?input=${word}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const onClickRhyme = () => {
    console.log(word, "in rhyme");
    fetch(`http://127.0.0.1:5000/rhyme?input=${word}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <input onChange={handleChange} value={word}></input>
      <div>{word}</div>
      <button onClick={onClickSynonym}>synonym</button>
      <button onClick={onClickRhyme}>rhyme</button>
    </>
  );
}

export default App;
