import "./App.css";

function App() {
  const onClickSynonym = () => {
    fetch("http://127.0.0.1:5000/synonym?input=pretty", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const onClickRhyme = () => {
    fetch("http://127.0.0.1:5000/rhyme?input=pretty", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <button onClick={onClickSynonym}>synonym</button>
      <button onClick={onClickRhyme}>rhyme</button>

    </>
  );
}

export default App;
